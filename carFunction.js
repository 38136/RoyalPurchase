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

                    "attachment": {
                        "type": "media",
                        "media": {
                            "id": media_id
                        }
                    }
                }
            }
        }
    }
}
exports.CategoryParams = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                },
                "message_data": {
                    "text": "You have Selected " + text + " Category\n\nWhat dress type do you prefer???",
                    "quick_reply": {
                        "type": "options",
                        "options": [{
                                "label": "Tshirts",
                                "description": "Classic Soft Cotton T-shirts",
                                "metadata": "Tshirts"
                            },
                            {
                                "label": "Shirts",
                                "description": "Mens Collections Formals, Office Shirts",
                                "metadata": "Shirts"
                            },
                            {
                                "label": "Jeans",
                                "description": "Jeans for Mens and Womens",
                                "metadata": "Jeans"
                            },
                            {
                                "label": "Trousers",
                                "description": "Trousers for Mens",
                                "metadata": "Trousers"
                            },
                            {
                                "label": "Shorts",
                                "description": "Shorts for Mens",
                                "metadata": "Shorts"
                            }
                        ]

                    }
                }
            }
        }
    }
}