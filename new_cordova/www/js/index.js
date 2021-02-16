// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  alert("yes");
  //Remove this method to stop OneSignal Debugging 
  window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
  
  var notificationOpenedCallback = function(jsonData) {
   alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };


  var notificationOpenedCallback = function(jsonData) {
   alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };
  
  window.plugins.OneSignal.init("8ec2c368-d57d-4f2f-be1f-4686aa16c3e0",
                                 {googleProjectNumber: "1031016695868"},
                                  notificationOpenedCallback);



  
}, false);