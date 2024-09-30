import React from "react";

import { Grid } from './style';

import MainHeader from "../MainHeader";
import MainContent from "../MainContent"; // Ensure this path is correct
import MainFooter from "../MainFooter";
import Roadmap from "../RoadMap";


const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader></MainHeader>
      
      <MainContent></MainContent>

      <Roadmap>
        <p>Roadmapaqi</p>
      </Roadmap>      
      
      <MainFooter>
        Continue praticando!
      </MainFooter>  
    </Grid>     
  );
}

export default Layout;