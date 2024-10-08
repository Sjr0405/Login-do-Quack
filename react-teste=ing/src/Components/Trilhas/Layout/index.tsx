import React from "react";
import { Grid } from './style';
import MainHeader from "../MainHeader/MainHeader";
import MainContent from "../MainContent/MainContent";
import MainFooter from "../MainFooter/Footer";
import Roadmap from "../RoadMap";

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <MainContent />
      <Roadmap>
        <p>Roadmap aqui</p>
      </Roadmap>
      <MainFooter />
    </Grid>
  );
}

export default Layout;