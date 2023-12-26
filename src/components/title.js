import React from 'react';


function Title() {

    const boldText = {
        fontWeight: "700", // You can adjust this value to make it as bold as you want
      };
    
      const goldenBorder = {
        border: "5px solid gold", // You can adjust the width and color as needed
      };
    


  return (
<div className="container-fluid text-center text-primary-emphasis bg-danger" style={goldenBorder}>
  <h1 className="display-1" style={boldText}>Kick Boxing & Muay-Thai</h1>

</div>

  
    )}

export default Title;