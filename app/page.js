import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import NotableEvents from "@/components/Home/NotableEvents";
import Sponsors from "@/components/Home/Sponsors";

export const metadata = {
  title: "GDSC-TCET",
  description: "Google Developer Student Clubs - TCET",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <NotableEvents />
      <About />
      <Metrics />
      <Sponsors />
    </div>
  );
}
