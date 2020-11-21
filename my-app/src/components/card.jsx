import React from "react";
import "../card.css";
import Img0 from "../assets/11.jpeg";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div>   
     <br></br>
    <div className="card text-center">
      <div className="overflow">
    
        <img src={Img0} alt="Image of " className="card-img-top" >
        </img><FaEdit className="icon" > </FaEdit>  
       <img src={props.imgsrc} alt="Image of " className="card-img rounded-circle">
        </img>
        <div className="card-body text-dark">
          <h2 className="card-title">{props.title} </h2>
          <p className="card-text text-secondary" >
          {props.text}
          <br>
          </br>
          <div className="Icons">   
          <a href={props.git} target="blank"> <FaGithub >  </FaGithub> </a> 
          <a href={props.linked} target="blank"> <FaLinkedin  > </FaLinkedin> </a> 
       </div>
          </p> 
    
     
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
