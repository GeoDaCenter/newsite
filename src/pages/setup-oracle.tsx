import React from 'react';
import Layout from '@theme/Layout';
import styles from './setup-instruction.module.css';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import SetupInstructionSection from '../components/SetupInstructionSection';
import setupOracleContent from '../data/setupOracleContent.json';
import siteCommon from '../data/siteCommon.json';

export default function SetupOracle(): React.JSX.Element {
  return (
    <Layout
      title="Plugins: Setup Oracle | GeoDa on Github"
      description="Setup instructions for Oracle Spatial Database Plugin"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={setupOracleContent.hero.tagline}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <h3 className={styles.mainTitle}>
              <a
                id="welcome-to-github-pages"
                className="anchor"
                href="#welcome-to-github-pages"
                aria-hidden="true"
              >
                <span className="octicon octicon-link"></span>
              </a>
              {setupOracleContent.mainContent.title}
            </h3>

            <div className={styles.navigation}>
              {setupOracleContent.mainContent.navigation.map((nav, index) => (
                <a key={index} href={nav.href} className={styles.navLink}>
                  {nav.text}
                </a>
              ))}
            </div>

            <hr className={styles.divider} />

            {setupOracleContent.mainContent.sections.map((section, index) => (
              <SetupInstructionSection
                key={index}
                id={section.id}
                title={section.title}
                steps={section.steps}
                image={section.image}
                imageAlt={section.imageAlt}
                commandBlock={section.commandBlock}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
