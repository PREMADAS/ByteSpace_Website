import "./globals.css";
import { Poppins } from "next/font/google";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "ByteSpace",
  description: "Get access to hundreds of courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}