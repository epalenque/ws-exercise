import { Socket } from 'phoenix'

const DEFAULT_EVENT_NAME = 'message'

const WebSocket = new Socket('ws://replenishment.vlc1.sta.monline/websockets/')

export const configSocket = (channel, onMessage) => {
  const newChannel = WebSocket.channel(channel)
  newChannel.join()
  newChannel.on(DEFAULT_EVENT_NAME, onMessage)
}

export { WebSocket }
