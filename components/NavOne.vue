<template>
  <header class="site-header header-one">
      <nav :class="`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricky-fixed' : ''} animated slideInDown`">
          <div class="container clearfix">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="logo-box clearfix">
                  <nuxt-link class="navbar-brand" to="/">
                      <img src="/images/swiss-staking-logo-large-2.png" class="main-logo" alt="Awesome Image" />
                  </nuxt-link>
                  <button @click="mobileToggle = !mobileToggle" class="menu-toggler" data-target=".header-one .main-navigation">
                      <span class="fa fa-bars"></span>
                  </button>
              </div><!-- /.logo-box -->
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div :class="`main-navigation ${mobileToggle ? 'showen' : ''}`" :style="`display: ${mobileToggle ? 'block' : ''}`">
                  <ul class=" navigation-box one-page-scroll-menu ">
                      <li class="current scrollToLink">
                          <a href="#home">Home</a>
                      </li>
                      <li class="scrollToLink">
                          <a href="#setup">Setup</a>
                      </li>
                      <li class="scrollToLink">
                          <a href="#pos">PoS</a>

                      </li>
                      <li class="scrollToLink">
                          <a href="#networks">Networks</a>
                      </li>
                      
                      <li class="scrollToLink">
                          <a href="#clients">Clients</a>
                      </li>

                      <li class="scrollToLink">
                          <a href="#team">Team</a>
                      </li>


                  </ul>
              </div><!-- /.navbar-collapse -->
              <div class="right-side-box">
                  <a href="#footer" class="header-one__btn">Contact</a>
              </div><!-- /.right-side-box -->
          </div>
          <!-- /.container -->
      </nav>
  </header>
</template>

<script>
    export default {
      name: "NavOne",
      data(){
        return{
          sticky: false,
          mobileToggle: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {
        handleScroll () {

          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

      }

    }
</script>

<style scoped>

</style>
