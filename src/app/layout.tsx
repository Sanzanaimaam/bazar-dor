import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/components/HeaderPage";
import Marquee from "@/components/Marquee";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});



export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Your trusted daily price checking platform.",
  icons: {
    icon: "/Stack.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E1E8E1]">
        <HeaderPage />
        <Marquee />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "9999px",
              padding: "10px 20px",
              color: "#0B5429",
              fontWeight: 600,
              border: "1px solid #0F6A36",
            },
            success: {
              iconTheme: { primary: "#0F6A36", secondary: "#F6E81E" },
            },
          }}
        />

      </body>
    </html>
  );
}
