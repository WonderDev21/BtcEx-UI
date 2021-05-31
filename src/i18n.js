import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "btcex": "BtcEX",
      "trade with": "Trade with",
      "buy and sell": "Buy and sell cryptocurrency",
      "buy sell info": "Fast and secure way to purchase or exchange major cryptocurrencies",
      "getstarted": "Get Started",
      "browse": "Browse Now",
      "signin": "Sign in",
      "signup": "Signup",
      "get-started-now": {
        "header": "Get started now",
        "step-1": "Create an account",
        "step-2": "Verify your email",
        "step-3": "Start buying & selling"
      },
      "portfolio": {
        "header": "Create your account on BtcEX.",
        "description": "BtcEX has a variety of features that make it the best place to start crypto trading.",
        "media": [
          {
            "header": "Manage your portfolio",
            "description": "Buy and sell popular digital currencies, keep track of them in the one place."
          },
          {
            "header": "Recurring buys",
            "description": "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
          },
          {
            "header": "Vault protection",
            "description": "For added security, store your funds in a vault with time delayed withdrawals."
          },
          {
            "header": "Media apps",
            "description": "Stay on top of the markets with the BtcEX app for Android or iOS."
          }
        ]
      },
      "news-media": "News & Media",
      "blog": "Blog",
      "trusted": {
        "header": "The most trusted cryptocurrency platform",
        "description": "Here are a few reasons why you should choose BtcEX",
        "reasons": [
          {
            "heading": "Secure storage",
            "description": "We store the vast 95% of the digital assets in secure offline storage."
          },
          {
            "heading": "No hidden cost.",
            "description": "BtcEx does not charge you with any hidden costs, most transmost transparent fee structure."
          },
          {
            "heading": "Easy Withdrawals/Deposit",
            "description": "Straightforward and Easy-to-use interface to help you in your transactions - quick money transfer, fast withdrawals, and payments."
          }
        ]
      },
      "get-touch": {
        "heading": "Get in touch. Stay in touch.",
        "contents": [
          {
            "heading": "24 / 7 Support",
            "description": "Got a problem? Just get in touch. Our support team is available 24/7."
          },
          {
            "heading": "BtcEX Blog",
            "description": "Stay updated with regular news and updates from our BtcEX Blog."
          },
          {
            "heading": "Careers",
            "description": "Help build the future of technology. Start your new career at BtcEX."
          },
          {
            "heading": "Community",
            "description": "BtcEX is global. Join the discussion on our Social Platforms and Forums."
          },
        ]
      },
      "bottom": {
        "title": "Most transparent Crypto Exchange.",
        "company": "About us",
        "about": "About",
        "career": "Career",
        "terms": "Terms & Conditions",
        "whitepaper": "Whitepaper",
        "support": "Support",
        "faq": "FAQ",
        "helpdesk": "Helpdesk",
        "ticket": "Support Ticket",
        "information": "Information",
        "assets": "Assets",
        "fees": "Fees",
        "refund-policy": "Refund Policy",
        "symbol-details": "Symbol Details",
        "service": "Service",
        "exchange": "Exchange",
        "ieo": "IEO",
        "token-listing": "Token Listing",
        "staking": "Staking",
        "white-label": "White Label"
      }
    }
  },
  zh: {
    translation: {
      "btcex": "BtcEX",
      "trade with": "交易",
      "buy and sell": "買賣加密貨幣",
      "buy sell info": "快速和安全地交易主要加密貨幣",
      "getstarted": "開始交易",
      "browse": "立即瀏覽",
      "signin": "登入",
      "signup": "註冊",
      "get-started-now": {
        "header": "立即開始交易",
        "step-1": "註冊帳戶",
        "step-2": "開啟電郵認證",
        "step-3": "開始買賣"
      },
      "portfolio": {
        "header": "在BtcEX註冊你的帳戶",
        "description": "BtcEX具有多種功能，成為是你開始交易加密貨幣交易的最佳場所",
        "media": [
          {
            "header": "管理你的投資組合",
            "description": "買賣流行的數字貨幣，將它們集中在一處。"
          },
          {
            "header": "經常購買",
            "description": "計劃每天，每週或每月購買，慢慢地學習投資加密貨幣"
          },
          {
            "header": "金庫保護",
            "description": "為了提高安全性，請將資金存儲在具有延遲取款時間的金庫中。"
          },
          {
            "header": "媒體應用程式",
            "description": "BtcEX適用於Android或iOS的應用程序，保持領先地位。"
          }
        ]
      },
      "news-media": "新聞媒體",
      "blog": "博客",
      "trusted": {
        "header": "最受信任的加密貨幣平台",
        "description": "什麼因素讓你選擇 BtcEX",
        "reasons": [
          {
            "heading": "加密存儲",
            "description": "我們將90%＋的數字資產存儲在安全的離線錢包中。"
          },
          {
            "heading": "無隱藏成本。",
            "description": "BtcEx不會收取任何隱藏費用, 最透明的費用結構。"
          },
          {
            "heading": "輕鬆取款/存款",
            "description": "透過簡單易用的界面可幫助您快速進行交易- 付款，取款和匯款。"
          }
        ]
      },
      "get-touch": {
        "heading": "取得聯繫。 保持聯繫。",
        "contents": [
          {
            "heading": "24/7客戶服務支援",
            "description": "你有問題嗎？ 聯繫我們，我們的客戶服務團隊全天候24/7支援。"
          },
          {
            "heading": "BtcEX博客",
            "description": "查看我們的博客可以了解常見新聞和平台更新。"
          },
          {
            "heading": "招聘",
            "description": "幫助建立金融技術的未來。 加入BtcEX展開你的新事業。"
          },
          {
            "heading": "社區",
            "description": "BtcEX的全球社區。 加入我們的社交平台和論壇上的討論。"
          },
        ]
      },
      "bottom": {
        "title": "最具透明度的加密貨幣交易所。",
        "company": "關於我們",
        "about": "關於",
        "career": "招聘",
        "terms": "條款及細則",
        "whitepaper": "白皮書",
        "support": "客戶服務",
        "faq": "常問問題",
        "helpdesk": "服務台支援",
        "ticket": "支持票",
        "information": "資料",
        "assets": "數字資產",
        "fees": "費用",
        "refund-policy": "退款政策",
        "symbol-details": "符號詳細",
        "service": "服務",
        "exchange": "交易所",
        "ieo": "交易所代幣發行",
        "token-listing": "上市申請",
        "staking": "抵押",
        "white-label": "白色標籤"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;

// DFS, BFS, Binary Search, Basics of Machine learning,