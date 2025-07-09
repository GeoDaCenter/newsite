import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import DocumentationContent from '../components/DocumentationContent';
import documentationContent from '../data/documentationContent.json';
import siteCommon from '../data/siteCommon.json';

export default function Documentation(): React.JSX.Element {
  return (
    <Layout
      title="Documentation - GeoDa"
      description="GeoDa Documentation - Learn how to use GeoDa for spatial data analysis"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={documentationContent.hero.tagline}
          buttons={siteCommon.hero.buttons}
        />

        <DocumentationContent
          intro={documentationContent.mainContent.intro}
          workbook={documentationContent.mainContent.workbook}
          overview={documentationContent.mainContent.overview}
          formats={documentationContent.mainContent.formats}
          regression={documentationContent.mainContent.regression}
          legacy={documentationContent.mainContent.legacy}
        />
      </main>
    </Layout>
  );
}
