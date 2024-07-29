import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { styles } from "./Styles";

const Chat = () => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5150/chatHub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                    setIsConnected(true);

                    connection.on('ReceiveMessage', (user, message) => {
                        setMessages(messages => [...messages, { user, message }]);
                    });
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                    setIsConnected(false);
                });
        }
    }, [connection]);

    const sendMessage = async () => {
        if (isConnected) {
            try {
                await connection.send('SendMessage', user, message);
                setMessage('');
            } catch (e) {
                console.log(e);
            }
        } else {
            alert('No connection to server yet.');
        }
    };

    return (
        <div>
            <div>
                {messages.map((m, index) => (
                    <div key={index}><strong>{m.user}</strong>: {m.message}</div>
                ))}
            </div>
            <div style={styles.chatInput}>
                <div>
                    <input
                        type="text"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        placeholder="Usuario"
                    />
                    <input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Mensaje"
                    />
                </div>
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default Chat;
