import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Education />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
