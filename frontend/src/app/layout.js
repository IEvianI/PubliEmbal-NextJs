import { Inter } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Publi Embal",
  description: "Site vitrine Publi Embal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
