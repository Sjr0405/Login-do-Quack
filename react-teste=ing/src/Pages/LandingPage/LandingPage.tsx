import React, { Suspense, lazy } from 'react';
import { PageContainer } from './LandingPageStyles';
import ScrollToTop from '../../Components/Londpage/Utils/ScrollToTop';
import Loading from '../../Components/Londpage/Utils/Loading';
import Decoration from '../../Components/Londpage/Decoration';

// Lazy loading dos componentes
const About = lazy(() => import('../../Components/Londpage/About/About'));
const CallToAction = lazy(() => import('../../Components/Londpage/CallToAction/CallToAction'));
const Footer = lazy(() => import('../../Components/Londpage/Footer/Footer'));
const Navigation = lazy(() => import('../../Components/Londpage/Navigation/Navigation'));
const Showcase = lazy(() => import('../../Components/Londpage/Showcase/Showcase'));
const Banner = lazy(() => import('../../Components/Londpage/Hero/Hero'));
const Join = lazy(() => import('../../Components/Londpage/Join/Join')); // Importando o componente Join
const Team = lazy(() => import('../../Components/Londpage/Team/Team'));
const Faq = lazy(() => import('../../Components/Londpage/Faq/Faq'));

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      {/* Botão de rolagem para o topo */}
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        {/* Componentes da página */}
        <Decoration>
          <Navigation />
          <Banner />
        </Decoration>
        <About />
        <Showcase />
        <CallToAction />

        <Team />
        <Faq />

        <Join />
        <Footer />
      </Suspense>
    </PageContainer>
  );
};

export default LandingPage;