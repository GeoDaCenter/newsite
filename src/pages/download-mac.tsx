import React from 'react';
import Layout from '@theme/Layout';
import styles from './download.module.css';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import DownloadLink from '../components/DownloadLink';
import VersionSection from '../components/VersionSection';
import downloadMac from '../data/downloadMac.json';
import siteCommon from '../data/siteCommon.json';

export default function DownloadMac(): React.JSX.Element {
  return (
    <Layout
      title="Download GeoDa for Mac"
      description="Download GeoDa for Mac OSX - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={downloadMac.title}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <section className={styles.mainContent}>
              <h3 className={commonStyles.heading}>
                {downloadMac.title}
              </h3>
              
              <p>
                {downloadMac.description}
              </p>

              <VersionSection
                version={downloadMac.currentVersion.version}
                downloads={downloadMac.currentVersion.downloads}
              />

              <div className={styles.alternativeDownloads}>
                <p>
                  {downloadMac.alternativeDownloads.title}
                </p>
                <ul className={styles.downloadList}>
                  {downloadMac.alternativeDownloads.downloads.map((download, index) => (
                    <DownloadLink
                      key={index}
                      text={download.text}
                      href={download.href}
                      tracking={download.tracking}
                    />
                  ))}
                </ul>
              </div>

              {downloadMac.notes.map((note, index) => (
                <div key={index} className={styles.noteSection}>
                  <h4 className={commonStyles.heading}>{note.title}</h4>
                  <p>{note.content}</p>
                  {note.instructions && (
                    <p>{note.instructions}</p>
                  )}
                </div>
              ))}

              <h3 className={commonStyles.heading}>Previous versions</h3>
              {downloadMac.previousVersions.map((version, index) => (
                <VersionSection
                  key={index}
                  version={version.version}
                  downloads={version.downloads}
                />
              ))}
            </section>

            
          </div>
        </div>

        
      </main>
    </Layout>
  );
} 