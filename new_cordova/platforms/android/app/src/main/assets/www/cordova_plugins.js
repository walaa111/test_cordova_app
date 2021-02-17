cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-connectivity-monitor.connectivity",
    "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
    "pluginId": "cordova-connectivity-monitor",
    "clobbers": [
      "window.connectivity"
    ]
  },
  {
    "id": "cordova-admob.AdMobAds",
    "file": "plugins/cordova-admob/www/admob.js",
    "pluginId": "cordova-admob",
    "clobbers": [
      "window.admob",
      "window.tappx"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  },
  {
    "id": "cordova-plugin-firebase-lib.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase-lib/www/firebase.js",
    "pluginId": "cordova-plugin-firebase-lib",
    "clobbers": [
      "FirebasePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-connectivity-monitor": "1.2.2",
  "cordova-play-services-version-adapter": "1.0.2",
  "cordova-admob": "5.1.0",
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-inappbrowser": "1.7.2",
  "onesignal-cordova-plugin": "2.3.3",
  "cordova-plugin-firebase-lib": "3.3.0",
  "cordova-plugin-androidx": "3.0.0",
  "cordova-android-play-services-gradle-release": "4.0.0"
};
// BOTTOM OF METADATA
});