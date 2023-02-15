import Footer from "@/components/footer/Footer";
import Header from "@/components/header";
import BenefitsView from "@/components/views/BenefitsView";
import MainView from "@/components/views/MainView";

export default function Home() {
  return (
    <>
      <Header />
      <MainView />
      {/* <BenefitsView /> */}
      <Footer />
    </>
  );
}
