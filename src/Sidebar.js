import React from 'react';
import './Sidebar.css';
import  { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch } from "react-redux"
import { AccessTime, Duo, ExpandMore,LabelImportant, NearMe, Note, Person, Phone } from '@material-ui/icons'
import { openSendMessage } from './features/mailSlice';
function Sidebar() {

    const  dispatch = useDispatch();
    
    return (
        <div className="sidebar">
            <Button
            startIcon={<AddIcon fontSize="large>" />}
            className="sidebar__compose"
            onClick={()=> dispatch(openSendMessage())}
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number = {54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number = {54}/>
            <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportant} title="Important" number={54} />
            <SidebarOption Icon={NearMe} title="Sent" number={54} />
            <SidebarOption Icon={Note} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person/>
                    </IconButton>
                    <IconButton>
                        <Duo/>
                    </IconButton>
                    <IconButton>
                        <Phone/>
                    </IconButton>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar
