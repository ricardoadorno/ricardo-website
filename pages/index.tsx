import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Header />
      <Project />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
