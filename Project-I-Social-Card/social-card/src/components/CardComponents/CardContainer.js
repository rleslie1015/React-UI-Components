import React from 'react';
import './Card.css';
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";
function CardContainer () {
    return (
        <div>
       
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;