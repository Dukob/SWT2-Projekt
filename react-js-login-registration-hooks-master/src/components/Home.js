import '../HomePage.css';
import React from "react";
import SearchBar from './SearchBar';


const Home = () => {
  return (
    <div className="video-kard">
      <video className="background-video" autoPlay loop muted>
      <source src="https://player.vimeo.com/external/454998907.sd.mp4?s=e04eec1ca12cb3c689c9729b5ece27bb9d56177d&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
      </video>

      <div className="contenu">
        <h3>Lass uns zusammen fahren</h3>
      </div>
      <SearchBar/>
    </div>
  );
};

export default Home;
