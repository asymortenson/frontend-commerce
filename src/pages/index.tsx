import type { NextPage } from "next";
import Blog from "../components/blog";
import FeaturedProducts from "../components/featuredProducts";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/wrapper";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <Blog />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
