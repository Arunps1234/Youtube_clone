import React, {useState} from 'react'
import "./Recomended.css"
import thumbnail1 from "../../assets/assets/thumbnail1.png"
import thumbnail2 from "../../assets/assets/thumbnail2.png"
import thumbnail3 from "../../assets/assets/thumbnail3.png"
import thumbnail4 from "../../assets/assets/thumbnail4.png"
import thumbnail5 from "../../assets/assets/thumbnail5.png"
import thumbnail6 from "../../assets/assets/thumbnail6.png"
import thumbnail7 from "../../assets/assets/thumbnail7.png"
import thumbnail8 from "../../assets/assets/thumbnail8.png"
import axios from 'axios'




const Recomended = ({categoryId}) => {

    const [apiData, setApiData] = useState([])
    const API_KEY = "AIzaSyB0dIFk2K31X-dog_oyhMzG1n18mR_3TYg"


      function fetchData (){
 axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&videoCategoryId=${categoryId}&key=${API_KEY}`).then(res=>{
    console.log(res)
 }).catch(err=>{
    console.log(err)
 })
  
}

fetchData()

  return (
    <div className='recomended'>
<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>

<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>

<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>


<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>


<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>



<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>



<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>



<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>


<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>


<div className='side-video-list'>
    <img src={thumbnail1} />
    <div className='vid-info'>
        <h4>Best channell help to learn </h4>
        <p>Great Stack</p>
        <p>199k</p>
    </div>
    
</div>


    </div>
  )
}

export default Recomended