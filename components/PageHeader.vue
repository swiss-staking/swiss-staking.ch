<template>
  <section class="inner-banner">
      <div class="container text-center">
          <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="thm-breadcrumb__item"><span>{{ title }}</span></li>
          </ul><!-- /.thm-breadcrumb -->
          <h2 class="inner-banner__title"><span>{{ title }}</span></h2><!-- /.inner-banner__title -->
      </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "PageHeader",
      props: {
        title: {
          type: String
        }
      }
    }
</script>

<style scoped>

</style>
