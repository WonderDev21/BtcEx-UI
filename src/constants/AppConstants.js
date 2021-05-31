export default {
  APP_URL: 'https://btcex.pro',
  APP_NAME: 'BtcEX',
  RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  REACT_APP_RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
  FIAT_CURRENCIES: { USD: "USD", INR: "INR" },
  EXPLORE_MAP: {
    BTC: 'https://www.blockchain.com/btc/tx/',
    USDT: 'https://etherscan.io/tx/',
    XRP: 'https://xrpcharts.ripple.com/#/transactions/',
    ETH: 'https://etherscan.io/tx/',
    LTC: 'https://live.blockcypher.com/ltc/tx/',
    BXC: 'https://etherscan.io/tx/',
  }
}
