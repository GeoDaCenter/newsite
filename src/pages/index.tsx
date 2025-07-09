import React from 'react';
import Layout from '@theme/Layout';
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

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="GeoDa - An Introduction to Spatial Data Science"
      description="GeoDa is a free and open source software tool that serves as an introduction to spatial data science."
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={siteCommon.hero.tagline}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <MainContent
              intro={indexContent.mainContent.intro}
              slideshow={indexContent.mainContent.slideshow}
              sections={indexContent.mainContent.sections}
            />

            <Dependencies
              title={indexContent.dependencies.title}
              description={indexContent.dependencies.description}
              items={indexContent.dependencies.items}
            />

            <AcknowledgmentsSection
              title={indexContent.acknowledgments.title}
              content={indexContent.acknowledgments.content}
            />

            <SupportSection
              title={indexContent.support.title}
              content={indexContent.support.content}
              links={indexContent.support.links}
            />

            <LicenseSection
              title={indexContent.license.title}
              content={indexContent.license.content}
              links={indexContent.license.links}
            />

            <DonateSection
              title={indexContent.donate.title}
              content={indexContent.donate.content}
              links={indexContent.donate.links}
              image={indexContent.donate.image}
              imageAlt={indexContent.donate.imageAlt}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
