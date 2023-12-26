import React from 'react';
import {Link } from 'react-router-dom';
 

const Card = (props) => {

const size_card = {
        maxWidth: "18rem",
        height: '100vh',
      };

return (
    <div className="d-flex justify-content-center align-items-center" style={{size_card}}>
        
    <div className="card">
        <div className="card-body">
            <h4 className="card-title display-4 text-center">{props.dat}</h4>
            {props.image} 
        </div>               
            <Link to={`/content/${props.id}`} className="btn btn-dark text-xl">Article Content</Link>
       
      </div>
      </div>
    );
};

export default Card;
