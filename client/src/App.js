import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [authState, setAuthState] = useState(false)
  useEffect(()=> {
    if(localStorage.getItem("accessToken")){
      axios.get('http://localhost:3001/auth/auth', {
        headers: {
          accessToken: localStorage.getItem("accessToken")
        }
      }).then((response)=>{
        if(response.data.error) {
          setAuthState(false)
        }else {
          setAuthState(true)
        }
      })

    }
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    setAuthState(false)
  }
  return (

    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
      <div className="navbar">
        <Link to="/createpost"> Create A post</Link>
        <Link to="/"> Home Page</Link>
        {!authState ? (
              <>
                <Link to="/login"> Login</Link>
                <Link to="/registration"> Registration</Link>
              </>
            ) : (
              <button onClick={logout}>
                Logout
              </button>
            )}
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
