import About from '../../Components/Londpage/About/About';
import Faq from '../../Components/Londpage/Faq/Faq';
import Footer from '../../Components/Londpage/Footer/Footer';
import Navigation from '../../Components/Londpage/Navigation/Navigation';
import Showcase from '../../Components/Londpage/Showcase/Showcase';
import Banner from '../../Components/Londpage/Banner/Banner';
import Wave from '../../Components/Londpage/Wave';
import { PageContainer } from './LandingPageStyles';

const LandingPage = () => {
  return (
    <PageContainer>
      <Navigation />
      <Banner />
      <Wave color="#F7F5F9" />
      <About />
      <Wave color="#1D1534" rotate={180} />
      <Showcase />
      <Wave color="#1D1534" />
      <Faq />
      <Wave color="#ff7300" />
      <Footer />
    </PageContainer>
  );
};

export default LandingPage;