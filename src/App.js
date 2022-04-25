import { Routes, Route } from "react-router-dom"
import { Map } from './pages/map'
import { Remote } from './pages/remote'
import { BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/remote" element={<Remote />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App }
