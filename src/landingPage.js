import React, { useState, useEffect } from 'react';
import './CSS/LandingPageModule.css';
import { get, post } from './Component/ApiUtility.js';
import logoImg from './logo192.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CardComponent from './Component/CardComponent';



const LandingPage = () => {
    const [columnNames, setColumnNames] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('clicked');
    }
    const handleBuyClick = () => {
        // Your buy logic here
    };

    useEffect(() => {
        // Function to fetch image details from the database
        const fetchImageDetails = async () => {
            try {
                // Make the API call to fetch the image details
                const response = await post('product/getAllProductDetails', { product: '' });
                if (response !== null) {
                    // Extract the column names from the fetched data
                    const fetchedColumnNames = response.length > 0 ? Object.keys(response[0]) : [];

                    // Update the state with the fetched column names
                    setColumnNames(response);
                } else {
                    alert('Failed to get product list');
                }
            } catch (error) {
                console.error('Error fetching image details:', error);
            }
        };

        // Call the fetchImageDetails function
        fetchImageDetails();
    }, []);
    // const columnNames = ['Sari 1', 'Sari 2', 'Sari 3', 'Sari 4', 'Sari 5', 'Sari 6','Sari 7', 'Sari 8', 'Sari 9', 'Sari 10', 'Sari 11', 'Sari 12','Sari 13'];

    const handleLogInClick = () => {
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <header> <h1>Tashildar</h1></header>
                <button className="button_70" title="Log In" onClick={handleLogInClick}>Log In</button>
                <button className="button_80" title="Home" >Home</button>
                <button className="button_90" title="Contact Us" >Contact Us</button>
            </div>

            <div className="main-area">
                <div className="grid-row" style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                    {columnNames.map((item, index) => <CardComponent key={index} item={item} />)}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;