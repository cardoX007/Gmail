import React from 'react'
import "./EmailRow.css"
import {Checkbox, IconButton} from "@material-ui/core"
import { StarBorderOutlined,LabelImportantOutlined } from '@material-ui/icons'
import { useHistory } from "react-router-dom"
function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();
    
    return (
        <div onClick={()=> history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title"><h3> {title}
                </h3>
            </div>
            <div className="emailRow__message"> 
                <h4> 
                    {subject} {" "}
                    <span className="emailRow__description"> 
                    {description}
                    
                    </span>
                </h4>
                
            </div>
            <div className="emailRow__description">{time}</div>
            
        </div>
    )
}

export default EmailRow
