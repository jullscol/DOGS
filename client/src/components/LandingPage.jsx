import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return(
        <div>
           <h1>Welcome to the dog page</h1>
           <Link to ='/Home'>
              <button>Ingresar</button>
           
           </Link>
        
        </div>
    )
}