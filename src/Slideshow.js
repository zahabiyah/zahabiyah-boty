import cwb from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/cwb.jpg'
import hk from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/hk.JPG'
import lake from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/lake.jpg'
import wisco from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/wisco.jpg'
import { Slide } from 'react-slideshow-image';
import './styles.css';
import 'react-slideshow-image/dist/styles.css';


const buttonStyle = {
  width: "30px",
  background: 'none',
  border: '0px',

};

const properties = {
  prevArrow: <button class= "button" style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button class= "button" style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

export default function Slideshow() {
    const images = [
        hk, lake, cwb, wisco];

    return (
        <Slide
  autoplay={false}
  onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: 'cover',
        height: '823.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>
        Zahabiyah Boty
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: `url(${images[1]})`,
        backgroundSize: 'cover',
        height: '823.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>
      Zahabiyah Boty
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: `url(${images[2]})`,
        backgroundSize: 'cover',
        height: '823.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>
      Zahabiyah Boty
      </span>
      </div>
  </div>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: `url(${images[3]})`,
        backgroundSize: 'cover',
        height: '823.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <span>
        Zahabiyah Boty
      </span>
    </div>
    {properties.prevArrow}
    {properties.nextArrow}
  </div>
</Slide>

    );
}