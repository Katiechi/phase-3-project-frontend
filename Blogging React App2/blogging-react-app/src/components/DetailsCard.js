import React from "react"
import user from "../images/user.png"


const DetailsCard = (props) =>{

    const {id,title,content} = props.detail
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div>{title}</div>
                <div>{content}</div>
                
            </div>
            <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px", marginLeft:"10px"}}
            onClick={()=>props.clickHandler(id)}
            ></i>   
        </div>
    )
}

export default DetailsCard