import React from "react";

import { Grid } from './style';

import MainHeader from "../MainHeader";
import MainContent from "../MainContent";
import MainFooter from "../MainFooter";


const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader>
        Backend Roadmap
      </MainHeader>
      
      <MainContent>
        <p>Aqui vai o conteúdo do roadmap...</p>
      </MainContent>
      
      <MainFooter>
        Continue praticando!
      </MainFooter>  
    </Grid>     
  );
}

export default Layout;