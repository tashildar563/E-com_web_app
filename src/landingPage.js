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
    return (
        <div className="row">
            <div className="inner-row" style={{ fontFamily: 'monospace' }}>
                inner row
            </div>
            <div className="menu-row" style={{ fontFamily: 'monospace' }}>
                inner row
            </div>
            <div className="main-area">
                <SplitPane split="vertical" minSize={1300} defaultSize={1300} maxSize={1700}>
                    <div className="grid-row" style={{ backgroundColor: '#a4c639', height: '100vh' }}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <div className="inner-column" key={index}>
                                <h2>Column {index + 1}</h2>
                                <p>Some text..</p>
                                <img src="/logo192.png" style={{ width: '50%', height: 'auto' }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ backgroundColor: '#ffbb00', height: '100vh' }}></div>
                </SplitPane>
            </div>
        </div>
    );
};

export default LandingPage;