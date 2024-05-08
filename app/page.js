import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import NotableEvents from "@/components/Home/NotableEvents";
import Sponsors from "@/components/Home/Sponsors";
// import localFont from "next/font/local";

export const metadata = {
  title: "GDSC-TCET",
  description: "Google Developer Student Clubs - TCET",
};

// const oxygenFont = localFont({
//   src: "../fonts/Oxygen/Oxygen-Regular.ttf",
// });

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
