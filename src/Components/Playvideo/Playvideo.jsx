import React, { useEffect, useState } from 'react'
import "./Playvideo.css"
import video1 from "../../assets/assets/video.mp4"
import like from "../../assets/assets/like.png"
import dislike from "../../assets/assets/dislike.png"
import share from "../../assets/assets/share.png"
import save from "../../assets/assets/save.png"
import jack from "../../assets/assets/jack.png"
import user_profile from "../../assets/assets/user_profile.jpg"
import axios from "axios"
import moment from 'moment'


const Playvideo = ({ videoId, categoryId }) => {




    const API_KEY = "AIzaSyAdwtOctgrOisXXcBkDTdTNGCezy75kZo0"

    const [data, setData] = useState(null)
    const [desciption, setDescription] = useState(250)




    const VideoDetaiilsurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY} `


    const newURl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    const getVideoDetails = async () => {
        const getData = await axios.get(newURl);
        console.log(getData)
        setData(getData.data.items[0])
    }

    useEffect(() => {
        getVideoDetails();

    }, [])
    console.log(data)

    const converviewData = (viewcount) => {
        if (viewcount >= 1000000) {
            const mValue = viewcount / 1000000
            return `${Math.floor(mValue)}M`
        }

        else if (viewcount >= 1000) {

            const kValue = viewcount / 1000;
            return `${Math.floor(kValue)}K`
        }

        else {
            return viewcount
        }
    }

    console.log(converviewData(1000))


    function videoescription(data) {
        console.log(data)
        reurn
    }

    // ChannelDescUrl =

    const [channeldata, setChannelData] = useState(null)

    const fetChOtherData = async () => {
        var URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${data.snippet.channelId}&key=${API_KEY}`

        const fetchDatas = await axios.get(URL);
        console.log(fetchDatas)
        setChannelData(fetchDatas.data.items[0])
        console.log(channeldata)



    }

    useEffect(() => {
        fetChOtherData()

    }, [data])
    console.log(channeldata)

    // fetch_comments data

    const [commentdata, setCommentData] = useState([])

    function fetchCommentsdata() {
        axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&videoId=${videoId}&key=${API_KEY}`).then(res => {
            setChannelData(res.data.items)

        }).catch(err => {
            console.log(err)
        })
    }

    fetchCommentsdata()

    console.log(`Commnetdata : ${commentdata}`)



    return (
        <div className='play-video'>
            {/*  <video src={video1} controls autoPlay muted /> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{data ? data.snippet.title : "Title"}</h3>

            <div className='play-video-info'>
                <p>{data ? converviewData(data.statistics.viewCount) : ""}  Views &bull; {data ? moment(data.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span>  <img src={like} /> {data ? converviewData(data.statistics.likeCount) : ""} </span>
                    <span>  <img src={dislike} /> </span>
                    <span>  <img src={share} /> Share </span>
                    <span>  <img src={save} /> Save </span>

                </div>
            </div>

            <hr />

            <div className='publisher'>
                <img alt="Channel image" />
                <div>
                    <p>{data ? data.snippet.channelTitle : ""}</p>
                    <span>Subscriber</span>
                </div>

                <button>Subscribe</button>
            </div>

            <div className='video-descroption'>
                <p>{data ? data.snippet.description.slice(0, desciption) : ""} <button onClick={() => setDescription(data.snippet.description.length)}>See More...</button></p>
                <hr />


                <h4>{data ? converviewData(data.statistics.commentCount) : ""} Comments</h4>

              
                <div className='comment' >




                <div>
                    <img src={user_profile} alt="User_Profile" className='user_image' />
                </div>

                <div>
                    <div>
                        <h3>Aruna P S <span> 1 day ago</span></h3>
                    </div>

                    <div>
                        <p> A global computer network providing a variety of information</p>

                    </div>

                    <div className='comment-action'>

                        <img src={like} alt="like" /> <span>244</span>
                        <img src={dislike} alt="dislike" /> <span>244</span>

                    </div>

                </div>
            </div>













            </div>
        </div>

    )
}

export default Playvideo