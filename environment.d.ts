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
			NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;

			// AWS
			TABLE_NAME: string;
			REGION: string;
			ACCESS_KEY_ID: string;
			SECRET_ACCESS_KEY: string;
		}
	}
}
