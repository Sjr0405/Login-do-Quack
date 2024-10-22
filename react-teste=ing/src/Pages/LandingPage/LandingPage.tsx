import About from '../../Components/Londpage/About/About';
import Faq from '../../Components/Londpage/Faq/Faq';
import Footer from '../../Components/Londpage/Footer/Footer';
import Navigation from '../../Components/Londpage/Navigation/Navigation';
import Showcase from '../../Components/Londpage/Showcase/Showcase';
import Landpage from '../../Components/Londpage/Landpage';

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Landpage />
      <About />
      <Showcase />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;