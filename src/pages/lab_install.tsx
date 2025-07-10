import React from 'react';
import Layout from '@theme/Layout';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import LabInstallContent from '../components/LabInstallContent';
import labInstallContent from '../data/labInstallContent.json';
import siteCommon from '../data/siteCommon.json';

export default function LabInstall(): React.JSX.Element {
  return (
    <Layout
      title="Lab Installation Guide - GeoDa"
      description="Lab Installation Guide for GeoDa - Instructions for installing GeoDa in lab environments"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={labInstallContent.title}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <LabInstallContent
              notes={labInstallContent.notes}
              windows={labInstallContent.windows}
              centos={labInstallContent.centos}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
} 