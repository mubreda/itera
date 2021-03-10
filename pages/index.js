import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';

import Capa from '../src/components/commons/Capa';
import WhoAmISection from '../src/components/sections/WhoAmISection';
import MySkillsSection from '../src/components/sections/MySkillsSection';
import ExperiencesSection from '../src/components/sections/ExperiencesSection';
import PortfolioSection from '../src/components/sections/PortfolioSection';
import BlogSection from '../src/components/sections/BlogSection';
import Testimonials from '../src/components/sections/Testimonials';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/background2.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Grid.Container
        minHeight="48rem"
        backgroundImage={{
          xs: 'url(/images/Moco1.png)',
          md: 'url(/images/DesignerText.png), url(/images/Moco1.png)',
        }}
        backgroundRepeat={{
          xs: 'no-repeat',
          md: 'no-repeat, no-repeat',
        }}
        backgroundPosition={{
          xs: 'right',
          md: '0rem 7rem, right',
        }}
      >
        <Menu />
        <Capa />
      </Grid.Container>
      <WhoAmISection />
      <MySkillsSection />
      <ExperiencesSection />
      <PortfolioSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </Box>
  );
}
