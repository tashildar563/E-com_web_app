import React, { useState, useEffect } from 'react';
import './CSS/LandingPageModule.css';
import { get, post } from './Component/ApiUtility.js';
import logoImg from './logo192.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const LandingPage = () => {
    const [columnNames, setColumnNames] = useState([]);

    const handleClick = () => {
        console.log('clicked');
    }


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

    return (
        <div >
            <header> <h1>Tashildar</h1></header>
            <button className="button_70" title="Home" >Home</button>
            <button className="button_80" title="Home" >Home</button>
            <button className="button_90" title="Home" >Home</button>

            <div className="main-area">
                <div className="grid-row" style={{ backgroundColor: '#66A5AD', display: 'flex' }}>
                    {columnNames.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', minHeight: "10vh", maxHeight: "20vh",maxWidth:"33.33%" }}>
                            <div className="ripple" style={{ paddingLeft: '1em', margin: '1em 0' }} onClick={handleClick()}>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p >Size:{item.size}</p>
                                    <p style={{ margin: '0 1em' }}>Color:{item.color}</p>
                                    <p style={{ margin: '0 1em' }}>Category:{item.category_id}</p>
                                </div>
                            </div>
                            <img src={logoImg} alt={"logo"} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;