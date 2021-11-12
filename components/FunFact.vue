<template>
  <section v-observe-visibility="onVisibilityChange" class="fun-fact-one">
        <img src="/images/banner-icon-1-4.png" alt="Awesome Image" class="bubble-1" />
        <img src="/images/banner-icon-1-2.png" alt="Awesome Image" class="bubble-2" />
        <img src="/images/banner-icon-1-1.png" alt="Awesome Image" class="bubble-3" />
        <img src="/images/banner-icon-1-6.png" alt="Awesome Image" class="bubble-4" />
        <div class="container">
            <div class="block-title text-center">
               <!-- /.block-title__text -->
            </div><!-- /.block-title -->
            <div class="fun-fact-one__box-wrapper">
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? 4789 : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            Staking Value $
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                          <countTo :startVal='0' :endVal='startCounter ? 6400 : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            days of experience
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? 960 : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            clients
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? 448 : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            nodes running
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
            </div><!-- /.fun-fact-one_box-wrapper -->
        </div><!-- /.container -->
    </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

    export default {
      name: "FunFact",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },
    }

</script>

<style scoped>

</style>
