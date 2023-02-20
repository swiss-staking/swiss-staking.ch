<template>
  <section class="blog-one" id="networks">
        <div class="container">
            <div class="block-title text-center">
                <div class="block-title__text"><span>Evolutionary, revolutionary, and</span> <br> <span>everything in-between.</span></div><!-- /.block-title__text -->
            </div><!-- /.block-title -->
            <div class="row">
                
                <div class="col-lg-4 cosmos"><!-- Cosmos -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 May, 2019</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/cosmos.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Cosmos</h3>
                            <p class="blog-one__text">The Cosmos Network is a decentralized network and the economic center of independent, scalable, and interoperable (IBC) blockchains.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 1% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/cosmos/staking/cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q" target="blank" >Delegate</a>
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 nym"><!-- Nym-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 November, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/nym.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Nym</h3>
                            <p class="blog-one__text">Nym is developing a privacy infrastructure to prevent data leakage by protecting every packet’s metadata at the network and application layers.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a target="_blank" href ="https://explorer.nym.nodes.guru/validator/nvaloper1ef8fjswyuxnv9779qfug042aca8hevenvnfcfm" class="blog-one__btn">Explorer</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 azero"><!-- AZERO-->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">29 December, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/azero.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Aleph Zero</h3>
                            <p class="blog-one__text">Aleph Zero is a layer 1 privacy blockchain that ensures scalability, low transaction fees, and maximum security guarantees for developers.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a target="_blank" href ="https://alephzero.subscan.io/waiting/5FTsYv3dgJsjndE3ktF1Rp3rF6UjGybGW2mcYVuaFzfrC4Cv" class="blog-one__btn">Explorer</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 ethereum"><!-- ETH 2.0 -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">10 June, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/ethereum.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Ethereum</h3>
                            <p class="blog-one__text">Ethereum switched to proof-of-stake in 2022 because it is more secure, less energy-intensive, and better for implementing new scaling solutions.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="eth_alert">Info</a>                             
                            </div>
                                    
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 obol"><!-- ETH 2.0 -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 November, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/obol.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Obol</h3>
                            <p class="blog-one__text">The Obol Network is an ecosystem for trust minimized staking that enables people to create, test, run & co-ordinate distributed validators.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Testnet</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="obol_alert">Info</a>                             
                            </div>
                                    
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 celestia"><!-- Celestia -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">2023</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/celestia.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Celestia</h3>
                            <p class="blog-one__text">Celestia is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Testnet</a>
                            <a  class="blog-one__btn" href="" target="blank" >N/A</a>                                                 
                            </div>
                            
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 osmosis"><!-- Osmosis -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 July, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/osmosis.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Osmosis</h3>
                            <p class="blog-one__text">Osmosis is an advanced AMM protocol built using the Cosmos SDK that will allow developers to design, build, and deploy their own customized AMMs.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/osmosis/staking/osmovaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww24nrlnx" target="blank" >Delegate</a>                                                 
                            </div>
                            
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                
                <div class="col-lg-4 evmos"><!-- Evmos-->
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
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a target="_blank" href="https://wallet.keplr.app/#/evmos/stake?modal=stake&validator=evmosvaloper1vw76ju5rwt9us7kz8tg42t6yfmq2jftydu74u6" class="blog-one__btn">Delegate</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 avalanche"><!-- Avalanche -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 October, 2020</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/avalanche.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Avalanche</h3>
                            <p class="blog-one__text">Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality with EVM compatibility.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 10% fee</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="avax_alert">Info</a>                             
                            </div>
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 juno"><!-- Juno -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 October, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/juno.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Juno</h3>
                            <p class="blog-one__text">Juno is an interoperable smart contract network. Highly scalable, robust, secure and easy to deploy - built on the Cosmos SDK.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet, 5% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/juno/staking/junovaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2wsdcwk" target="blank" >Delegate</a>                             
                            </div>
                            
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 chainlink"><!-- Chainlink -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">1 July, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/chainlink.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Chainlink</h3>
                            <p class="blog-one__text">Chainlink is a decentralized network that provides data and information from off-blockchain sources to on-blockchain smart contracts via oracles.</p>
                            </div>
                            <div class="blog__footer"><a class="blog-one__dev">Mainnet</a>
                            <a  target="_blank" class="blog-one__btn" v-on:click="link_alert">Info</a>                             
                            </div>
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                

                
                <div class="col-lg-4 umee"><!-- Umee -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">21. December, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/umee.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Umee</h3>
                            <p class="blog-one__text">Umee connects users to create lending and borrowing positions, move capital across chains, discover new yield opportunities and explore DeFi applications.</p>
                            </div>
                            <div><a class="blog-one__dev">Mainnet, 2% fee</a>
                            <a href="https://wallet.keplr.app/#/umee/stake?modal=stake&validator=umeevaloper19yy0u0ttam2p9k874vsh2u4tt7e6cmq8h2w9nv" target="_blank" class="blog-one__btn">Delegate</a>                     
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 tezos"><!-- Tezos -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 July, 2018</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/tezos.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Tezos</h3>
                            <p class="blog-one__text">Tezos is designed to power the Web3 revolution - a blockchain designed to evolve. Security focused. Upgradeable. Built to last.</p>
                            </div>
                            <div> <a class="blog-one__dev">Mainnet, 10% fee</a>
                            <a  class="blog-one__btn" href="https://tzstats.com/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn" target="blank" >Delegate</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                
                <div class="col-lg-4 stride"><!-- Stride -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">04 September, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/stride.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Stride</h3>
                            <p class="blog-one__text">Stride provides liquidity for staked assets. Using Stride, you can earn both staking and DeFi yields across the IBC ecosystem.</p>
                            </div>
                            <div> <a class="blog-one__dev">Mainnet, 0% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/stride/staking/stridevaloper1x0agh4jnvamn6y5ss94s6ktugwkljp6y2tkj0w" target="blank" >Delegate</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 nolus"><!-- Nolus -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">2023</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/nolus.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Nolus</h3>
                            <p class="blog-one__text">Nolus DeFi Lease provides up to 150% financing on the initial investment, with retained ownership over the leveraged assets.</p>
                            </div>
                            <div> <a class="blog-one__dev">Testnet</a>
                            <a  class="blog-one__btn" href="" target="blank" >N/A</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                <div class="col-lg-4 injective"><!-- injective -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">22 August, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/injective.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Injective</h3>
                            <p class="blog-one__text">Injective is an open interoperable smart contracts layer-one blockchain network optimized for decentralized finance applications.</p>
                            </div>
                            <div> <a class="blog-one__dev">Mainnet, 2% fee</a>
                            <a  class="blog-one__btn" href="https://hub.injective.network/validators/injvaloper1r4lvwh0pmkmjewa76rem7ndr0z8zg3pseyfpux" target="blank" >Delegate</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 persistence"><!-- persistence -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 July, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/persistence.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Persistence</h3>
                            <p class="blog-one__text">Persistence is a Cosmos based Layer-1 powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.</p>
                            </div>
                            <div> <a class="blog-one__dev">Mainnet, 0% fee</a>
                            <a  class="blog-one__btn" href="https://ping.pub/persistence/staking/persistencevaloper12czgp2x5xsq6tc2kv75ljxzl4vvtys53eyg0yj" target="blank" >Delegate</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 namada"><!-- namada -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">15 July, 2022</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/namada.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Namada</h3>
                            <p class="blog-one__text">Namada is Anoma's first fractal instance,a step towards the multi-chain vision of homogeneous architecture for interchain privacy.</p>
                            </div>
                            <div> <a class="blog-one__dev">Testnet</a>
                            <a  class="blog-one__btn" href="" target="blank" >N/A</a>                                                 
                            </div>
                           
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->


                <div class="col-lg-4 sentinel"><!-- Sentinel-->
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

                <div class="col-lg-4 anoma"><!-- Anoma -->
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
                            <div class="blog__footer"><a class="blog-one__dev">Testnet</a>
                            <a target="_blank" class="blog-one__btn">N/A</a>                           
                           
                            </div>
                                     
                        </div><!-- /.blog-one__single-inner-block -->
                    </div><!-- /.blog-one__single -->
                </div><!-- /.col-lg-4 -->

                  
                
 

                <div class="col-lg-4 gravity"><!-- Gravity -->
                    <div class="blog-one__single">
                        <div class="blog-one__single-inner-block">
                            <div class="blog-one__date">17. December, 2021</div><!-- /.blog-one__date -->
                            <div class="blog-one__image">
                            <img src="/images/gravity.png" alt="">
                            </div>
                            <div>
                            <h3 class="blog-one__title">Gravity Bridge</h3>
                            <p class="blog-one__text">Gravity will be able to bring ERC20 assets from Ethereum into Cosmos, as well as Cosmos assets to Ethereum ERC20 representations.</p>
                            <br>
                            </div>
                            <div><a class="blog-one__dev">Mainnet, 5% Fee</a>
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
        },
            obol_alert: function test(){
                this.$alert("We are actively running a DVT cluster of 4 with treshold 3. If you are interested to create a DVT cluster with us on mainnet please reach out to us.");
        }
        
    }
}

</script>

<style scoped> </style>