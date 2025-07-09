import React from 'react';
import Layout from '@theme/Layout';
import styles from './setup-instruction.module.css';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import SetupInstructionSection from '../components/SetupInstructionSection';
import setupEsriFgdbContent from '../data/setupEsriFgdbContent.json';
import siteCommon from '../data/siteCommon.json';

export default function SetupEsriFgdb(): React.JSX.Element {
  return (
    <Layout
      title="Plugins | GeoDa on Github"
      description="Setup instructions for ESRI File Geodatabase Plugin"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={setupEsriFgdbContent.hero.tagline}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <h3 className={styles.mainTitle}>
              <a id="welcome-to-github-pages" className="anchor" href="#welcome-to-github-pages" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>
              {setupEsriFgdbContent.mainContent.title}
            </h3>

            <div className={styles.navigation}>
              {setupEsriFgdbContent.mainContent.navigation.map((nav, index) => (
                <a key={index} href={nav.href} className={styles.navLink}>
                  {nav.text}
                </a>
              ))}
            </div>

            <hr className={styles.divider} />

            {setupEsriFgdbContent.mainContent.sections.map((section, index) => (
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