import React from 'react';
import './Chats.css';
import Chat from '../Chat/Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name='Sarah'
                message='Hey how are you 😃'
                timestamp='35 minutes ago'
                profilePic='https://bookingagentinfo.com/wp-content/uploads/2020/06/Sarah-Graysun-Contact-Information.jpg'
            />
            <Chat
                name='Ellen'
                message="What's up?♥️"
                timestamp='55 minutes ago'
                profilePic='https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg'
            />
            <Chat
                name='Sandra'
                message='Ola!'
                timestamp='3 days ago'
                profilePic='https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/GettyImages-1197827373-1-1068x603.jpg'
            />
            <Chat
                name='Natasha'
                message='Oops there is he is... 🐕'
                timestamp='35 minutes ago'
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3C-GJtjdLUtli0VVJIYviakO8mHQ6WTdHDg&usqp=CAU'
            />
        </div>
    )
}

export default Chats;
