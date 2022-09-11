import React,{useEffect, useState} from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import api from "../api/detail"
import './App.css';
import Header from "./Header"
import AddDetails from "./AddDetails"
import DetailsList from "./DetailsList"
import LoginPage from "./LoginPage"
import EditDetails from "./EditDetails";
import axios from "axios";

function App() {
  const LOCAL_STORAGE_KEY = "details"
  const [details, setDetails] = useState([])
  

  //Retrieve Details
  const retrieveDetails = async () =>{
    const response = await api.get("/posts")
    return response.data
  }

  const addDetailsHandler = async (detail) =>{
    console.log(detail)
    const response1 = await axios.post(`http://localhost:9292/posts`,detail)
    setDetails([...details,response1.data])
    
  }

  const updateDetailHandler= () =>{

  }
  
  console.log(details)
  const removeDetailHandler = async(id) =>{
    
      await api.delete(`/posts/${id}`)
    const newDetailList = details.filter((detail)=>{
      return detail.id !== id
    })
    setDetails(newDetailList)
  
    
  }
  useEffect(()=>{
  //  const retrieveDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //  if(retrieveDetails)setDetails(retrieveDetails)
  const getAllDetails = async () =>{
    const allDetails = await retrieveDetails()
    if (allDetails) setDetails(allDetails)
  }
  getAllDetails()
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(details))
  },[details])
 

  return (
    <div className="ui container">
      <Header/>
      <Router>
      <Routes>
        
          <Route path= "/" element={<LoginPage />} />
          <Route path= "/article" element={ <AddDetails addDetailsHandler={addDetailsHandler}/>} />
          <Route path= "/contents" element={<DetailsList details={details} getDetailId={removeDetailHandler}/>} />
          <Route path="/edit" element={ <EditDetails updateDetailHandler={updateDetailHandler}  /> }  />
        </Routes>
      </Router>
       <Header />
        
       
        
    </div>
   

  );
}

export default App;
