import React from 'react';
import "./Cards.css"
import Card from './Card';
import titleArray from '../Assets/data';
const Cards = () => {
    // titleArray = [{'logo1':'Presentation Design','logo2':'Audio - Visual Production','logo3':'Translation Services','logo4':'Graphic Design','logo5':'Research & Analytics','logo6':'Data Processing'}]
    return ( 
    <div className="cardsContainer">
        {titleArray.map((el,i)=>{
            return <Card key={i} logoClass={`logo${i+1}`} title={el} />}
        )}
    </div> 
);
}
 
export default Cards;
