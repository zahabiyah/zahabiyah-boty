import './projects.css'; 
import logo from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/logo.jpg'
import spotify from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/spotify.png'
import playbar from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/playButton.png'
import heart from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/heart2.webp'

import { Spotify } from 'react-spotify-embed';


export default function Podcast() {
    return(

        <div  id='podcastContainer'>
            <div id = 'podcastTop'>
                <a href='https://linktr.ee/techinnorrupt'> 
                    <img src ={spotify} alt = 'Spotify' />
                    <span>Tech INNOrrupt</span>
                </a>
                
            </div>


            <div id='podcastBottom'>
                <div id='currentPlay'>
                    <div id='left'>
                        <img id ='techLogo' src ={logo} alt = 'logo' />
                        <img id ='playBar' src ={playbar} alt = 'playbar' />
                    </div>
                        
                    <div id='techIntro'>
                        <span>Now Playing</span>
                        <p>Hello! We are Zahabiyah and Annabelle, two high school students currently studying in Hong Kong.</p>
                        <p>We founded this podcast with the hopes of filling the knowledge gap of GenZ students on our ever-evolving society's technological innovations. Having interests in the finance and engineering industries respectively, we aim to use this unique platform to amplify a myriad of topics in an accessible manner. We hope that we are able to reach students from all walks of life and enrich their educational aspirations along with relevant developments around us. </p>
                    </div>

                </div>
                <div id='favorites'>

                    <div className="scrollable-div">
                        <div stlye={{ width: "1000px" }}>
                        <div id='LikedSongs'>
                            <img id ='heart' src ={heart} alt = 'heart' />
                            <span>My Favorite Episodes</span>
                        </div>    
                        
                            <Spotify link="https://open.spotify.com/episode/7HHmHgJGAWGgcliuZNx2w3?si=96ab09df64f24068" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
                            <Spotify link="https://open.spotify.com/episode/0y07BJDyjSRCUjISq4zrTd?si=d1ac394cd2564958" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
                            <Spotify link="https://open.spotify.com/episode/08grW5AcOPZSLrj9YD3B3q?si=7bd5315ece6d40eb" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
                            <Spotify link="https://open.spotify.com/episode/5ejY7ppmp3Wpa7I9RqFqPl?si=495b1cc3403f4614" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
                            <Spotify link="https://open.spotify.com/episode/3Q5QTfYJPZY7AhNS3ApCm6?si=97beb3e291034353" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>

                        </div>
                    </div>
                </div>
                
            </div> 
        </div>
        

    );
}