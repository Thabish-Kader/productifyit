import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
	const { email } = await request.json();
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: "2022-11-15",
	});

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: process.env.PRICE_ID,
				quantity: 1,
			},
		],
		mode: "subscription",
		success_url: `${process.env.NEXTAUTH_URL}/success`,
		cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
		subscription_data: {
			trial_period_days: 14,
		},
		customer_email: email,
	});

	return NextResponse.json(session.url);
}
