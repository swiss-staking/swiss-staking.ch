<template>
    
    

  <div>
    <PageLoader />
    <NavOne />
    <BannerOne />
    <ServiceOne />
    <CTAThree />   
    <BlogHome />
    <CTAOne />
    <Team />
    <Footer />
  </div>
</template>
<script>
  import PageLoader from '../components/PageLoader'
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
  import Footer from "../components/Footer";
  import ServiceOne from "../components/ServiceOne";
  import CTAThree from "../components/CTAThree";
  import CTAOne from "../components/CTAOne";
  import BlogHome from "../components/BlogHome";
  import Team from "../components/Team";
  export default {
    components: {
      BlogHome,
      CTAOne,
      CTAThree,
      ServiceOne,
      Footer,
      BannerOne,
      NavOne,
      Team,
      PageLoader
    }
  }
</script>
