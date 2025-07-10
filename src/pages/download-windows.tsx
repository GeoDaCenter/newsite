import React from 'react';
import Layout from '@theme/Layout';
import styles from './download.module.css';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import VersionSection from '../components/VersionSection';
import InstallationSection from '../components/InstallationSection';
import downloadWindows from '../data/downloadWindows.json';
import siteCommon from '../data/siteCommon.json';
import { getImagePath } from '../utils/imagePath';

export default function DownloadWindows(): React.JSX.Element {
  return (
    <Layout
      title="Download GeoDa for Windows"
      description="Download GeoDa for Windows - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={downloadWindows.title}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <section className={styles.mainContent}>
              <h3 className={commonStyles.heading}>
                {downloadWindows.title}
              </h3>
              
              <p>
                {downloadWindows.description}
              </p>

              <VersionSection
                version={downloadWindows.currentVersion.version}
                downloads={downloadWindows.currentVersion.downloads}
              />

              {downloadWindows.notes.map((note, index) => (
                <div key={index} className={styles.noteSection}>
                  <p>{note.content}</p>
                  {note.steps && (
                    <ul className={styles.noteList}>
                      {note.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className={commonStyles.text}>{step}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <h3 className={commonStyles.heading}>Previous versions</h3>
              {downloadWindows.previousVersions.map((version, index) => (
                <VersionSection
                  key={index}
                  version={version.version}
                  downloads={version.downloads}
                  content={version.content}
                  notes={version.notes}
                />
              ))}

              {downloadWindows.systemInfo && (
                <div className={styles.systemInfo}>
                  <h4 className={commonStyles.heading}>
                    {downloadWindows.systemInfo.title}
                  </h4>
                  <p>
                    {downloadWindows.systemInfo.content}
                  </p>
                  <img 
                    src={getImagePath(downloadWindows.systemInfo.image)} 
                    alt="Windows system information"
                    className={styles.systemInfoImage}
                  />
                </div>
              )}

              {downloadWindows.installation && (
                <div className={styles.installationContainer}>
                  <h3 className={commonStyles.heading}>
                    {downloadWindows.installation.title}
                  </h3>
                  <ul className={styles.installationMenu}>
                    <li><a href="#install_geoda">Installation</a></li>
                    <li><a href="#run_geoda">Run GeoDa</a></li>
                    <li><a href="#uninstall_geoda">Uninstall instructions</a></li>
                    <li><a href="#create_a_usb_running_geoda">Create a USB running GeoDa</a></li>
                  </ul>

                  {downloadWindows.installation.sections.map((section, index) => {
                    // Create anchor ID based on section title
                    const anchorId = section.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                    return (
                      <InstallationSection
                        key={index}
                        id={anchorId}
                        title={section.title}
                        steps={section.steps}
                        images={section.images}
                        content={section.content}
                        alternative={section.alternative}
                      />
                    );
                  })}
                </div>
              )}

              {downloadWindows.footerNote && (
                <p>
                  {downloadWindows.footerNote}
                </p>
              )}
            </section>

            
          </div>
        </div>

        
      </main>
    </Layout>
  );
} 