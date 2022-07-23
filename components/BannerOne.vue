<template>
  <section v-observe-visibility="onVisibilityChange" class="banner-one" id="home">
            <!-- /.block-title 
              <img src="/images/banner-icon-1-1.png" alt="Awesome Image" class="bubble-1" />
             
              <img src="/images/banner-icon-1-3.png" alt="Awesome Image" class="bubble-2" />
              <img src="/images/banner-icon-1-2.png" alt="Awesome Image" class="bubble-3" /> 
              
              <img src="/images/banner-icon-1-4.png" alt="Awesome Image" class="bubble-4" />
              <img src="/images/banner-icon-1-5.png" alt="Awesome Image" class="bubble-5" />
              
              <img src="/images/banner-icon-1-6.png" alt="Awesome Image" class="bubble-6" />
            -->
              <!-- /.block-title
          	  <img src="/images/cosmos.png" alt="Awesome Image" class="bubble-1" />
              <img src="/images/avalanche.png" alt="Awesome Image" class="bubble-2" />
              <img src="/images/chainlink.png" alt="Awesome Image" class="bubble-3" />
              <img src="/images/tezos.png" alt="Awesome Image" class="bubble-4" />
              <img src="/images/ethereum.png" alt="Awesome Image" class="bubble-5" />
              <img src="/images/osmosis.png" alt="Awesome Image" class="bubble-6" />
              -->


          	<!-- img <img src="/images/swiss-staking-logo-large.png" class="banner-one__moc" alt="Awesome Image"/> -->
          

              <div class="container">


    



                  <div class="row">
                      <div class="col-lg-6">
                          <div class="banner-one__content">
                              <div class="block-title">
                                  <div class="block-title__text type-append-body"><span>Get rewarded by</span><br> <span>staking your </span> <br> <span>crypto assets</span> </div><!-- /.block-title__text -->
                              </div><!-- /.block-title -->
                              <p class="banner-one__text">Swiss Staking is an ever-expanding proof-of-stake validator and venture fund based in Switzerland. We offer "Staking as a Service" and back the blockchain protocols of tomorrow. </p><!-- /.banner-one__text -->
                            <a href="#networks" class="banner-one__btn">Get Started</a>
                              
                            <!-- FUN_FACT --> 
                           
                                    </div><!-- /.banner-one__content -->
                                </div><!-- /.col-lg-5 -->
                            </div><!-- /.row -->

                            <div class="fun-fact-one__box-wrapper">

                            <div class="fun-fact-one__single">
                                <div class="inner-block">
                                    <h3 class="fun-fact-one__title counter">
                                        <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? data.total_stake : 0' :duration='3000'></countTo>
                                    </h3><!-- /.fun-fact-one__title -->
                                    <p class="fun-fact-one__text">
                                        Staking Value $
                                    </p><!-- /.fun-fact-one__text -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.fun-fact-one__single -->
                            
                            <div class="fun-fact-one__single">
                                <div class="inner-block">
                                    <h3 class="fun-fact-one__title counter">
                                    <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? data.total_delegators : 0' :duration='3000'>></countTo>
                                    </h3><!-- /.fun-fact-one__title -->
                                    <p class="fun-fact-one__text">
                                        clients
                                    </p><!-- /.fun-fact-one__text -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.fun-fact-one__single -->
                            
                            <div class="fun-fact-one__single">
                                <div class="inner-block">
                                    <h3 class="fun-fact-one__title counter">
                                        <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? data.total_days: 0' :duration='3000'></countTo>
                                    </h3><!-- /.fun-fact-one__title -->
                                    <p class="fun-fact-one__text">
                                        days of experience
                                    </p><!-- /.fun-fact-one__text -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.fun-fact-one__single -->

                            <div class="fun-fact-one__single">
                                <div class="inner-block">
                                    <h3 class="fun-fact-one__title counter">
                                        <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? data.total_ibc: 0' :duration='3000'></countTo>
                                    </h3><!-- /.fun-fact-one__title -->
                                    <p class="fun-fact-one__text">
                                        ibc tx relayed
                                    </p><!-- /.fun-fact-one__text -->
                                </div><!-- /.inner-block -->
                            </div><!-- /.fun-fact-one__single -->
                            
                            
                        </div><!-- /.fun-fact-one_box-wrapper -->
                        <!-- END - FUN_FACT --> 
              </div><!-- /.container -->
          </section>
</template>
<script>
import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  
    export default {
      name: "BannerOne",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false,
          hasData: false       }
      },
      async mounted() {
    try {


      //COMPUTE STAKING VALUE
      const data = await fetch("https://207.180.255.81:6677/stats")
      .then(stats => stats.json())
      .then(json => this.data = json);
      console.log(data)
      

     
      this.hasData = true
  
    } catch (err) {
      console.log("haha")
      this.error = err
    }
  },
      methods: {
        async onVisibilityChange (isVisible) {
          if (isVisible){
            //await new Promise(resolve => setTimeout(resolve, 3000))
            this.startCounter = true;
          }

      },
    }
    }

</script>

<style scoped>

</style>
