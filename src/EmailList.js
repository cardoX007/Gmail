import React from 'react'
import "./EmailList.css"
import Section from "./Section"
import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import EmailRow from './EmailRow'

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
            <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
                
            </div>
            <div className="emailList__sections">
                    <Section Icon = {Inbox } title = 'Primary' color ='red' selected ={true} />

                    <Section Icon = {People } title = 'Social' color ='blue' />        
                    <Section Icon = {LocalOffer } title = 'Promotions' color ='green'  />    
                </div>
                <div className="emailList__List">
                    <EmailRow 
                       
                        title="Facebook"
                        subject="Post comment" 
                        description="Sarah Commented on you post Login to respond to her post" 
                        time="6pm"
                    />
                </div>
                <div className="emailList__List">
                    <EmailRow 
                       
                        title="Youtube"
                        subject="This is a test" 
                        description="More testing" 
                        time="10pm"
                    />
                </div>
        </div>
    )
}

export default EmailList
