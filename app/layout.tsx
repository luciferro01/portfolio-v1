import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohil Bansal",
  description:
    "I am Mohil Bansal, a Programmer from India mostly doing Full Stack App Development in Flutter & React Native and having 10+ personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Mohil Bansal" />
        <meta
          name="description"
          content="I am Mohil Bansal, a Programmer from India mostly doing Full Stack App Development in Flutter & React Native and having 10+ personal projects."
        />
        <meta
          name="keywords"
          content="Mohil Bansal, Mohil, Bansal, mohilBansal, mohilbansal, mohil, bansal, mohilbansal.in,"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Mohil Bansal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mohilbansal.vercel.app/" />
        <meta property="og:title" content="Mohil Bansal" />
        <meta
          property="og:description"
          content="I am Mohil Bansal, a Programmer from India mostly doing Full Stack App Development in Flutter & React Native and having 10+ personal projects."
        />
        <meta
          property="og:image"
          content="https://mohilbansal.vercel.app/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://mohilbansal.vercel.app/"
        />
        <meta property="twitter:title" content="Mohil Bansal" />
        <meta
          property="twitter:description"
          content="I am Mohil Bansal, a Programmer from India mostly doing Full Stack App Development in Flutter & React Native and having 10+ personal projects."
        />
        <meta
          property="twitter:image"
          content="https://mohilbansal.vercel.app/banner.png"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-DMECFSFPKW`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DMECFSFPKW', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
