export const startEngine = () => {
  return fetch('http://websockets.vlc1.sta.monline/sockets/send-message', {
    method: 'POST',
    body: JSON.stringify({
      "topic": "delivery",
      "subtopic": "pedro-alonso-racing-updated",
      "payload": {}
    }),
    mode: 'no-cors',
    headers:{
      'Content-Type': 'application/json'
    }
  })
}