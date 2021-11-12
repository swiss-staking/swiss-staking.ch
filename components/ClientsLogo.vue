<template>
  <section class="brand-style-one">
        <img src="/images/banner-icon-1-5.png" alt="Awesome Image" class="bubble-1" />
        <img src="/images/banner-icon-1-3.png" alt="Awesome Image" class="bubble-2" />
        <div class="container">
            <div class="brand-carousel-one">
              <swiper :options="swiperOptions">

                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
                <swiper-slide>
                <div class="item">
                    <img src="/images/brand-1-1.png" alt="Awesome Image" />
                </div><!-- /.item -->
                </swiper-slide>
              </swiper>
            </div><!-- /.brand-carousel-one -->
            <hr class="style-one" />
        </div><!-- /.container -->
    </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

    export default {
      name: "ClientsLogo",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 5,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Responsive breakpoints
            breakpoints: {
              1024:{
                  slidesPerView : 5
              },
              768:{
                  slidesPerView : 2
              },
              640:{
                  slidesPerView : 2
              },
              320:{
                  slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
