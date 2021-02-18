var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        /*
		FCMPlugin.onTokenRefresh(function(token){
            alert( token );
			var div = document.getElementById('divToken');
            div.innerHTML += token;
        });
        FCMPlugin.onNotification(
            function(data){
              if(data.wasTapped){
                //Notification was received on device tray and tapped by the user.
                alert( JSON.stringify(data) );
              }else{
                //Notification was received in foreground. Maybe the user needs to be notified.
                alert( JSON.stringify(data) );
              }
            },
            function(msg){
              console.log('onNotification callback successfully registered: ' + msg);
            },
            function(err){
              console.log('Error registering onNotification callback: ' + err);
            }
          );
*/

  //Remove this method to stop OneSignal Debugging 
  window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
  // Set your iOS Settings
  var iosSettings = {};
  iosSettings["kOSSettingsKeyAutoPrompt"] = false;
  iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
  
  window.plugins.OneSignal
    .startInit("8ec2c368-d57d-4f2f-be1f-4686aa16c3e0")
    .handleNotificationOpened(notificationOpenedCallback)
    .iOSSettings(iosSettings)
    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
    .endInit();
  
  // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
  window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    console.log("User accepted notifications: " + accepted);
  });
  //END ONESIGNAL CODE
        console.log('Received Event: ' + id);
    }
};
app.initialize();