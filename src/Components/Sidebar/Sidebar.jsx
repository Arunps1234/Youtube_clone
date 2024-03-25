import React, {useState} from 'react'
import "./Sidebar.css"
import home from "../../assets/assets/home.png"
import gameicon from "../../assets/assets/game_icon.png"
import automob from "../../assets/assets/automobiles.png"
import sport from "../../assets/assets/sports.png"
import enter from "../../assets/assets/entertainment.png"
import technology from "../../assets/assets/tech.png"
import musics from "../../assets/assets/music.png"
import blogs from "../../assets/assets/blogs.png"
import news from "../../assets/assets/news.png"
import jack from "../../assets/assets/jack.png"
import simon from "../../assets/assets/simon.png"
import tom from "../../assets/assets/tom.png"
import Megan from "../../assets/assets/megan.png"
import Camera from "../../assets/assets/cameron.png"


const Sidebar = ({collapsesidebar, category , setCategory}) => {
    console.log(collapsesidebar)

    return (
        <div className={`sidebar ${collapsesidebar ? "small-sidebar" : " "}`}>

            {/* Side bar navigation links*/}
            <div className='shortcut-links'>

                <div  onClick={()=>setCategory(0)} className={`side-link ${category==0 ? "active" : ""}`}>
                    <img src={home} alt="Home_icon" />
                    <p >Home</p>
                </div>

                <div className={`side-link ${category==20 ? "active" : ""}`} onClick={()=>setCategory(20)}>
                    <img src={gameicon} alt="Game_icon" />
                    <p >Game</p>
                </div>

                <div className={`side-link ${category==2 ? "active" : ""}`} onClick={()=>setCategory(2)}>
                    <img src={automob} alt="auto_mobiles" />
                    <p >Auto-mobile</p>
                </div>

                <div className={`side-link ${category==17 ? "active" : ""}`} onClick={()=>setCategory(17)}>
                    <img src={sport} alt="sports_icon" />
                    <p >Sports</p>
                </div>

                <div className={`side-link ${category==24 ? "active" : ""}`} onClick={()=>setCategory(24)}>
                    <img src={enter} alt="Entertainments" />
                    <p >Entertainment</p>
                </div>

                <div className={`side-link ${category==28 ? "active" : ""}`} onClick={()=>setCategory(28)}>
                    <img src={technology} alt="technology" />
                    <p >Technology</p>
                </div>

                <div className={`side-link ${category==10 ? "active" : ""}`} onClick={()=>setCategory(10)}>
                    <img src={musics} alt="music" />
                    <p >Music</p>
                </div>

                <div className={`side-link ${category==22 ? "active" : ""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="blogs" />
                    <p >Blogs</p>
                </div>

                <div className={`side-link ${category==25 ? "active" : ""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt="news" />
                    <p >News</p>
                </div>

                <hr />

            </div>

            {/* Subscribed sections*/}

            <div className='subscribed-lists'>

             <h3 >Subscribed</h3>

                <div className='side_link'>
                    <img src={jack} alt="jack" />
                    <p >PewDiePie</p>
                </div>

                <div className='side_link'>
                    <img src={simon} alt="jack" />
                    <p >Simon</p>
                </div>

                <div className='side_link'>
                    <img src={tom} alt="jack" />
                    <p >Tom</p>
                </div>


                <div className='side_link'>
                    <img src={Megan} alt="jack" />
                    <p >Megan</p>
                </div>

                <div className='side_link'>
                    <img src={Camera} alt="jack" />
                    <p >Cameron</p>
                </div>

            </div>


        </div>
    )
}

export default Sidebar