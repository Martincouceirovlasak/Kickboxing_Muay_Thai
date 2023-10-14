import React from 'react';
const Card = (props) => {




const size_card = {
        maxWidth: "18rem",
        height: '100vh',
      };

return (
    <div className="d-flex justify-content-center align-items-center" style={{size_card}}>
        
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.dat}</h4>
        </div>
      </div>
      </div>
    );
};

export default Card;
