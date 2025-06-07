import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Todo List",
  description: ":P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
