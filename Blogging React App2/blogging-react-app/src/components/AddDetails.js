import React, { useState } from "react"
import {Navigate} from "react-router-dom"

function AddDetails(props) {

    const [goToContents, setGoToContents] = React.useState(false)

   


    const [state, setState] = useState (
        {
            title : "",
            content : "",
           
        }
    )
   
    const  add = (e) => {
        e.preventDefault()
     
        props.addDetailsHandler(state) 
        setState({
            title:"",
            content: "",
            
          
        })
    }

  
   

    function onStateChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      }


      if(goToContents){
        return <Navigate to="/contents"/>
    }
        return (
            <div className="ui main">
                <h2>Add Details</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title"
                            value={state.title}
                            onChange={onStateChange} />
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <input type="text" name="content" placeholder="Content"
                            value={state.content}
                            onChange={onStateChange}
                        />
                    </div>
                    
                        < button className = "ui button blue" type="submit"> Add</button>
                        < button className = "ui button green" onClick={()=>{
                            setGoToContents(true)
                        }} type="button"> Go to Contents</button>
                        
            </form>
            </div >
        )
    

}

export default AddDetails