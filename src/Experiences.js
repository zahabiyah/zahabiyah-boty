import ASTRI from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/astri.jpg'
import tti from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/ttilogo.png'
import meeopp from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/meeopp.jpg'
import './Experiences.css'; // Tell webpack that Button.js uses these styles

export default function Experiences() {

    return (
        <div id='experiences'>

        <div class='card'>
            <img class='cardImage' alt='ASTRI' src={ASTRI}></img>
            <div class='cardTitle'>Hardware & Software Engineering Intern</div>
            <div class='cardDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>  

        <div class='card'>
        <img class='cardImage' alt='Techtronic Industries' src={tti}></img>
        <div class='cardTitle'>Software Engineering Intern</div>
        <div class='cardDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div> 

        <div class='card'>
        <img class='cardImage' alt='MeeOpp' src={meeopp}></img>
        <div class='cardTitle'>Product Design Intern</div>
        <div class='cardDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div> 


        </div>
    );
}