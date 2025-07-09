import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import commonStyles from '../styles/common.module.css';
import Hero from '../components/Hero';
import DonationSection from '../components/DonationSection';
import DownloadButtons from '../components/DownloadButtons';
import ReleaseList from '../components/ReleaseList';
import LabInstallation from '../components/LabInstallation';
import MapSection from '../components/MapSection';
import DownloadChart from '../components/DownloadChart';
import downloadContent from '../data/downloadContent.json';
import siteCommon from '../data/siteCommon.json';

interface CountryDownload {
  id: string;
  count: string;
}

export default function Download(): React.JSX.Element {
  const [countryDownloads, setCountryDownloads] = useState<CountryDownload[]>(
    []
  );

  useEffect(() => {
    // Load country download data
    fetch('data/down_by_country.csv')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then((csv) => {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map((line) => {
          const values = line.split(',');
          return {
            id: values[0] || '',
            count: values[1] || '0',
          };
        });
        setCountryDownloads(data);
      })
      .catch((err) => {
        console.error('Error loading country data:', err);
        // Set empty array as fallback
        setCountryDownloads([]);
      });
  }, []);

  return (
    <Layout
      title="Download GeoDa"
      description="Download GeoDa - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline={downloadContent.title}
          buttons={siteCommon.hero.buttons}
        />

        <div className={commonStyles.container}>
          <div className={commonStyles.content}>
            <DonationSection
              title={downloadContent.donation.title}
              content={downloadContent.donation.content}
              links={downloadContent.donation.links}
              image={downloadContent.donation.image}
              imageAlt={downloadContent.donation.imageAlt}
              description={downloadContent.donation.description}
              descriptionLinks={downloadContent.donation.descriptionLinks}
            />

            <DownloadButtons
              buttons={downloadContent.downloadButtons.buttons}
            />

            <LabInstallation
              title={downloadContent.labInstallation.title}
              description={downloadContent.labInstallation.description}
              text={downloadContent.labInstallation.text}
              href={downloadContent.labInstallation.href}
            />

            <ReleaseList
              title={downloadContent.releaseList.title}
              releaseNotesLink={downloadContent.releaseList.releaseNotesLink}
              releases={downloadContent.releaseList.releases}
            />

            <MapSection
              title={downloadContent.map.title}
              countryDownloads={countryDownloads}
            />

            <DownloadChart />
          </div>
        </div>
      </main>
    </Layout>
  );
}
