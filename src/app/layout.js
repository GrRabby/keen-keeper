import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TimelineProvider from "@/Context/Context";

const geistSans = Geist({
  variable: "--font-geist",
});


export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </TimelineProvider>
        
      </body>
    </html>
  );
}
