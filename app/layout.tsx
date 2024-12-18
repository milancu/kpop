import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import clsx from "clsx";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white"
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black"
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head/>
    <body
      className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
    <Providers themeProps={{
      attribute: "class",
      defaultTheme: "dark"
    }}>
      <div className="relative flex flex-col h-screen">
        {/*<Navbar />*/}
        <main className="mx-auto w-full max-w-2xl pt-6 px-4 flex-grow">
          {children}
        </main>
      </div>
    </Providers>
    <SpeedInsights />
    <Analytics />
    </body>
    </html>
  );
}
