<template>
  <div>
  <footer class="site-footer">

      <div class="site-footer__subscribe">
          <div class="container">
              <p>Team</p>
          </div><!-- /.container -->
      </div><!-- /.site-footer__subscribe -->
      <div class="site-footer__main-footer">
          <div class="container">
              <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="footer-widget footer-widget--about-widget">
                          <a href="index.html" class="footer-widget__footer-logo"><img src="images/logo-1-1.png" alt="Awesome Image" /></a>
                            <p>UID: CHE-105.648.628 </p>
                            <p>CH-iD: CH-100-3024094-6</p>
                          <p>info@swiss-staking.ch</p>
                          <p><br></p>
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-3 -->
                  <div class="col-lg-2 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              Explore
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a href="#">Bitcoin community</a></li>
                              <li><a href="#">Our Team</a></li>
                              <li><a href="#">Features</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">How It Works</a></li>
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-2 -->
                  <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              Services
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a href="#">Speed Optimization</a></li>
                              <li><a href="#">Marketing Analysis</a></li>
                              <li><a href="#">SEO and Backlinks</a></li>
                              <li><a href="#">Content Marketing</a></li>
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-3 -->
                  <div class="col-lg-2 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              Links
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a href="#">Help</a></li>
                              <li><a href="#">Support</a></li>
                              <li><a href="#">Clients</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-2 -->
                  <div class="col-lg-2 col-md-6 col-sm-12 d-flex">
                      <div class="footer-widget my-auto">
                          <div class="social-block">
                              <a href="#"><i class="fa fa-twitter"></i></a>
                              <a href="#"><i class="fa fa-facebook-f"></i></a>
                              <a href="#"><i class="fa fa-linkedin"></i></a>
                              <a href="#"><i class="fa fa-youtube-play"></i></a>
                          </div><!-- /.social-block -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-2 -->
              </div><!-- /.row -->
          </div><!-- /.container -->
      </div><!-- /.site-footer__main-footer -->
      <div class="site-footer__bottom-footer text-center">
          <div class="container">
              <p>&copy; copyright 2021 by <a href="#">Swiss Staking</a></p>
          </div><!-- /.container -->
      </div><!-- /.site-footer__bottom-footer -->
          </footer>

          <a @click="scrollTop" :style="`display:${scrollBtn ? 'block' : ''}`" href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>

  </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false,
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {

        handleScroll() {
          if (window.scrollY > 70) {
            this.scrollBtn = true
          } else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }

      }
    }
</script>

<style scoped>

</style>
