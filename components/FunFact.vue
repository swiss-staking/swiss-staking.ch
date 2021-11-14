<template>
  <section v-observe-visibility="onVisibilityChange" class="fun-fact-one">
        
        <div class="container">
            <div class="block-title text-center">
               <!-- /.block-title__text -->
            </div><!-- /.block-title -->
            <div class="fun-fact-one__box-wrapper">
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? 21613781 : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            Staking Value $
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                          <countTo :startVal='0' :endVal='something()' :duration='3000' :autoplay='true'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            clients
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? days() : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            days of experience
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                            <countTo :startVal='0' :endVal='startCounter ? 34 : 0' :duration='3000'></countTo>
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
  import {calculate_staking_metrics,calculate_days} from '../middleware/coins.js'


    export default {
      name: "FunFact",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false,
          test : null
        }
      },
      methods: {
        async onVisibilityChange (isVisible) {
          if (isVisible){
            //await new Promise(resolve => setTimeout(resolve, 3000))
            console.log("Wait 3s")
            this.startCounter = true;
          }

        },
        
        something() {
              
        //console.log(p1)
        //console.log(test)
        //var test = await calculate_staking_metrics().then((value) => {
        var delegators = {}
        fetch("https://api.baking-bad.org/v1/bakers/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn")
        .then(response => response.json())
        .then(json => this.tezos = json.stakingBalance);
        delegators.tezos = this.tezos
        delegators.cosmos = 100

        return delegators.tezos
       
        },
        days(){
         return calculate_days()
        },
        async staking_clients(){
        //const response = await start_trigger()
        return 1
        },
        staking_value(){
          var a = calculate_staking_metrics()

          console.log("a",a)
      },
    }
    }

</script>

<style scoped>

</style>
