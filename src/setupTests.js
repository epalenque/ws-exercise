import { assertions, configure } from 'wrapito'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

expect.extend(assertions)

const sockets = {
  list: [],
}

configure({
  mount: render,
})

export const emitSocketEvent = (event, channel, ...args) => {
  const socket = sockets.list.find((socket) => socket.topic === channel)
  if (!socket) return
  socket[event](...args)
}

jest.mock('phoenix', () => ({
  Socket: jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
    disconnect: () => (sockets.list = []),
    channel: (channel) => {
      const newChannel = {
        topic: channel,
        join: jest.fn(),
        on: (event, callback) => {
          const currentSocket = sockets.list.find(
            (socket) => socket.topic === channel,
          )
          currentSocket[event] = callback
        },
        leave: () => {
          sockets.list = sockets.list.filter(
            (socket) => socket.topic !== channel,
          )
        },
      }
      sockets.list.push(newChannel)
      return newChannel
    },
    channels: sockets.list,
  })),
}))
