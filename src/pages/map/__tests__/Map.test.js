import { wrap } from 'wrapito'
import { screen, act } from '@testing-library/react'
import { App } from '../../../App'
import { emitSocketEvent } from '../../../setupTests'

test('should appear the car when receive a ws message', async () => {
  wrap(App)
      .atPath('/')
      .mount()

  act(() => emitSocketEvent('message', 'delivery:pedro-alonso-racing-updated', {}))

  await screen.findByAltText('pedro alonso')

  expect(screen.getByAltText('pedro alonso')).toBeInTheDocument()
})

test('should not appear the car when mount the page', () => {
  wrap(App)
      .atPath('/')
      .mount()

  expect(screen.queryByAltText('pedro alonso')).not.toBeInTheDocument()
})