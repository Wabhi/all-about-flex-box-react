import React from "react"
import "./FlexBox-One.css"
const FlexBoxOne = ()=>{
    return (
        <>
        <h1>Flex Box with Nav</h1>
        <nav>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Learn new technology with us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        </>
    )
}

export default FlexBoxOne;


// li elements are block level items 
//it occupie all the space accross the window size horizantly