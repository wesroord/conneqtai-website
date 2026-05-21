import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConneqtAI — AI Systems That Work For Your Business",
  description:
    "ConneqtAI builds intelligent AI agents, chatbots and automations that save time, improve customer experience and increase efficiency.",
  openGraph: {
    title: "ConneqtAI — AI Systems That Work For Your Business",
    description:
      "Modern AI solutions for businesses. AI chatbots, agents, automations and workflow systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
