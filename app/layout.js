import { Allison, Geist, Geist_Mono, Smooch_Sans } from "next/font/google";
import "./globals.css";
// import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { MyProvider } from "./context-api/MyProvider";
import { FirebaseProvider } from "./context/Firebase";
import FooterConRender from "./components/FooterConRender"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavConRender from "./components/NavConRender";

const allison_init = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});
const smooch_sans_init = Smooch_Sans({
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
  title: "Construction Card Services",
  description: "Construction Card Services",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${allison_init.variable}  antialiased`}
      >
      <div>

        <MyProvider>
          <ChakraProvider>
            {/* <ToastContainer /> */}
            <NavConRender />
            <FirebaseProvider>
              {children}
            </FirebaseProvider>
            <FooterConRender />
          </ChakraProvider>
        </MyProvider>
      </div>

      </body>
    </html>
  );
}
