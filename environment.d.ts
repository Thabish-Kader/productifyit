export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// next auth
			NEXTAUTH_SECRET: string;
			NEXTAUTH_URL: string;
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;

			// stripe
			STRIPE_API_KEY: string;
			STRIPE_SECRET_KEY: string;
			PRICE_ID: string;
			STRIPE_WEBHOOK_SECRET: string;

			// AWS
			NEXT_PUBLIC_TABLE_NAME: string;
			AWS_REGION: string;
			AWS_ACCESS_KEY_ID: string;
			AWS_SECRET_ACCESS_KEY: string;
		}
	}
}
