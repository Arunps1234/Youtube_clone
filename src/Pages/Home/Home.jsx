import React, {useState} from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({collapsesidebar}) => {
  const [category, setCategory] = useState(0)

  console.log(category)
  return (
<>
<Sidebar collapsesidebar={collapsesidebar} category={category} setCategory={setCategory}/>

<div className={`container ${collapsesidebar ? "large-container" : ""}`}>
<Feed category={category}/>
</div>

</>  )
}

export default Home