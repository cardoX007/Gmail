import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                
                <IconButton>
                     <MenuIcon/>
                </IconButton>
                <img 
                src="https://i.pinimg.com/564x/5f/24/29/5f24295e0f9ad080bf159ff0b8fb6d88.jpg"
                alt=""
                />
                
            </div>
              <div className="header__middle">
                    <SearchIcon />
                    <input placeholder="Search mail" type="text" />
                    <ArrowDropDownIcon className="header__inputCaret" />
                
                    
              </div>
              <div className="header__right">
                  <IconButton>
                  <AppsIcon/>

                  </IconButton>
                  <IconButton>
                <NotificationsIcon/>

                  </IconButton>
                  <Avatar />
              </div>
        </div>
    )
}

export default Header
