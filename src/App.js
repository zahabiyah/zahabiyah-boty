import About from "./About";
import Navbar from "./Navbar";
import Podcast from "./Podcast";
import Film from "./Film";
import Home from "./Home";
import YoutubeEmbed from "./YoutubeEmbed";


function App() {
  return (
    <main>
      <Home/>
      <Navbar/>
      <About/>
      <Podcast/>
      <Film/>
      <YoutubeEmbed embedId="MDm2-K1097s" />


    </main>
  );
}

export default App;
