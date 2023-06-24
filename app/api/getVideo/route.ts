import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

export async function GET(req: NextRequest) {
	const params = {
		Bucket: "product-vision-videos",
		Key: "demo.mp4",
		Expires: 120,
	};

	try {
		const signedUrl = s3.getSignedUrl("getObject", params);
		console.log(`Signed Urload URL: ${signedUrl}`);
		return NextResponse.json({ signedUrl }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "An error occured" },
			{ status: 500 }
		);
	}
}
