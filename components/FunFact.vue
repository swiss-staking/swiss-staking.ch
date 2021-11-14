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
                            <countTo :startVal='0' :endVal='startCounter ? staking_value : 0' :duration='3000'></countTo>
                        </h3><!-- /.fun-fact-one__title -->
                        <p class="fun-fact-one__text">
                            Staking Value $
                        </p><!-- /.fun-fact-one__text -->
                    </div><!-- /.inner-block -->
                </div><!-- /.fun-fact-one__single -->
                <div class="fun-fact-one__single">
                    <div class="inner-block">
                        <h3 class="fun-fact-one__title counter">
                          <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? staking_clients : 0' :duration='3000'>></countTo>
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
          hasData: false       }
      },
      async mounted() {
    try {

      //COMPUTE STAKING VALUE
      const xtz_staked = await fetch("https://api.baking-bad.org/v1/bakers/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn")
      .then(xtz_staked => xtz_staked.json())
      .then(json => this.xtz_staked = json.stakingBalance);
      
      this.atom_staked = 550000
      this.avax_staked = 7000
      this.osmosis_staked = 100000
      this.juno_staked = 600000
      this.dvpn_staked = 100000000
      this.band_staked = 170000

      const xtz_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd")
      .then(xtz_usd => xtz_usd.json())
      .then(json => this.xtz_usd = json.tezos['usd']);

      const atom_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd")
      .then(atom_usd => atom_usd.json())
      .then(json => this.atom_usd = json.cosmos['usd']);
      
      const avax_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd")
      .then(avax_usd => avax_usd.json())
      .then(json => this.avax_usd = json['avalanche-2']['usd']);

      const osmo_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=osmosis&vs_currencies=usd")
      .then(osmo_usd => osmo_usd.json())
      .then(json => this.osmo_usd = json.osmosis['usd']);
      
      const juno_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=juno-network&vs_currencies=usd")
      .then(juno_usd => juno_usd.json())
      .then(json => this.juno_usd = json['juno-network']['usd']);

      const dvpn_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=sentinel&vs_currencies=usd")
      .then(dvpn_usd => dvpn_usd.json())
      .then(json => this.dvpn_usd = json.sentinel['usd']);

      const band_usd = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=band-protocol&vs_currencies=usd")
      .then(band_usd => band_usd.json())
      .then(json => this.band_usd = json['band-protocol']['usd']);
      console.log(band_usd)
      
      console.log(this)
      this.staking_value = (this.xtz_staked*this.xtz_usd + this.atom_staked*this.atom_usd + this.avax_staked*this.avax_usd + this.osmosis_staked*this.osmo_usd + this.juno_staked*this.juno_usd + this.dvpn_staked*this.dvpn_usd +  this.band_staked * this.band_usd) 

      //COMPUTE CLIENTS
      const delegators = await fetch("https://api.tzkt.io/v1/accounts/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn/delegators")
      .then(delegators => delegators.json())
      console.log(delegators)
      this.xtz_clients = Object.keys(delegators).length;

      this.atom_client = 1134
      this.osmo_client = 197
      this.juno_client = 350
      this.dvpn_client = 6
      this.band_client = 200

      this.staking_clients = (this.atom_client + this.xtz_clients + this.osmo_client + this.juno_client + this.dvpn_client + this.band_client)








      this.hasData = true
  
    } catch (err) {
      this.error = err
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
