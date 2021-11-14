<template>
  <section class="cta-three">
      <img src="/images/banner-icon-1-6.png" alt="Awesome Image" class="bubble-1" />
      <img src="/images/banner-icon-1-4.png" alt="Awesome Image" class="bubble-2" />
      <img src="/images/banner-icon-1-5.png" alt="Awesome Image" class="bubble-3" />
      <div class="container">
          <img src="/images/phone2.png" alt="Awesome Image" class="cta-three__moc" />
          <div class="row no-gutters justify-content-end">
              <div class="col-lg-6 col-md-12 col-sm-12 d-flex">
                  <div class="cta-three__content my-auto">
                      <div class="block-title">
                          <div class="block-title__text"><span>Proof-Of-Stake.</span> <br> <span>An energy-efficient and incentivized</span><br> <span>algorithm.</span></div><!-- /.block-title__text -->
                      </div><!-- /.block-title -->
                      <p class="cta-three__text">In a PoS system, a blockchain appends and agrees on new blocks through a process where anyone who holds tokens of that blockchain can participate. The influence an agent has is proportional to the number of coins (or ‘stake’) it holds. This is a vastly more efficient alternative to PoW ‘mining’ and enables blockchains to operate without mining’s high hardware and electricity costs.
                          A DPos (Delegated Proof of Stake) or LPoS (Liquid Proof of Stake) allows token holders to delegate their validation rights to other token holders (validator) without transferring ownership to them..</p><!-- /.cta-three__text -->
                      <ul class="cta-three__list">
                          <li class="cta-three__list-item"><i class="fa fa-check"></i>Our nodes participate in the distributed consensus. The rewards made by Swiss Staking is directly distributed to the delegator's wallet.</li>
                          <br>
                          <li class="cta-three__list-item"><i class="fa fa-check"></i>Swiss Staking takes full responsibility for downtime slashing. In such a case we refund our delegators with the amount of the slashed tokens.</li>
                          <br>
                          <li class="cta-three__list-item"><i class="fa fa-check"></i>By delegating, you only delegate your staking rights of your coins to us as a validator. You never hand over your private keys - you always have full control over your coins.</li>
                      </ul><!-- /.cta-three__list -->
                    <!-- /.cta-three__list -->
                  </div><!-- /.cta-three__content -->
              </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
      </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
        name: "CTAThree"
    }
</script>

<style scoped>

</style>
