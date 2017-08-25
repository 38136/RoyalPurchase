exports.WelcomeParams = function (sender_id, screen_name, media_id) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                },
                "message_data": {
                    "text": "Hi," + screen_name + "\n\nWelcome to weather forecast !!!\n\n",

                //     "attachment": {
                //         "type": "media",
                //         "media": {
                //             "id": media_id
                //         }
                //     }
                 }
                 
            }
        }
    }
}
