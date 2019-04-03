import React from 'react';

import './Display.css'

const display = () => {



    return(
    <div className="Display">
        <div className="HeaderDisplay">
            <h1>Your Information</h1>
        </div>  

        <div className="Item" >
            ID: 100
        </div>
        <div  className="Item">
            NAME: Yordy
        </div>
        <div  className="Item">
            AGE: 24
        </div>
        <div  className="Item">
            PHONE NUMBER: 3315112299
        </div>
        <div  className="Item">
            email: yordy@ibm.com
        </div>
        <div  className="Item">
            COUNTRY: Mexico
        </div>
    </div>
    );
}
export default display;