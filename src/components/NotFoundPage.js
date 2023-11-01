import React from 'react';
import { Link } from 'react-router-dom';

   // when we use <a> to go home page the page refrech but if we use <Link> we switch to home page without refrech 
   const NotFoundPage = () =>(
    <div>
       404 - <Link to='/'> Go home </Link>
    </div>
)

export default NotFoundPage;