/*

 * Licensed to the Apache Software Foundation (ASF) under one

 * or more contributor license agreements.  See the NOTICE file

 * distributed with this work for additional information

 * regarding copyright ownership.  The ASF licenses this file

 * to you under the Apache License, Version 2.0 (the

 * "License"); you may not use this file except in compliance

 * with the License.  You may obtain a copy of the License at

 *

 * http://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing,

 * software distributed under the License is distributed on an

 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY

 * KIND, either express or implied.  See the License for the

 * specific language governing permissions and limitations

 * under the License.

 */

var app = {

    // Application Constructor

    initialize: function () {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);





    },



    // deviceready Event Handler

    //

    // Bind any cordova events here. Common events are:

    // 'pause', 'resume', etc.

    onDeviceReady: function () {

        this.receivedEvent('deviceready');

 var inAppBrowserbRef = cordova.InAppBrowser.open('https://matthew.realdeal.com.eg/almorshedymall/elmorshdyoffers/', '_self', 'location=no,toolbar=no,zoom=no,clearcache=yes,hidespinner=no,beforeload=yes');

/*
inAppBrowserbRef.addEventListener('loadstart', function() {
  alert("yes");
});
*/

        //admob
     // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "",  // Required
        interstitialAdId:      "",  // Optional
        autoShowBanner:        false,                                      // Optional
        autoShowRInterstitial: false,                                     // Optional
        autoShowRewarded:      false,                                     // Optional
        tappxIdiOS:            "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:        "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:            0.5                                        // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      //admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      //admob.requestInterstitialAd();
 
      // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
     // admob.requestRewardedAd();
       //admob

       var push = PushNotification.init({
        android: {
            senderID: "1031016695868"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    });

    push.on('registration', function(data) {
        console.log("device token: " + data.registrationId);
    });

    push.on('notification', function(data) {
           console.log(data.message);
           console.log(data.title);
           console.log(data.count);
           console.log(data.sound);
           console.log(data.image);
           console.log(data.additionalData);
    });

    push.on('error', function(e) {
           console.log(e.message)
    });

    },

// Add to index.js or the first page that loads with your app.


    // Update DOM on a Received Event

    receivedEvent: function (id) {

        var parentElement = document.getElementById(id);

        var listeningElement = parentElement.querySelector('.listening');

        var receivedElement = parentElement.querySelector('.received');



        listeningElement.setAttribute('style', 'display:none;');

        receivedElement.setAttribute('style', 'display:block;');



        console.log('Received Event: ' + id);

    //START ONESIGNAL CODE

    }

};


                //admob


           //admob

app.initialize();