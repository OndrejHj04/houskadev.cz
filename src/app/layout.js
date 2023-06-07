import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js",
  data: "data",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sA_Y9uRtjtkf9Zq8tEQhNuJI5Qy94RCzROdc8oJUUoE"
        />
        <title>Houska dev</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
