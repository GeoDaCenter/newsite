import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import FormatsTable from '../components/FormatsTable';
import formatsContent from '../data/formatsContent.json';
import styles from './formats.module.css';
import siteCommon from '../data/siteCommon.json';

export default function Formats(): React.JSX.Element {
  return (
    <Layout
      title="Data Formats | GeoDa on Github"
      description="Spatial data formats supported by GeoDa 1.8"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={formatsContent.hero.tagline}
          buttons={siteCommon.hero.buttons}
        />

        <section className={styles.mainContent}>
          <h3>
            <a
              id="welcome-to-github-pages"
              className="anchor"
              href="#welcome-to-github-pages"
              aria-hidden="true"
            >
              <span className="octicon octicon-link"></span>
            </a>
            {formatsContent.mainContent.title}
          </h3>

          {formatsContent.mainContent.sections.map((section, index) => (
            <FormatsTable
              key={index}
              title={section.title}
              headers={section.headers}
              rows={section.rows}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}
