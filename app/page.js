import Image from "next/image";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";


export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Work /> 
    </>
  );
}
