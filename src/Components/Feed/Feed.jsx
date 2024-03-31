import React, {useState, useEffect} from 'react'
import "./Feed.css"
import thubnail1 from "../../assets/assets/thumbnail1.png"
import thubnail2 from "../../assets/assets/thumbnail2.png"
import thubnail3 from "../../assets/assets/thumbnail3.png"
import thubnail4 from "../../assets/assets/thumbnail4.png"
import thubnail5 from "../../assets/assets/thumbnail5.png"
import thubnail6 from "../../assets/assets/thumbnail6.png"
import thubnail7 from "../../assets/assets/thumbnail7.png"
import thubnail8 from "../../assets/assets/thumbnail8.png"
import { Link } from 'react-router-dom'
import axios from "axios"
import moment from 'moment'

const Feed = ({ category }) => {

  const [data, setData] = useState([])
  const API_KEY = "AIzaSyAUGK0fIwx7jAVbrnNulP5lAeSdbt_XsQM"

  const fetchData = async () => {
    const API_Link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    
      axios.get(API_Link).then(res=>{
        setData(res.data.items)
        console.log(data)
      }).catch(err=>{
        console.log(err)
      })
    

    

   

  }


useEffect(() => {
  fetchData();
},[category])


const valueConverter = (value) =>{

if (value>=1000000) {
  return Math.floor(value/1000000) + "M"
}
else if (value>=1000){
  return Math.floor(value/1000) + "K"
}

else {
  return value
}
}

  return (


    <div className="feed">

      {data.map((value,i)=>(
      <Link to={`/video/${value.snippet.categoryId }/${value.id}`} className='card' key={i}>
      <img src={value.snippet.thumbnails.high.url} alt="thubnail1" />
      <h2>{value.snippet.title}</h2>
      <h3>{value.snippet.channelTitle}</h3>
      <p>{valueConverter(value.statistics.viewCount)} views &bull; {moment(value.snippet.publishedAt).fromNow()}</p>
    </Link>
      ))

}





    </div>
  )
}

export default Feed