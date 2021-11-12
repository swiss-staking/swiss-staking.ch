<template>
  <div>
    <NavTwo />
    <BannerTwo />
    <ServiceOne />
    <CTAThree />
    <CTATwo />
    <CTAOne />
    <Pricing />
    <Testimonial />
    <ClientsLogo />
    <FunFact />
    <BlogHome />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import BannerTwo from "../components/BannerTwo";
  import Footer from "../components/Footer";
  import ServiceOne from "../components/ServiceOne";
  import CTAThree from "../components/CTAThree";
  import CTATwo from "../components/CTATwo";
  import CTAOne from "../components/CTAOne";
  import Pricing from "../components/Pricing";
  import Testimonial from "../components/Testimonial";
  import ClientsLogo from "../components/ClientsLogo";
  import FunFact from "../components/FunFact";
  import BlogHome from "../components/BlogHome";
  export default {
    components: {
      BlogHome,
      FunFact,
      ClientsLogo,
      Testimonial,
      Pricing,
      CTAOne,
      CTATwo,
      CTAThree,
      ServiceOne,
      Footer,
      BannerTwo,
      NavTwo
    },
    head(){
      return {
        title: "Home 2 | Nodid"
      }
    },
  }
</script>
