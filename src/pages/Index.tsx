import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Parish from "@/components/Parish";
import Leadership from "@/components/Leadership";
import CurrentActivities from "@/components/CurrentActivities";
import InterdisciplinaryProject from "@/components/InterdisciplinaryProject";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />
      <Introduction />
      <Parish />
      <Leadership />
      <CurrentActivities />
      <InterdisciplinaryProject />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Index;