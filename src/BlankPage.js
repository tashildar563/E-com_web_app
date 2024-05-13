import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
const BlankPage = () => {
    const navigate = useNavigate();


    const [userAuth, setUserAuth] = useState({
        username: '',
        password: '',
        });
    
        const handleInputChange = (e) => {
            setUserAuth({
                ...userAuth,
                [e.target.name]: e.target.value,
            });};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8033/actor/login', {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username:userAuth.username, password:userAuth.password}),
        });
        console.log(response);

        if (response.ok) {
            navigate('/landing-page');
        }else{
            alert('Failed to login');
        }   
    }

    const handleCreateUserClick = () => {
        navigate("/create-user");
    }
    
    const inputStyle = {
        margin: '0.5em 0',
        padding: '0.5em',
        width: '100%',
      };
    
      const buttonStyle = {
        padding: '0.5em 1em',
        marginTop: '1em',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }; 

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="right" style={{ color: "black", borderRadius: "10px", padding: "20px" }}>
                <form>
                    <input name="username" type="text" style={inputStyle} placeholder="username"  value={userAuth.username} onChange={handleInputChange} />
                    <input name ="password" type="password" style={inputStyle} placeholder="password" value={userAuth.password} onChange={handleInputChange}/>
                    <button style={buttonStyle} onClick={handleSubmit}>Login</button>
                </form>

                <button style={buttonStyle} onClick = {handleCreateUserClick}>Create User</button>
            </div>
        </div>

    );

};


export default BlankPage;