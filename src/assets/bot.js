window.botpressWebChat.init({
    // Replace <your-bot-id> and <your-client-id> with your actual bot and client IDs
    "botId": "5db9ba05-8697-406b-97fd-f1b284ebe9dd",
    "clientId": "5db9ba05-8697-406b-97fd-f1b284ebe9dd",

    // Set the URL for the Botpress WebChat JavaScript file and the messaging server
    "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
    "messagingUrl": "https://messaging.botpress.cloud",

    // Set the name of the bot that will be displayed in the WebChat interface
    "botName": "Test",

    // Set the width of the WebChat container and layout to 100% (Full Screen)
    "containerWidth": "100%25",
    "layoutWidth": "100%25",

    // Hide the widget and disable animations
    "hideWidget": true,
    "disableAnimations": true,
});

// Opens up the Chatbot by default
// This lets users start chatting with the Chatbot without needing to click any buttons or menus.
window.botpressWebChat.onEvent(
    function () {
        window.botpressWebChat.sendEvent({ type: "show" });
    },
    ["LIFECYCLE.LOADED"]
);