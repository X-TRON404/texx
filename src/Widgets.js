import React from 'react'
import './Widgets.css'
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets"> 
            <div className="widgets__inputBox">
                <SearchIcon className="widgets__searchIcon"/>
                <Input style={{color:"aliceblue"}} className="widgets__input" type= "text" placeholder="Search Texx" />
            </div>
            <div className="widgets___widgetContainer">

            </div>
        </div>
    )
}

export default Widgets
