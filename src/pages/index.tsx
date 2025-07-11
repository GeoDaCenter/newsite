import React from 'react';
import Layout from '@theme/Layout';
import Root from '../components/Root';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import commonStyles from '../styles/common.module.css';
import Dependencies from '../components/Dependencies';
import AcknowledgmentsSection from '../components/AcknowledgmentsSection';
import SupportSection from '../components/SupportSection';
import LicenseSection from '../components/LicenseSection';
import DonateSection from '../components/DonateSection';
import indexContent from '../data/indexContent.json';
import siteCommon from '../data/siteCommon.json';
import { useLocalizedContent, useLocalizedContentFile } from '../utils/contentLoader';

export default function Home(): React.JSX.Element {
  return (
    <Root>
      <HomeContent />
    </Root>
  );
}

function HomeContent(): React.JSX.Element {
  const localizedSiteCommon = useLocalizedContent(siteCommon);
  const localizedIndexContent = useLocalizedContentFile('indexContent.json', indexContent);
  
  return (
    <Layout
      title="GeoDa - An Introduction to Spatial Data Science"
      description="GeoDa is a free and open source software tool that serves as an introduction to spatial data science."
    >
      <main>
        {/* Language Switcher */}
        <div style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <LanguageSwitcher />
        </div>

        <Hero
          title={localizedSiteCommon.hero.title}
          tagline={localizedSiteCommon.hero.tagline}
          buttons={localizedSiteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <MainContent
              intro={localizedIndexContent.mainContent.intro}
              slideshow={localizedIndexContent.mainContent.slideshow}
              sections={localizedIndexContent.mainContent.sections}
            />

            <Dependencies
              title={localizedIndexContent.dependencies.title}
              description={localizedIndexContent.dependencies.description}
              items={localizedIndexContent.dependencies.items}
            />

            <AcknowledgmentsSection
              title={localizedIndexContent.acknowledgments.title}
              content={localizedIndexContent.acknowledgments.content}
            />

            <SupportSection
              title={localizedIndexContent.support.title}
              content={localizedIndexContent.support.content}
              links={localizedIndexContent.support.links}
            />

            <LicenseSection
              title={localizedIndexContent.license.title}
              content={localizedIndexContent.license.content}
              links={localizedIndexContent.license.links}
            />

            <DonateSection
              title={localizedIndexContent.donate.title}
              content={localizedIndexContent.donate.content}
              links={localizedIndexContent.donate.links}
              image={localizedIndexContent.donate.image}
              imageAlt={localizedIndexContent.donate.imageAlt}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
