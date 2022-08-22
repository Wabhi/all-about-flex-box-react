import React from "react"
import "./FlexBox-One.css"
const FlexBoxOne = ()=>{
    return (
        <>
        <h1>Flex Box with Nav</h1>
        <hr className="horizantl-line"/>
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
        <h1>Flex Box with Card</h1>
        <hr className="horizantl-line"/>
        <div className="columns">
            <article className='card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
            <article className='card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
            <article className='card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
        </div>
       <h1>Flex Box with Box</h1>
       <hr className="horizantl-line"/>
        <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            {/* <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div> */}
        </div>
        <h1>Flex Box with Box, center a box within box</h1>
        <hr className="horizantl-line"/>
        <div className='outter-div'>
            <div className="inner-div"></div>
        </div>

        </>
    )
}

export default FlexBoxOne;


// li elements are block level items 
//it occupie all the space accross the window size horizantly