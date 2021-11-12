<template>
  <div>
    <NavTwo />
    <PageHeader title="Blog" />
    <Blog />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import Blog from "../components/Blog";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, PageHeader, NavTwo, Blog},
    head(){
      return {
        title: "Blog | Nodid"
      }
    },
  }
</script>
