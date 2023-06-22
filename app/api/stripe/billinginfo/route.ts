import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2022-11-15",
});

export async function GET(req: NextRequest) {
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
	const subscriptionId = session.user.subscriptionId;
	try {
		const subscription = await stripe.subscriptions.retrieve(
			subscriptionId
		);

		return NextResponse.json({ subscription }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "An error occured" },
			{ status: 500 }
		);
	}
}
