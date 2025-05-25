import './About.css'; // Tell webpack that Button.js uses these styles
import aboutMeImage from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/nyc.jpg';
//import acai from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/acai.webp';
//<img src={acai} alt="ACAI" id='acai'/>
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const FadeUp = batch(FadeIn(), Move(), Sticky());


export default function About() {
    return(
    <section id="about">
        <div id='splitImage'>
            <p class="heading1">
               Hello! My name is Zahabiyah and I am currently a rising Junior at the University Of Wisconsin Madison studying Computer Science. I am interested in technology and seeking ways we can use it to transform various social issues. 
            </p>
            <div class='layer'>
                <img src={aboutMeImage} alt="Single Pic"  id = 'intro'/>
            </div>
        </div>
    
    </section>
    );
}
