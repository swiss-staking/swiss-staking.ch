<template>
  <div>
    <NavOne />
    <BannerOne />
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
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
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
      BannerOne,
      NavOne
    }
  }
</script>
