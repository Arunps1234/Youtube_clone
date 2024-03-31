import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {

  const [collapsesidebar, setCollapse] = useState(false)


  return (
    <div>
      <BrowserRouter>
      <Navbar setCollapse={setCollapse} collapsesidebar={collapsesidebar}/>
        <Routes>
          <Route path="/" element={<Home collapsesidebar ={collapsesidebar} />}  />
          <Route path="/video/:categoryId/:videoId" element={<Video/>} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App