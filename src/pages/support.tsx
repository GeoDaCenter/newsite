import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import siteCommon from '../data/siteCommon.json';

export default function Support(): React.JSX.Element {
  return (
    <Layout
      title="Support - GeoDa"
      description="Get support for GeoDa - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline="Support"
          buttons={siteCommon.hero.buttons}
        />

        <section className="main-content">
          <div style={{ maxWidth: '64rem', padding: '2rem 6rem', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <p>&nbsp;</p>

            <h3>FAQs: Frequently Asked Questions</h3>
            <p>Find answers to Frequently Asked Questions (FAQs) <a href="./faq">here</a>.</p>

            <h3>Answers to Common Technical Questions</h3>
            <p>Find answers to common technical questions about GeoDa <a href="./questions">here</a>.</p>

            <h3>Community Support through Openspace Mailing List</h3>
            <p style={{ marginTop: '0px', marginRight: '0px', marginBottom: '0.75em', marginLeft: '0px', lineHeight: '1.5em' }}>
              The <a href="http://groups.google.com/group/openspace-list?lnk=" target="_blank" rel="noopener noreferrer">Openspace mailing list</a> is a list to discuss all aspects of methods and open source software tools to carry out spatial data analysis. A specific emphasis is on the GeoDa, GeoDaSpace, PySAL and CAST software programs.
            </p>

            <p style={{ marginTop: '0px', marginRight: '0px', marginBottom: '0.75em', marginLeft: '0px', lineHeight: '1.5em' }}>
              The list is <strong>not</strong> for the discussion of commercial spatial analysis software, but methodological debates are welcomed. It is for non-commercial use only.
            </p>

            <ul style={{ lineHeight: '1.5em', marginTop: '0.5em', marginRight: '0px', marginBottom: '0px', marginLeft: '1.5em', listStyleType: 'square', padding: '0px' }}>
              <li style={{ marginBottom: '0.5em' }}>Subscribe to the Openspace mailing list: openspace-list+subscribe@googlegroups.com</li>
              <li style={{ marginBottom: '0.5em' }}>Post to the Openspace mailing list: openspace-list@googlegroups.com</li>
              <li style={{ marginBottom: '0.5em' }}>
                <a href="http://groups.google.com/group/openspace-list?lnk=srg" target="_blank" rel="noopener noreferrer">Current Openspace mailing list (searchable)</a>
              </li>
              <li>
                <a href="http://groups.google.com/support/bin/answer.py?hl=en&amp;answer=46608" target="_blank" rel="noopener noreferrer">Unsubscribe</a> from the Openspace mailing list (instructions)
              </li>
            </ul>

            <p>&nbsp;</p>
          </div>
        </section>

        
      </main>
    </Layout>
  );
} 