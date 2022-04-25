import { startEngine } from '../../app/remote/client'

import key from './assets/key.png'
import start from './assets/start.png'

import './Remote.css'

const Remote = () => {

  return (
    <div className="remote">
      <img alt="empezar" src={start} onClick={startEngine}/>
      <div className="keyboard_wrapper">
        <img alt="flecha arriba" src={key} className="up_key" />
        <img alt="flecha izquierda" src={key} className="left_key" />
        <img alt="flecha abajo" src={key} className="down_key" />
        <img alt="flecha derecha" src={key} className="right_key" />
      </div>
    </div>
  )
}

export { Remote }