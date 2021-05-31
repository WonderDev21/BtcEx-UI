export const formatCurrencyAddress = (address, currency = '') => {
  if (currency === "ETH") {
    return `0x${address}`;
  } else if (currency === "BXC") {
    return `0x${address}`;
  } else if (currency === "USDT") {
    return `0x${address}`;
  }
  return address;
};

export const getCurrencyPlaceHolder = (currency) => {
  if (currency === "ETH") {
    return '0x71c7656ec7ab88b098defb751b7401b5f6d8976f';
  }
  if (currency === "BXC") {
    return '0xa1c7656ec7ab88b098defb751b7401b5f6d8976f';
  }
  if (currency === "USDT") {
    return '0xa1c7656ec7ab88b098defb751b7401b5f6d8976f';
  }
  if (currency === "BTC") {
    return '1SoMGuYknDgyYypJPVVKE2teHBN4HDAh3';
  }
  if (currency === "XRP") {
    return 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
  }
  if (currency === "LTC") {
    return 'LYmpJZm1WrP5FSnxwkV2TTo5SkAF4Eha31';
  }
  if (currency === "MIOTA") {
    return 'HKEBXFH9ERSSCKYERW9LGEHHSSNVNEVZJIFHE9DHMBENPPRUDDYMZPINSJLZWINKGILZUBHQHAAELEBUD';
  }
  return 'WALLET ADDRESS';
};
