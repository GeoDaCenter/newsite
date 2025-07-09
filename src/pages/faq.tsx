import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import siteCommon from '../data/siteCommon.json';

export default function FAQ(): React.JSX.Element {
  return (
    <Layout
      title="FAQs - GeoDa"
      description="Frequently Asked Questions about GeoDa - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={siteCommon.hero.title}
          tagline="Frequently Asked Questions"
          buttons={siteCommon.hero.buttons}
        />

        <section className="main-content">
          <div style={{ maxWidth: '64rem', padding: '2rem 6rem', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <ul>
              <li><a href="#geoda">What is GeoDa?</a></li>
              <li><a href="#url">What websites are related to GeoDa?</a></li>
              <li><a href="#name">What does GeoDa stand for?</a></li>
              <li><a href="#phil">What is the philosophy behind GeoDa?</a></li>
              <li><a href="#dev">What are the current GeoDa-related developments?</a></li>
              <li><a href="#not">What is GeoDa NOT designed to do?</a></li>
              <li><a href="#team">Who develops GeoDa?</a></li>
              <li><a href="#users">How many people use GeoDa?</a></li>
              <li><a href="#fund">Who funds GeoDa?</a></li>
              <li><a href="#cite">GeoDa citations: How do I cite the use of GeoDa?</a></li>
              <li><a href="#support">Where to go for GeoDa-related support?</a></li>
              <li><a href="#bugs">I think I found a bug - Where do I report it?</a></li>
              <li><a href="#training">Where do I find out about GeoDa-related training?</a></li>
            </ul>

            <h2 id="geoda">What is GeoDa?</h2>
            <p>GeoDa is a free software program that acts as an introduction to spatial analysis, designed to implement techniques for <a href="./glossary#esda">ESDA</a> on lattice data (points and polygons). It is intended to provide a user friendly and graphical interface to methods of descriptive spatial data analysis, such as spatial autocorrelation statistics, as well as basic spatial regression functionality.</p>

            <h2 id="url">What websites are related to GeoDa?</h2>
            <p>GeoDa's home on Github is <a href="//geodacenter.github.io/">http://geodacenter.github.io/</a>. The Github pages for its sister programs GeoDaSpace and CAST can be accessed at <a href="https://github.com/GeoDaCenter" target="_blank" rel="noopener noreferrer">https://github.com/GeoDaCenter</a>. Additional information is available at its home institution, the University of Chicago's <a href="https://spatial.uchicago.edu" target="_blank" rel="noopener noreferrer">Center for Spatial Data Science</a>.</p>

            <h2 id="name">What does GeoDa stand for?</h2>
            <p>GeoDa stands for <i>Geographic Data Analysis (pronounced geo-dah)</i>.</p>

            <h2 id="phil">What is the philosophy behind GeoDa?</h2>
            <p>GeoDa is designed to implement specialized spatial analytic functionality like spatial autocorrelation test and spatial regression modeling. It is developed as a supplement rather than a substitute to existing <a href="./glossary#gis">geographic information systems (GIS)</a> and statistics programs. As a result, it only implements basic GIS functions. If needed, users can save results to analyze them further in statistical packages or in CartoDB.</p>

            <h2 id="dev">What are the current GeoDa-related developments?</h2>
            <p>We are currently working on <a href="https://spatial.uchicago.edu/geoda-web" target="_blank" rel="noopener noreferrer">GeoDa-Web</a>, a cyberGIS extension of GeoDa</p>

            <h2 id="not">What is GeoDa NOT designed to do?</h2>
            <p>GeoDa is not designed for geostatistical analysis with data of a continuous surface or for analysis of categorical data.</p>

            <h2 id="team">Who develops GeoDa?</h2>
            <p>GeoDa is developed by <a href="https://spatial.uchicago.edu/directory/luc-anselin-phd" target="_blank" rel="noopener noreferrer">Dr. Luc Anselin</a> and members of his team, <a href="https://spatial.uchicago.edu/directories/full/all" target="_blank" rel="noopener noreferrer">Dr. Xun Li and Dr. Julia Koschinsky</a>. As of July 2016, the GeoDa development moved from the GeoDa Center for Geospatial Analysis and Computation at Arizona State University to the <a href="https://spatial.uchicago.edu" target="_blank" rel="noopener noreferrer">Center for Spatial Data Science</a> at the <a href="http://www.uchicago.edu/" target="_blank" rel="noopener noreferrer">University of Chicago</a>.</p>

            <h2 id="users">How many people use GeoDa?</h2>
            <p>GeoDa's user numbers have increased exponentially from 3 users in 2003 to 40,000 in 2009 to over 160,000 in June 2016.</p>

            <h2 id="fund">Who funds GeoDa?</h2>
            <p>GeoDa has been funded by several federal research grants, including an initial spatial analysis infrastructure grant by the National Science Foundation and awards from the National Institutes of Health, the National Institute of Justice, and the Agency for Healthcare Research and Quality.</p>

            <h2 id="copyr">What are the key components of GeoDa's license agreement?</h2>
            <p>GeoDa uses a <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer">GPL license</a>, which ensures free and open-source access to the software. It restricts code modifications to non-commercial use.</p>

            <h2 id="cite">GeoDa citations: How do I cite the use of GeoDa?</h2>
            <p>You can cite GeoDa as:</p>
            <p>Anselin, Luc, Ibnu Syabri and Youngihn Kho (2006). GeoDa: An Introduction to Spatial Data Analysis. Geographical Analysis 38 (1), 5-22.</p>

            <h2 id="support">Where to go for GeoDa-related support?</h2>
            <p>GeoDa does not come with any support. However, the <a href="/support">Openspace listserv</a> provides a forum where users can post questions and answers. The listserv is monitored by the GeoDa development team. Archived messages can be searched.</p>

            <h2 id="bugs">I think I found a bug - Where do I report it?</h2>
            <p>Please <a href="mailto:spatial@uchicago.edu">email</a> us with the GeoDa version number and the steps you took that preceded the bug. If we can replicate the bug, we try to address it right away in a software update that can be installed in GeoDa through Help-Check Updates.</p>

            <h2 id="training">Where do I find out about GeoDa-related training?</h2>
            <p>No trainings are scheduled yet but we will announce upcoming trainings on the <a href="./support">Openspace list</a>, the website of the <a href="https://spatial.uchicago.edu" target="_blank" rel="noopener noreferrer">Center for Spatial Data Science</a>, and our <a href="https://twitter.com/GeodaCenter" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://www.facebook.com/geodacenter/" target="_blank" rel="noopener noreferrer">Facebook</a> pages. You can also sign up for updates <a href="https://spatial.uchicago.edu/get-updates-training-tutorials" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <h3>
              <a id="intro-contact" className="anchor" href="#intro-contact" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>Contact
            </h3>
            <p>Questions? Contact <a href="mailto:spatial@uchicago.edu">us</a>.</p>
          </div>
        </section>

        
      </main>
    </Layout>
  );
} 