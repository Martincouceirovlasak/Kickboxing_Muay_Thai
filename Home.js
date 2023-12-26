
import Title from './title';
import Footer from "./Footer";
import React from 'react';
import background from "./background.jpg";

function Home() {

    return <div>
    <Title/>

    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <img src={background} alt = 'back'/>
    </div>

    <Footer className = "footer fixed-bottom"/>


    </div>;
}

export default Home;