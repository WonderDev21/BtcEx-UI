// import AppConstants from '../constants/AppConstants';

const initialState = {
  app: {
    fees: { buyerFee: 0.25, sellerFee: 0.25 },
    feeStructure: {},
    isOnline: true,
    showAnnouncement: true,
    announcement: null,
    // currentMarket: AppConstants.cryptoCurrencies[0],
  },
  requests: [],
  auth: {
    isSignupRequest: false,
    isSignupSuccess: false,
    isSignupFailed: false,
    isLoginRequest: false,
    isLoginSuccess: false,
    isLoginFailed: false,
    isLoggedIn: false,
    errorMsg: null,
    isUserInfoLoading: true,
    loginData: {}
  },
  account: {
    accountDetails: [],
    statement: [],
  },
  // orders: {
  //   buyOrders: [],
  //   sellOrders: [],
  //   myOrders: [],
  //   myPendingOrders: [],
  // },
  // trades: {
  //   allTrades: [],
  //   userTrades: [],
  // },
  // ieoProjects: [],
  // errors: {},
  transactions: {
    deposits: [],
    withdrawals: []
  },
  // user: {
  //   addressProof: {},
  //   idProof: {
  //     dob: ''
  //   },
  //   bankDetails: {},
  //   otherDetails: {},
  //   identity: null,
  //   address: null,
  //   signature: null,
  //   photo: null,
  //   declaration: false,
  //   terms: false,
  // },
  ticker: {
    baseCurrency: 'USDT',
    conversionRate: {},
    rates: {}, // rate of crypto currency
    currencyRates: {}, // converted rate in currency
    priceHistory: [],
    exchangePrice: {},
  },
  cryptoSummary: {},
  walletAddress: {
    isLoading: false,
    errorMsg: null
  },
  // update password
  updatePassword: {
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: null
  },
  // Helpful states for feature
  changePassword: {
    loader: false,
    error: null
  },
  TFACode: {
    isRequesting: false,
    imageUrl: null,
    isSuccess: false,
    isError: false,
    errorMsg: null,
    securityCodes: null
  },
  // Deposit Request state
  depositRequest: {
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMsg: null,
  },
  // WITHDRAW AMOUNT AND OTP STATE
  withdraw: {
    isSubmitting: false,
    apiErrorMsg: null,
    isSuccess: false
  }
};
export default initialState;
