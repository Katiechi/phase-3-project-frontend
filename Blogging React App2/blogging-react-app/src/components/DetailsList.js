import React from "react"
import DetailsCard from "./DetailsCard"

const DetailsList = (props) => {

    const deleteDetailHandler = (id) =>{
        props.getDetailId(id)
    }
    const renderDetailsList =props.details.map((detail,pos) =>{
        console.log(detail)
        return(
        <DetailsCard key = {pos} detail={detail} clickHandler = {deleteDetailHandler }/>
        )
    })
    return (
        <div className="ui celled list">
            {renderDetailsList}
        </div>
    )
}

export default DetailsList