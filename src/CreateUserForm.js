import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        salutation: '',
        firstName: '',
        middleName: '',
        lastName: '',
        type: '',
        gender:'',
        dob:'',
        status:'',
        formattedId: '',
        });

    const handleBackClick = () => {
        navigate('/');
    };

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });};

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your form submission logic goes here
        console.log(user);
        const response = await fetch('http://localhost:8033/actor/member/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        console.log(response);

        if (response.ok) {
            alert('User created successfully');
            navigate('/');
        }else{
            alert('Failed to create user');
        }   
    }


    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px 0',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <div>
            <form style={formStyle}>
                {/* Your form fields go here */}
                <input name="formattedId" style={inputStyle} value={user.formattedId} onChange={handleInputChange} type="text" placeholder="Formatted ID" />
                <input name="salutation" style={inputStyle} type="text" placeholder="Salutation" value={user.salutation} onChange={handleInputChange}/>
                <input name="firstName" style={inputStyle} type="text" placeholder="First Name" value={user.firstName} onChange={handleInputChange}/>
                <input name="middleName" style={inputStyle} type="text" placeholder="Middle Name" value = {user.middleName} onChange={handleInputChange}/>
                <input name="lastName" style={inputStyle} type="text" placeholder="Last Name" value={user.lastName} onChange={handleInputChange}/>
                <input name ="type" style={inputStyle} type="text" placeholder="Type" value={user.type} onChange={handleInputChange}/>
                <input name="gender" style={inputStyle} type="text" placeholder="Gender" value={user.gender} onChange={handleInputChange}/>
                <input name="dob" style={inputStyle} type="date" placeholder="DOB" value={user.dob} onChange={handleInputChange}/>
                <input name="status" style={inputStyle} type="text" placeholder="Status" value={user.status} onChange={handleInputChange}/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button style={buttonStyle} onClick={handleSubmit} type="submit">Submit</button>
                    <button style={buttonStyle} onClick={handleBackClick}>Back</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUserForm;