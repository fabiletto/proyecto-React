 
 import React from 'react'
 import './NavBar.css'
 import CardWidget from '../CardWidget/CardWidget'
 const NavBar = () => {
   return (
     <header>
       <h1>perfumeria coder </h1>
       <nav>
        <ul>
            <li>perfumes</li>
            <li>maquillajes</li>
            <li>cremas</li>
        </ul>
       </nav>
       <CardWidget/>                                                                                                                                                   
     </header>
   )
 }
 
 export default NavBar
 