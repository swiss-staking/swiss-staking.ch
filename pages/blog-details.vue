<template>
  <div>
    <NavTwo />
    <PageHeader title="Blog Details" />
    <BlogDetails />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogDetails from "../components/BlogDetails";
  export default {
    components: {BlogDetails, Footer, PageHeader, NavTwo},
    head(){
      return {
        title: "Blog Details| Nodid"
      }
    },
  }
</script>
