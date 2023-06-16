export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXTAUTH_SECRET: string;
			NEXTAUTH_URL: string;

			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;

			STRIPE_API_KEY: string;
			STRIPE_SECRET_KEY: string;

			PRICE_ID: string;
		}
	}
}
