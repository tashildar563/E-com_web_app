import React from 'react';
import { Button } from 'react-native';
import { View, ScrollView, StyleSheet } from 'react-native-web';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GridLayout from "react-grid-layout";
import SplitPane, { Pane } from 'react-split-pane';



const Home = () => {
    return (
        <SplitPane split="vertical" minSize={1300} defaultSize={1600} maxSize={1400}>
            <div style={{ backgroundColor: '#a4c639', height: '100vh' }}>
                <div style={{ backgroundColor: '#ffbb00', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace' }}>
                    <header><h1>Tashildar Readymades</h1></header>
                </div>

                <GridLayout className="layout" cols={4} rowHeight={200} width={100} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <GridLayout className="inner-layout-one" cols={4} rowHeight={200} width={100} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    </GridLayout>
                    <GridLayout className="inner-layout-two" cols={4} rowHeight={200} width={100} style={{ backgroundColor: '#ffffff'}}>
                    </GridLayout>
                </GridLayout>
            </div>
            <div style={{ backgroundColor: '#ffbb00', height: '100vh' }}>
            </div>
        </SplitPane>
    );
};

export default Home;