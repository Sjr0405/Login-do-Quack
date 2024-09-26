import React from "react";

import { Container } from './style';

import MainHeader from "../MainHeader";
import MainContent from "../MainContent";
import MainFooter from "../MainFooter";


const Layout: React.FC = () => {
    return (
            <Container>
                <MainHeader />
                <MainContent />
                <MainFooter />  
            </Container>     
    );
}

export default Layout;