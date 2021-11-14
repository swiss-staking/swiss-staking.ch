
export const request = async (coin) => {
const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids='+coin+'&vs_currencies=usd');
const json = await response.json();
return json[coin]['usd']
}

export const request_staking_balance = async (coin) => {
  var voting_power
  switch (coin){
    case 'tezos':
      const response = await fetch('https://api.baking-bad.org/v1/bakers/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn');
      voting_power = await response.json();
      return voting_power['stakingBalance']

    case 'cosmos':
      voting_power =  430000
      return voting_power

    case 'band-protocol':
      voting_power = 200000
      return voting_power
  
    case 'osmosis':
      voting_power =  100000
      return voting_power

    case 'sentinel':
      voting_power = 100000000
      return voting_power
    
        }
  
  }

  export const request_delegators = async (coin) => {
    var delegators
    switch (coin){
      case 'tezos':
        //const response = await fetch('https://api.tzstats.com/explorer/account/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn');
        //delegators = await response.json();
        //return delegators['total_delegations']
        //ERROR: Access to fetch at 'https://api.tzstats.com/explorer/account/tz1hAYfexyzPGG6RhZZMpDvAHifubsbb6kgn' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
        return 158
      case 'cosmos':
        delegators =  918
        return delegators
  
      case 'band-protocol':
        delegators = 200
        return delegators
    
      case 'osmosis':
        delegators =  345
        return delegators
  
      case 'sentinel':
        delegators = 2
        return delegators

        case 'juno':
          delegators = 320
          return delegators
        
          }
    
    }



  
export async function calculate_staking_metrics() {
  
  var tezos_usd = await request('tezos');
  var cosmos_usd = await request('cosmos');
  var band_usd = await request('band-protocol');
  var osmosis_usd = await request('osmosis');
  var sentinel_usd = await request('sentinel');

  var tezos_voting_power = await request_staking_balance('tezos');
  var cosmos_voting_power = await request_staking_balance('cosmos');
  var band_voting_power = await request_staking_balance('band-protocol');
  var osmosis_voting_power = await request_staking_balance('osmosis');
  var sentinel_voting_power = await request_staking_balance('sentinel');

  var staking_value = (tezos_usd*tezos_voting_power + cosmos_usd*cosmos_voting_power + band_usd * band_voting_power + sentinel_usd * sentinel_voting_power)
  var staking_value = Math.round(staking_value)
  // var staking_value = staking_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  //delegators
  var tezos_delegators = await request_delegators('tezos');
  var cosmos_delegators = await request_delegators('cosmos');
  var band_delegators = await request_delegators('band-protocol');
  var osmosis_delegators = await request_delegators('osmosis');
  var sentinel_delegators = await request_delegators('sentinel');
  var juno_delegators = await request_delegators('sentinel');
  var total_delegators = tezos_delegators+cosmos_delegators+band_delegators+osmosis_delegators+sentinel_delegators+juno_delegators
  var total_delegators = Math.round(total_delegators)
  //total_delegators = total_delegators.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  var return_value = null
  console.log(staking_value)
  return staking_value
}

export function calculate_days() {
var date1 = new Date(1531244930*1000);
var date2 = new Date();
  
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
Difference_In_Days = Math.round(Difference_In_Days)
//Difference_In_Days = Difference_In_Days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


return parseInt(Difference_In_Days)

}

export async function start_trigger(){
  var a = await calculate_staking_metrics()
  return a
}







