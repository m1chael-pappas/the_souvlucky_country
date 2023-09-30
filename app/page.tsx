import ContentWithImage from "./components/Context/ContextWithImg";
import Header from "./components/Header/Header";
import Hero from "./components/layout/Hero";
import StoryComponent from "./components/Context/StoryComponent";
import Footer from "./components/layout/Footer";
import Reservation from "./components/layout/Reservation";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ContentWithImage />
      <StoryComponent />
      <Reservation />
      <Footer />
    </main>
  );
}
