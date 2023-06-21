import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: "2022-11-15",
	});

	const session = await getServerSession(authOptions);

	if (!session?.user) {
		return NextResponse.json(
			{
				error: {
					code: "no-access",
					message: "You are not signed in.",
				},
			},
			{ status: 401 }
		);
	}

	const checkoutSession = await stripe.checkout.sessions.create({
		mode: "subscription",

		customer: session.user.stripeCustomerId,
		line_items: [
			{
				price: process.env.PRICE_ID,
				quantity: 1,
			},
		],
		success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,

		subscription_data: {
			metadata: {
				// so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
				payingUserEmail: session.user?.email!,
			},
			trial_period_days: 14,
		},
	});

	if (!checkoutSession.url) {
		return NextResponse.json(
			{
				error: {
					code: "stripe-error",
					message: "Could not create checkout session",
				},
			},
			{ status: 500 }
		);
	}

	return NextResponse.json({ session: checkoutSession }, { status: 200 });
}
