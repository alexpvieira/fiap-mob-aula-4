var app = {
    initialize: function() {
        document.addEventListener('deviceready', () => {
            window.plugins.OneSignal.setRequiresUserPrivacyConsent(true);

            window.plugins.OneSignal
                .startInit("8f8dff53-7aa9-4845-8cd4-447e264df600")
                .handleNotificationOpened((jsonData) => {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                })
                .endInit();

            window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
                console.log("User accepted notifications: " + accepted);
            });
        }, false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();