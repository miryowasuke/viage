import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
