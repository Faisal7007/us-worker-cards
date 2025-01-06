import { Allison, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";



const allison_init = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${allison_init.variable}  antialiased`}
      >
          <ChakraProvider>


      <Navbar/>
      
        {children}

        <Footer/>
        </ChakraProvider>

      </body>
    </html>
  );
}
