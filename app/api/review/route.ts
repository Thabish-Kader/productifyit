import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";
import docClient from "@/app/utils/dynamodb";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
	const { customerEmail, rateing, review } = await req.json();
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

	try {
		const updateUserSubscriptionTrueParmas = {
			TableName: process.env.TABLE_NAME,
			Key: { email: customerEmail },
			UpdateExpression: "SET rateing = :rateing, review = :review",
			ExpressionAttributeValues: {
				":rateing": rateing,
				":review": review,
			},
		};

		await docClient.send(
			new UpdateCommand(updateUserSubscriptionTrueParmas)
		);

		return NextResponse.json(
			{ message: "Review submitted" },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "An error occured" },
			{ status: 500 }
		);
	}
}
