const socket = io('http://localhost:3000');
        let currentChannel = '';

        document.getElementById('join').addEventListener('click', () => {
            const channel = document.getElementById('channel').value;
            if (channel && channel !== currentChannel) {
                if (currentChannel) {
                    socket.emit('leaveChannel', currentChannel);
                }
                console.log('Joined');
                currentChannel = channel;
                socket.emit('joinChannel', channel);
                document.getElementById('messages').innerHTML = '';
            }
        });

        document.getElementById('message-form').addEventListener('submit', (e) => {
           e.preventDefault();
            const message = document.getElementById('message-input').value;
            if (message && currentChannel) {
                socket.emit('message', { channel: currentChannel, message });
                document.getElementById('message-input').value = '';
            }
        });

        socket.on('message', (message) => {
            console.log(message);
            const messagesDiv = document.getElementById('messages');
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });