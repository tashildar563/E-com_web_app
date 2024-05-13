import React from 'react';
import { Button } from 'react-native';
import { View, ScrollView, StyleSheet } from 'react-native-web';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GridLayout from "react-grid-layout";
import SplitPane, { Pane } from 'react-split-pane';
import './CSS/LandingPageModule.css';



const LandingPage = () => {
    return (
        <div class="row">
            <div class="column _25">
                25% Left Sidebar
            </div>
            <div class="column _55">
                55% Main Content
            </div>
            <div class="column _20">
                20% Right Sidebar
            </div>
        </div>
    );
};

export default LandingPage;