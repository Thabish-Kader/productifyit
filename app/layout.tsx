import Head from "next/head";
import Provider from "./components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ProductifyIT",
	description:
		"An application that enables entrepreneurs to design digital products within a three-dimensional canvas.",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
		<head>
        <script
          dangerouslySetInnerHTML={{
			  __html: `
			  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-TT8GKGCQ');
            `,
		}}
        />
		</head>

			<Provider>
				<noscript
          dangerouslySetInnerHTML={{
            __html: `
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TT8GKGCQ"
			height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
				<body className={`${inter.className}  `}>
					{children}</body>
			</Provider>
		</html>
	);
}
