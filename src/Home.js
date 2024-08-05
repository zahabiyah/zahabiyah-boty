
import hk from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/hk.jpeg'
import './Home.css'; // Tell webpack that Button.js uses these styles



export default function Home() {
    return (
    <div>
        <div
        style={{
            backgroundImage: `url(${hk})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            display: 'flex',   
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '120%',
            overflowX: 'hidden',
            filter: 'brightness(80%)',
        }}
        >
            <div id='titleText'><span id = 'title'>Hello! I'm</span>&nbsp;&nbsp;&nbsp;<span id="name">Zahabiyah</span></div>
        </div>
    </div>
    );
}