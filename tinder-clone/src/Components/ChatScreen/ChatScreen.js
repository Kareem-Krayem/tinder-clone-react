import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg',
            message: "What's up? ♥️"
        },
        {
            name: 'Ellen',
            image: 'https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg',
            message: "How it's going!"
        },
        {
            message: 'Hi! how are you Ellen?'
        }
    ]);
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 13/09/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )

            ))
            }
            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type='text' />
                <button type='submit' onClick={handleSend} className="chatScreen__button">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen;
