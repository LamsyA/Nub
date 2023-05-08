import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [listOfPosts, setListOfPosts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then((response)=>{
      setListOfPosts(response.data);
    })
  })
  return (
    <div >
      <Navbar />
      <Hero />
      <div className=""> {listOfPosts.map((value, index)=>{
        return(
          <div>
            <h1>{value.title}</h1>
            <h2>{value.postText}</h2>
          </div>
          
        )
      })}</div> 
    </div>
  )
}
