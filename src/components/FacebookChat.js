import React, { useEffect } from 'react';

const FacebookChat = () => {
    useEffect(() => {
        // Load the Facebook SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    return (
        <div>
            {/* Facebook Messenger Chat Plugin */}
            <div
                className="fb-customerchat"
                attribution="setup_tool"
                page_id="133005229895779"
            ></div>
        </div>
    );
};

export default FacebookChat;
