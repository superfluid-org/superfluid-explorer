import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import 'reactflow/dist/style.css'
import Home from './views/Home/Home'

export default function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router basename="/">
          <div className="App">
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
