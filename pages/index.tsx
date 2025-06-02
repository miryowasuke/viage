import Head from "next/head";
import MainVisual from "@/components/sections/MainVisual";
import StorySection from "@/components/sections/StorySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
// import VoicesSection from "@/components/sections/VoicesSection";
// import StaffSection from "@/components/sections/StaffSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>指先からはじまる、私らしい美しさ | ネイルサロンViage</title>
        <meta
          name="description"
          content="温もりと癒しのネイルサロン。あなたらしい美しさを、心を込めてお届けします。"
        />
        <meta
          property="og:title"
          content="指先からはじまる、私らしい美しさ | ネイルサロンViage"
        />
        <meta
          property="og:description"
          content="温もりと癒しのネイルサロン。あなたらしい美しさを、心を込めてお届けします。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:url" content="https://viage.jp/" />
      </Head>
      <main className="bg-[#fff8f6] min-h-screen font-sans">
        <MainVisual />
        <StorySection />
        <ServicesSection />
        <ContactSection />
        {/* <VoicesSection />
        <StaffSection /> */}
      </main>
    </>
  );
}
