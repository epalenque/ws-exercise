import { useState, useEffect } from 'react'
import { configSocket } from '../../services/web-sockets/WebSockets'

import './Map.css'
import car from './assets/car.png'

const Map = () => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    configSocket('delivery:pedro-alonso-racing-updated', (message) =>
      onSocketMessage(message),
    )
  }, [])

  const onSocketMessage = () => {
    setStart(true)
  }

  return (
    <div className="map">
      {start &&
        <img className="car" alt="pedro alonso" src={car}/>
      }
    </div>
  )
}

export { Map }