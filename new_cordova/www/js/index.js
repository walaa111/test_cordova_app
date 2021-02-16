// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  alert("yes");
  alert(notificationOpenedCallback);
  alert(JSON.stringify(jsonData));
  //Remove this method to stop OneSignal Debugging 
 // window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

  var notificationOpenedCallback = function(jsonData) {
    alert('first');
   alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
   alert('sec');
  };

  window.plugins.OneSignal
    .startInit("8ec2c368-d57d-4f2f-be1f-4686aa16c3e0")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  

  
}, false);