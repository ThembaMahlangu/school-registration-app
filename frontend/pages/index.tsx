import BenefitsView from "@/components/views/BenefitsView";
import MainView from "@/components/views/MainView";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <MainView />
      <BenefitsView />
    </>
  );
}
