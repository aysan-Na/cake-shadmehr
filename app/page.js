import Image from "next/image";
import styles from "./page.module.css";
import Section from "@/components/templates/index/Section/Section";
import ProductsSlide from "@/components/templates/index/ProductsSlide/ProductsSlide";
import About from "@/components/templates/index/About/About";

export default function Home() {
  return (
    <div>
      <Section />
      <ProductsSlide/>
      <About />
    </div>
  );
}