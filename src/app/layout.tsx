import type { Metadata } from "next";
import "@mantine/core/styles.css";

import { CompositeProvider } from "@/components/providers/composite-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Market",
  description: "Car Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CompositeProvider>{children}</CompositeProvider>
      </body>
    </html>
  );
}
