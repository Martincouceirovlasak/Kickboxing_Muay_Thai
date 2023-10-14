import React from 'react';


function Title() {

    const boldText = {
        fontWeight: "800", // You can adjust this value to make it as bold as you want
      };
    
      const goldenBorder = {
        border: "5px solid gold", // You can adjust the width and color as needed
      };
    


  return (
<div class="container-fluid text-center text-primary-emphasis bg-primary-subtle" style={goldenBorder}>
  <h1 class="display-1" style={boldText}>News</h1>

</div>

  
    )}

export default Title;