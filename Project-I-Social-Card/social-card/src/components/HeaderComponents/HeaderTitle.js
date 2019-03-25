import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent";
function HeaderTitle () {
    return (
        <div className = "HeaderTitle">
            <p><strong>Lambda</strong>  <small>@LambdaSchool</small> {Date()}</p>
            <HeaderContent />
        </div>
    )
} 

export default HeaderTitle;