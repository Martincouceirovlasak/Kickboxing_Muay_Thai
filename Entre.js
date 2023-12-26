import React from 'react';
import Footer from "./Footer";
import whatsappLogo from './WA.png';



const WhatsAppContact = () => {
    const phoneNumber = '0041786190054'; // Replace with the desired phone number
  
    const openWhatsAppChat = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
    };


      const buttonStyle = {
        backgroundSize: 'cover',

        height: '50px',
        border: 'none',
        color: '#fff',
        padding: '10px'
        // Add any additional styling as needed
      };
    

return <div className="container mt-5">
<h1>Martin Couceiro Vlasak
  
  </h1>


  <p className="lead"> Bonjour!  

Je m'appelle Martin Couceiro et je vous propose de venir essayer un cours de boxe thaïlandaise. Je suis un entraîneur certifié en Thaïlande avec plus de 12 ans d'expérience et j'ai remporté le championnat espagnol de kick boxing et plusieurs championnats régionaux.  Je vous invite à profiter des nombreux avantages de ce sport :
Augmente la force
Aide à perdre du poids et à tonifier le corps 
Améliore la santé cardiovasculaire
Améliore la coordination et l'agilité
Améliore notre capacité de sacrifice et de discipline
Aide à évacuer le stress
Contribue à accroître la confiance en soi

A bientôt </p>
  <button className="btn btn-primary" onClick={openWhatsAppChat}>
  <img src={whatsappLogo} alt="WhatsApp Logo" style={buttonStyle} />
         WhatsApp Contact</button>
<Footer className = "footer fixed-bottom"/>
<ul/>
</div>

}

export default WhatsAppContact;