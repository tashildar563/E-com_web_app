import React from 'react';
import { Button } from 'react-native';
import { View, ScrollView, StyleSheet } from 'react-native-web';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GridLayout from "react-grid-layout";
import SplitPane, { Pane } from 'react-split-pane';
import './CSS/LandingPageModule.css';
import { Draggable } from 'react-beautiful-dnd';



const LandingPage = () => {
    const columnNames = ['Sari 1', 'Sari 2', 'Sari 3', 'Sari 4', 'Sari 5', 'Sari 6'];

    return (
        <div className="row">
            <div className="inner-row" style={{ fontFamily: 'monospace' }}>
                Tashildar
            </div>
            <Button className="btn" style={{ width: '40px' }}>Home</Button>
            <div style={{ width: '100px', display:'flex' }}>
                <Button className="btn" style={{ width: '100px', display:'flex' }}>Home</Button>
                {/* <Button className="btn" style={{ width: '10%' }}>Purchase Order</Button>
                <Button className="btn" style={{ width: '10%' }}>Stock</Button>
                <Button className="btn" style={{ width: '10%' }}>Invoice</Button>
                <Button className="btn" style={{ width: '10%' }}>Reports</Button>
                <Button className="btn" style={{ width: '10%' }}>Settings</Button> */}
            </div>
            <div className="main-area">
                {/* <SplitPane split="vertical" minSize={1300} defaultSize={1300} maxSize={1700}> */}
                    <div className="grid-row" style={{ backgroundColor: '#a4c639', height: '100vh', display: 'flex' }}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <div className="inner-column" key={index} style={{ width: '16.666%' }}>
                                <h2>{columnNames[index]}</h2>
                                <p>Some text..</p>
                                <img src="/logo192.png" style={{ width: '50%', height: 'auto' }} />
                            </div>
                        ))}
                    </div>
                    {/* <div style={{ backgroundColor: '#ffbb00', height: '100vh' }}></div> */}
                {/* </SplitPane> */}
            </div>
        </div>
    );
};

export default LandingPage;