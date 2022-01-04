<template>
  <div>
  <footer class="site-footer" id="footer">

      <div class="site-footer__subscribe">
          <div class="container">
          </div><!-- /.container -->
      </div><!-- /.site-footer__subscribe -->
      <div class="site-footer__main-footer">
          <div class="container">
              <div class="row">
               

                <div class="col-lg-2 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              About Us
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a>Swiss Staking AG</a></li>
                              <li><a >CH-100.3.813.452-8</a></li>
                              <li><a href="mailto:info@swiss-staking.ch">info@swiss-staking.ch</a></li>
                   
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-2 -->

                  <div class="col-lg-2 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              Explore Us
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a href="https://swiss-staking.medium.com/" target="_blank">Blog</a></li>
                              <li><a href="https://twitter.com/@swiss_staking">Twitter</a></li>
                              <li><a href="https://t.me/swissstaking" target="_blank">Telegram Community</a></li>
                              <li><a href="https://t.me/swiss_staking" target="_blank">Telegram DM</a></li>
                              <li><a href="">Terms of Service</a></li>
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-2 -->
                  <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="footer-widget">
                          <h3 class="footer-widget__title">
                              Communities
                          </h3><!-- /.footer-widget__title -->
                          <ul class="footer-widget__link-list">
                              <li><a href="https://t.me/TezosDE" target="_blank">Tezos (German)</a></li>
                              <li><a href="https://t.me/cosmosDE" target="_blank">Cosmos (German)</a></li>
                              <li><a href="https://t.me/nymger" target="_blank">Nym (German)</a></li>
                              <li><a href="https://t.me/+TszFVcvKwIUJ5WUW" target="_blank">Bitcoin (German)</a></li>
                              <li><a href="https://t.me/cryptozeals" target="_blank">Research Calls (German)</a></li>
                          </ul><!-- /.footer-widget__link-list -->
                      </div><!-- /.footer-widget -->
                  </div><!-- /.col-lg-3 -->

             

              </div><!-- /.row -->
          </div><!-- /.container -->
      </div><!-- /.site-footer__main-footer -->
      <div class="site-footer__bottom-footer text-center">
          <div class="container">
              <p>&copy; copyright 2021 by <a href="#">Swiss Staking AG</a></p>
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
