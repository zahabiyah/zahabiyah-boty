import './About.css'; // Tell webpack that Button.js uses these styles
import aboutMeImage from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/nyc.jpg';
//import acai from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/acai.webp';
//<img src={acai} alt="ACAI" id='acai'/>

export default function About() {
    return(
    <section id="about">
        <div id='splitImage'>
            <p class="heading1">
            Hello! My name is Zahabiyah and I am currently a rising Sophmore at the University Of Wisconsin Madison studying Computer Science and Mathematics. I am interested in technology and seeking ways we can use to transform various social issues. 
            </p>
            <div class='layer'>
                <img src={aboutMeImage} alt="Single Pic"  id = 'intro'/>
            </div>
        </div>
          
    
    </section>
    );
}
