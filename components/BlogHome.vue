<template>
  <section class="blog-one" id="networks">
        <div class="container">
            <div class="block-title text-center">
                <div class="block-title__text"><span>Evolutionary, revolutionary, and</span> <br> <span>everything in-between.</span></div><!-- /.block-title__text -->
            </div><!-- /.block-title -->
            <div class="row">

                <div class="col-lg-4"><!-- Cosmos -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 May, 2019</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/cosmos.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Cosmos</nuxt-link></h3>
                            <p class="blog-one__text">The Cosmos Network is a decentralized network of independent, scalable, and interoperable blockchains.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 1% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/cosmos/staking/cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q" target="blank" >Delegate</a>
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->
                
                                
                <div class="col-lg-4"><!-- Tezos -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 July, 2018</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/tezos.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Tezos</nuxt-link></h3>
                            <p class="blog-one__text">Tezos is a new decentralized blockchain that governs itself by establishing a true digital commonwealth.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 10% fee</a>
                            <a  class="blog-one__btn" href="https://tzstats.com/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn" target="blank" >Delegate</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4"><!-- Avalanche -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 October, 2020</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/avalanche.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Avalanche</nuxt-link></h3>
                            <p class="blog-one__text">Avalanche is a breakthrough consensus protocol that is secure, decentralized, and achieves high performance.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 10% fee</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="avax_alert">Info</a>                             
                            </div>
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Osmosis -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 July, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/osmosis.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Osmosis</nuxt-link></h3>
                            <p class="blog-one__text">Osmosis is an advanced AMM protocol built using the Cosmos SDK that will allow developers to design, build, and deploy their own customized AMMs.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/osmosis/staking/osmovaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww24nrlnx" target="blank" >Delegate</a>                                                 
                            </div>
                            
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Juno -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 October, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/juno.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Juno</nuxt-link></h3>
                            <p class="blog-one__text">Juno is an interoperable smart contract network. Highly scalable, robust, secure and easy to deploy - built on the Cosmos SDK.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 1% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/juno/staking/junovaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2wsdcwk" target="blank" >Delegate</a>                             
                            </div>
                            
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4"><!-- Chainlink -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 July, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/chainlink.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title"><nuxt-link to="/blog-details">Chainlink</nuxt-link></h3>
                            <p class="blog-one__text">Chainlink is a decentralized network that provides data and information from off-blockchain sources to on-blockchain smart contracts via oracles.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="link_alert">Info</a>                             
                            </div>
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4"><!-- ETH 2.0 -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">10 June, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/ethereum.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">ETH 2.0</h3>
                            <p class="blog-one__text">ETH 2.0 is an upgrade to the Ethereum network that aims to improve the network's security and scalability - shifting their current mining model to a staking model.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="eth_alert">Info</a>                             
                            </div>
                                    
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Band -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 November, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/band.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Band</h3>
                            <p class="blog-one__text">Secure, scalable and decentralized Oracle. Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>                      
                             <a href="https://ping.pub/band-protocol/staking/bandvaloper1nzfwx85yjjar55fft72vj72lg6pfgzfz6dsrgm" target="_blank" class="blog-one__btn">Delegate</a>                           

                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Nym-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 November, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/nym.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Nym</h3>
                            <p class="blog-one__text">Nym is developing the next generation infrastructure to prevent data leakage by protecting every packet’s metadata at the network and application layers.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Testnet</a>
                            <a target="_blank" class="blog-one__btn">N/A</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Sentinel-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 June, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/sentinel.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Sentinel</h3>
                            <p class="blog-one__text">Sentinel's dVPN service allows a person to use the VPN service or help the VPN by sharing free, unused internet with other people in the network.</p>
                            </div>
                            <div><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a href="https://ping.pub/sentinel/staking/sentvaloper1p96zfghgdcs6yv920qfhwn3wnzh9srewffkt5c" target="_blank" class="blog-one__btn">Delegate</a>                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Evmos-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 November, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/evmos.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Evmos</h3>
                            <p class="blog-one__text">Evmos serves as the first IBC-compatible EVM-based chain, bringing composability, interoperability, and fast finality to Ethereum.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Testnet</a>
                            <a target="_blank" class="blog-one__btn">N/A</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4"><!-- Anoma -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 November, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/anoma.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Anoma</h3>
                            <p class="blog-one__text">A sovereign, proof-of-stake blockchain protocol that enables private, asset-agnostic cash and private bartering among any number of parties.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet</a>
                            <a target="_blank" class="blog-one__btn">N/A</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4"><!-- Gravity -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">17. December, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/gravity.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Gravity Brdige</h3>
                            <p class="blog-one__text">Gravity will be able to bring ERC20 assets from Ethereum into Cosmos, as well as Cosmos assets to Ethereum ERC20 representations.</p>
                            </div>
                            <div><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a href="https://www.mintscan.io/gravity-bridge/validators/gravityvaloper1z5nxs28a8krdhv6z6jw7gs5k6qr43xycr8wc6k" target="_blank" class="blog-one__btn">Delegate</a>                     
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->




            </div><!-- /.row -->
        </div><!-- /.container -->
                            

    </section>
</template>

<script>

    export default {
        name: "BlogHome",
        methods: {
            
            avax_alert: function test(){
                this.$alert("Our Avalanche node is full and currently held private. Please contact us for more details if you have any collabortation in mind.","Avalanche","warning");
            },
            eth_alert: function test(){
                this.$alert("Ethereum does not support delegated proof-of-stake. If you are interested that we run a ETH 2.0 validator on your behalf, please contact us.");
            },
            link_alert: function test(){
                this.$alert("These nodes are ran by us for an institutional client. Additionally, Chainlink does not support staking yet. If you are interested in any collaboration regarding Chainlink, please contact us.");
                
        }
        
    }
}

</script>

<style scoped> </style>