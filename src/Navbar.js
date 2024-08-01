import './Navbar.css';
import GitHubIcon from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/github.png';
import LinkedinIcon from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/linkedinwhite.png';
import ResumeIcon from '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/resumewhite.png';
import React, {useEffect} from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav id="navbar" className={navbarClasses.join(' ')}>
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src={ResumeIcon} alt="ResumeIcon" />
        </a>
        <a href="https://www.linkedin.com/in/zahabiyah-boty-803527235/" className="logo">
          <img src={LinkedinIcon} alt="LinkedinIcon" />
        </a>
        <a href="/" className="logo">
          <img src={GitHubIcon} alt="GithubIcon" className="git"/>
        </a>
      </div>

      <div className="navbar-right">
        <a href="/Home" className="navBarText">
          Home
        </a>
        <a href="/About" className="navBarText">
          About Me
        </a>
        <a href="/Podcast.js" className="navBarText">
          Experiences
        </a>
        <a href="/Projects" className="navBarText">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
