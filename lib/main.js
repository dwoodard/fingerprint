// use https://clientjs.org/#overview 
// var client = new ClientJS()
let info = {
  timeOpened: new Date(),
  timezone: new Date().getTimezoneOffset() / 60,

  pageon() {
    return window.location.pathname;
  },

  referrer() {
    return document.referrer;
  },

  previousSites() {
    return history.length;
  },

  browserName() {
    return navigator.appName;
  },

  browserEngine() {
    return navigator.product;
  },

  browserVersion1a() {
    return navigator.appVersion;
  },

  browserVersion1b() {
    return navigator.userAgent;
  },

  browserLanguage() {
    return navigator.language;
  },

  browserOnline() {
    return navigator.onLine;
  },

  browserPlatform() {
    return navigator.platform;
  },

  javaEnabled() {
    return navigator.javaEnabled();
  },

  dataCookiesEnabled() {
    return navigator.cookieEnabled;
  },

  dataCookies1() {
    return document.cookie;
  },

  dataCookies2() {
    return decodeURIComponent(document.cookie.split(''));
  },

  dataStorage() {
    return localStorage;
  },

  sizeScreenW() {
    return screen.width;
  },

  sizeScreenH() {
    return screen.height;
  },

  sizeDocW() {
    return document.width;
  },

  sizeDocH() {
    return document.height;
  },

  sizeInW() {
    return innerWidth;
  },

  sizeInH() {
    return innerHeight;
  },

  sizeAvailW() {
    return screen.availWidth;
  },

  sizeAvailH() {
    return screen.availHeight;
  },

  scrColorDepth() {
    return screen.colorDepth;
  },

  scrPixelDepth() {
    return screen.pixelDepth;
  }

};
let fingerprint = {};

let getFingerprint = function () {
  Object.values(info).map(value => {
    if (typeof value === 'function') {
      fingerprint[value.name] = value.call();
    }
  }); // console.log(fingerprint)

  return fingerprint;
};