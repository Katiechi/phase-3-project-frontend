import React, { useState } from "react"
import {Navigate} from "react-router-dom"

function EditDetails(props) {
    console.log(props)
    const [goToContents, setGoToContents] = React.useState(false)
    const {id, name, email, password} = props.location.state.detail
    const [state, setState] = useState (
        {
            id ,
            name,
            email,
            password,
        }
    )

    
   
    const  update = (e) => {
        e.preventDefault()
        if (state.name === "" || state.email === "") {
            alert("All fields must be filled")
            return
        }
        props.addDetailsHandler(state) 
        setState({
            id:"",
            name: "",
            email: "",
            password:""
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
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                            value={state.name}
                            onChange={onStateChange} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                            value={state.email}
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

export default EditDetails