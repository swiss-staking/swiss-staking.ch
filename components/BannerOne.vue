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
                                        <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? staking_value : 0' :duration='3000'></countTo>
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
                                        <countTo v-if="hasData" :startVal='0' :endVal='startCounter ? this.days: 0' :duration='3000'></countTo>
                                    </h3><!-- /.fun-fact-one__title -->
                                    <p class="fun-fact-one__text">
                                        days of experience
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
      const xtz_staked = await fetch("https://api.baking-bad.org/v1/bakers/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn")
      .then(xtz_staked => xtz_staked.json())
      .then(json => this.xtz_staked = json.stakingBalance);
      
      this.atom_staked = 720000
      this.avax_staked = 6000
      this.osmosis_staked = 140000
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
      
      this.staking_value = (this.xtz_staked*this.xtz_usd + this.atom_staked*this.atom_usd + this.avax_staked*this.avax_usd + this.osmosis_staked*this.osmo_usd + this.juno_staked*this.juno_usd + this.dvpn_staked*this.dvpn_usd +  this.band_staked * this.band_usd) 

      //COMPUTE CLIENTS
      const delegators = await fetch("https://api.tzkt.io/v1/accounts/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn/delegators")
      .then(delegators => delegators.json())
      this.xtz_clients = Object.keys(delegators).length;

      this.atom_client = 1252
      this.osmo_client = 197
      this.juno_client = 350
      this.dvpn_client = 6
      this.band_client = 188
      this.gravity_client = 111


      this.staking_clients = (this.atom_client + this.xtz_clients + this.osmo_client + this.juno_client + this.dvpn_client + this.band_client + this.gravity_client)


    //COMPUTE DAYS
    var date1 = new Date(1531244930*1000);
    var date2 = new Date();
    
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.days = Math.round(Difference_In_Days)

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
    }
    }

</script>

<style scoped>

</style>
