import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Root from '../components/Root';
import siteCommon from '../data/siteCommon.json';
import { useLocalizedContent } from '../utils/contentLoader';

// Helper to replace all /glossary.html#... links with ./glossary#...
const fixGlossaryLinks = (html: string) =>
  html.replace(/href="\/glossary.html#/g, 'href="./glossary#');

export default function Glossary(): React.JSX.Element {
  return (
    <Root>
      <GlossaryContent />
    </Root>
  );
}

function GlossaryContent(): React.JSX.Element {
  const localizedSiteCommon = useLocalizedContent(siteCommon);

  return (
    <Layout
      title="Glossary - GeoDa"
      description="Glossary of Terms Used in GeoDa - An Introduction to Spatial Data Science"
    >
      <main>
        <Hero
          title={localizedSiteCommon.hero.title}
          tagline="Terms Used in GeoDa"
          buttons={localizedSiteCommon.hero.buttons}
        />
        <section className="main-content">
          <div
            style={{
              maxWidth: '64rem',
              padding: '2rem 6rem',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            <p>
              This glossary explains spatial analysis terms related to methods
              and tools that are implemented in GeoDa.
            </p>
            <h3>
              <a href="#a">A</a> <a href="#b">B</a> <a href="#c">C</a>{' '}
              <a href="#d">D</a> <a href="#e">E</a> <a href="#f">F</a>
              <a href="#g">G</a> <a href="#h">H</a> <a href="#i">I</a>{' '}
              <a href="#j">J</a> <a href="#k">K</a> <a href="#l">L</a>
              <a href="#m">M</a> <a href="#n">N</a> <a href="#o">O</a>{' '}
              <a href="#p">P</a> <a href="#q">Q</a> <a href="#r">R</a>
              <a href="#s">S</a> <a href="#t">T</a> <a href="#u">U</a>{' '}
              <a href="#v">V</a> <a href="#w">W</a> <a href="#x">X</a>
              <a href="#y">Y</a> <a href="#z">Z</a>
            </h3>
            <div id="terms">
              <h3>
                <a id="a">
                  <b>A</b>
                </a>
              </h3>
              <h3>
                <a>Autocorrelation</a>
              </h3>
              <p>
                See <a href="#sa">Spatial Autocorrelation</a>.
              </p>
              <h3>
                <a id="b">
                  <b>B</b>
                </a>
              </h3>
              <h3>
                <a>Base Variables</a>
              </h3>
              <p>
                See <a href="#event">Event and Base Variables</a>.
              </p>
              <h3>
                <a id="boxmap">Box Map</a>
              </h3>
              <p>
                Since box maps are based on the same methodology as{' '}
                <a href="#boxplot">box plots</a>, they can be used to detect
                <a href="#outliers">outliers</a> in a stricter sense than is
                possible with <a href="#pctmap">percentile maps</a>. Box maps
                group values such as counts or rates into six fixed categories:
                Four quartiles (1-25%, 25-50%, 50-75%, and 75-100%) plus two
                outlier categories at the low and high end of the distribution.
              </p>
              <p>
                Values are classified as outliers if they are 1. 5 times higher
                than the interquartile range (IQR). IQR is the difference
                between the 75th percentile (Q3) and the 25th percentile (Q1) or
                Q3-Q1. It describes the range of the middle of the distribution
                since 25% of values are above the interquartile range and 25%
                below it.
              </p>
              <h3>
                <a id="boxplot">Box Plot</a>
              </h3>
              <p>
                Box plots are particularly useful to identify outliers and gain
                an overview of the spread of a distribution.
              </p>
              <p>
                The box plot (sometimes referred to as box and whisker plot) is
                a non-parametric method. For normally distributed data, the
                median corresponds to the mean and the interquartile range to
                the standard deviation. The box plot shows the median, first and
                third quartile of a distribution (the 50%, 25% and 75% points in
                the cumulative distribution) as well as outliers. An observation
                is classified as an outlier when it lies more than a given
                multiple of the interquartile range (the difference in value
                between the 75% and 25% observation) above or below respectively
                the value for the 75th percentile and 25th percentile. The
                standard multiples used are 1.5 and 3 times the interquartile
                range.
              </p>
              <p>
                The red bar in the middle corresponds to the median, the dark
                part shows the interquartile range. The individual observations
                in the first and fourth quartile are shown as blue dots. The
                thin line is the hinge, corresponding to the default criterion
                of 1.5.
              </p>
              <p>
                The same observations identified as outliers in a box plot are
                shown as outliers in a <a href="#boxmap">box map</a>. GeoDa
                implements a box plot with a user-defined variable as well as
                one for the{' '}
                <a href="#lisa2">
                  local indicators of spatial association (LISA)
                </a>{' '}
                statistics.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="c">
                  <b>C</b>
                </a>
              </h3>
              <h3>
                <a id="cart">Cartogram</a>
              </h3>
              <p>
                In cartograms, the size of a variable&#39;s value corresponds to
                the size of a shape. GeoDa implements a univariate circular
                cartogram. The location of the circles is aligned as closely as
                possible to the location of the associated area through a
                nonlinear optimization routine (which can be improved through
                additional iterations in GeoDa). Cartograms are particularly
                useful in cases where small geographic areas have large values
                since these areas are highlighted in cartograms but visually
                hidden in regular maps.
              </p>
              <h3>
                <a id="centralpt">Central Point</a>
              </h3>
              <p>
                Although the menu options in GeoDa refer to{' '}
                <a href="#centroid">centroids</a>, they are actually central
                points. Central points are computed slightly differently from
                centroids: They are the average of the x and y coordinates of
                the polygon&#39;s <a href="#vertex">vertices</a>.
              </p>
              <h3>
                <a id="centroid">Centroid</a>
              </h3>
              <p>
                A centroid is the center of gravity of a geographic unit. It
                does not have to be located within the boundaries of the
                geographic unit (e.g., for irregularly shaped polygons). GeoDa
                currently uses <a href="#centralpt">central points</a> rather
                than centroids.
              </p>
              <h3>
                <a id="choro">Choropleth Map</a>
              </h3>
              <p>
                The term choropleth is derived from the Greek word for area or
                place (choro). A choropleth map classifies the frequency of
                values of a given variable for each area (usually in ascending
                order) using different color shades or patterns - it resembles a{' '}
                <a href="#hist">histogram</a> in space.
              </p>
              <p>
                Examples of choropleth maps in GeoDa are{' '}
                <a href="#qtmap">Quantile Maps</a>,{' '}
                <a href="#pctmap">Percentile Maps</a>,{' '}
                <a href="#boxmap">Box Maps</a>, and{' '}
                <a href="#stmap">Standard Deviation Maps</a>.
              </p>
              <h3>
                <a id="conplot">Conditional Plot &amp; Map</a>
              </h3>
              <p>
                Conditional plots (also referred to as Trellis graphs) are 3x3
                micromap (or microplot) matrices. They visualize multivariate
                relationships (three or four variables in two dimensions). They
                consist of nine smaller plots or maps of one continuous variable
                (two for the scatter plot option), conditioned on two other
                variables. The interval breaks of the two other variables can be
                controlled in GeoDa.
              </p>
              <p>
                This multivariate analysis might reveal interaction effects
                masked by univariate exploratory analysis (interaction effects
                exist when the distribution in a sub-view differs from the
                rest). By manipulating the handles in the conditional plots, you
                can analyze the sensitivity of the main variable to the
                conditioning variables.
              </p>
              <h3>
                <a id="contwghts">Contiguity Weights</a>
              </h3>
              <p>
                Contiguity-based weights are weights based on shared borders (or
                vertices) instead of distance. See <a href="#rook">rook</a> or{' '}
                <a href="#queen">queen</a> weights as examples.
              </p>
              <h3>
                <a id="corr">Correlation Plot</a>
              </h3>
              <p>
                A correlation plot is a standardized version of a{' '}
                <a href="#scatter">scatter plot</a>.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="d">
                  <b>D</b>
                </a>
              </h3>
              <h3>
                <a id="data">Data Format</a>
              </h3>

              <p>
                To work with GeoDa, your data have to have the following
                characteristics:
              </p>

              <ul>
                <li>Continuously (as opposed to categorically) distributed</li>
                <li>Contain no missing values</li>
                <li>
                  Refer to discrete areal units (as opposed to sample points).
                </li>
              </ul>

              <h3>
                <a id="dist">Distance-based Weights</a>
              </h3>
              <p>
                In contrast to <a href="#contwghts">contiguity-based weights</a>
                , which are based on common borders (and/or vertices),
                distance-based weights in GeoDa are based on the distance
                between points and have .gwt extensions. GeoDa implements two
                distance weights: Distance bands and{' '}
                <a href="#knn">k-nearest neighbors</a>.
              </p>
              <p>
                Distance bands are created by drawing a radius (of the defined
                minimum threshold distance) around each point and counting every
                point within the radius as a neighbor. The default threshold
                distance ensures that every observation has at least one
                neighbor. Inverse distance weighting is not yet implemented in
                GeoDa.
              </p>
              <p>
                <a id="arc"></a>Distance band weights include two distance
                choices: Euclidean distance should only be used if the map is
                projected while the option for Arc distance (which is
                approximate) is designed for coordinates in unprojected latitude
                and longitude.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="e">
                  <b>E</b>
                </a>
              </h3>
              <h3>
                <a id="ebsmooth">Empirical Bayes Smoothing</a>
              </h3>
              <p>
                In many applications, rates are used to estimate underlying risk
                (such as disease or crime). However, when raw rates are used to
                estimate this underlying risk, differences in population size
                result in variance instability and spurious outliers. Rate{' '}
                <a href="#smooth">smoothing</a> is one way to address this
                variance instability. Essentially, rates are smoothed and thus
                stabilized by borrowing strength from other spatial units.
              </p>
              <p>
                One of the rate smoothers implemented in GeoDa is Empirical
                Bayes (EB) smoothing. It is based on a raw rate for each areal
                unit that is averaged with a separately computed reference
                estimate based on the whole study region, such as the overall
                population mean.
              </p>
              <p>
                This smoother is called Empirical <i>Bayes</i> because it
                borrows strength from a <i>prior</i> distribution to correct for
                the variance instability associated with rates that have a small
                base. It is <i>empirical</i> because the prior distribution is
                based on global characteristics of the existing observations.
              </p>
              <h3>
                <a id="ebstand">Empirical Bayes Standardization</a>
              </h3>
              <p>
                While the Empirical Bayes (EB) smoother adjusts for variance
                instability through a weighted averaging of rates based on a
                reference rate, EB standardization directly standardizes raw
                rates to obtain a constant variance. While
                <a href="#smooth">smoothing</a> is based on weighting rates,
                standardization rescales rates. The original raw rate is
                replaced with a standardized rate with mean zero and standard
                deviation of one. GeoDa implements the EB standardization
                procedure suggested by <a href="refs.html">Assuncao and Reis</a>{' '}
                in its <a href="#gmoran">global Moran scatter plot</a> and{' '}
                <a href="#lisa2">LISA</a> maps.
              </p>
              <h3>
                <a id="esda">ESDA</a>
              </h3>
              <p>
                ESDA stands for <i>Exploratory Spatial Data Analysis</i>. It
                refers to a set of techniques to interactively visualize and
                explore data where space matters, in order to detect potentially
                interesting and explicable patterns. It can also be used to
                generate hypotheses and to visually assess model results and
                diagnostics (e.g., by visualizing patterns of residuals that
                were saved in the regression process). In addition, it is a
                useful tool for data quality control (e.g., using the weights
                histogram).
              </p>
              <p>
                At the core of ESDA techniques are measures of{' '}
                <a href="#sa">spatial autocorrelation</a>. Other techniques
                allow for the detection of <a href="#outliers">outliers</a>,
                spatial trends, and <a href="#regimes">spatial regimes</a>. ESDA
                is a data-driven approach that imposes little structure on the
                process of detecting interesting patterns (e.g., including
                clusters or outliers). ESDA is exploratory in the sense that it
                cannot explain the patterns it reveals.
              </p>
              <p>
                Spatial modeling is designed to explain spatial patterns. While
                ESDA can be used to generate hypotheses, spatial modeling is
                needed to test hypotheses. Most of GeoDa&#39;s functionality is
                based on ESDA. However, the program also implements OLS models
                with diagnostics for spatial dependence, as well as spatial lag
                models, and spatial error models (see{' '}
                <a href="#reg">spatial regression</a>).
              </p>
              <p>
                ESDA focuses on space-related data exploration, and as such, is
                a subset of the more general concept of Exploratory Data
                Analysis (EDA).
              </p>
              <h3>
                <a id="event">Event and Base variables</a>
              </h3>
              <p>
                For rates, the <i>Event</i> field refers to the numerator, the{' '}
                <i>Base</i> field to the denominator. The
                <i>Event</i> field can be thought of as a count field since it
                refers to variables such as counts, dollar values, or indices.
                In the <i>Base</i> field, the reference universe for the{' '}
                <i>Event</i> variable is chosen (it cannot contain any zero
                values). For instance, in the St. Louis homicide dataset, an{' '}
                <i>Event</i> variable is HC7984 (homicide count, 1979-84) while
                a <i>Base</i> variable is PO7984 (population total, 1979-84).
              </p>
              <h3>
                <a id="excess">Excess Risk Maps</a>
              </h3>
              <p>
                Excess risk maps visualize the extent to which the rate at a
                location exceeds or is below the average risk that would be
                observed at that location (also called standard mortality rates
                or SMR). This map requires <a href="#event">Event and Base</a>{' '}
                variables. These maps do not provide information about whether
                excess rates are statistically significant.
              </p>
              <p>
                Excess risk maps are based on ratios of actual to expected
                counts of events (or their difference). The expected counts of
                events are computed as the product of a proportion (e. g.,
                homicide counts/population at risk) and the average overall risk
                in the study region. The average risk in the study region is the
                ratio of all events (such as homicide counts) over the total
                population. Since excess risk maps only rescale the raw rate,
                only the magnitude, not the order of the original data change.
              </p>
              <p>
                Although excess risk maps are listed under the{' '}
                <a href="#smooth">smoothing</a> option, they are actually based
                on re-scaling, not smoothing.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="f">
                  <b>F</b>
                </a>
              </h3>
              <h3>
                <a id="field">Field</a>
              </h3>
              <p>
                <i>Field</i>, <i>column</i>, and <i>variable</i> are used
                synonymously.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="g">
                  <b>G</b>
                </a>
              </h3>
              <h3>
                <a id="geoda">GeoDa</a>
                <p>
                  GeoDa (short for <i>Geographic Data Analysis</i>, pronounced
                  geo-dah) is designed as an introduction to spatial data
                  analysis. Frequently Asked Questions about GeoDa are addressed{' '}
                  <a href="./faq">here</a>.
                </p>
              </h3>

              <h3>
                <a id="gis">Geographic Information System</a>
              </h3>
              <p>
                Geographic Information Systems (GIS) add intelligence to maps by
                essentially integrating electronic mapping and database
                functionality. Beyond this core data management functionality, a
                GIS typically contains geographic data collection and input,
                analysis and output functions. In an even broader definition,
                geographically referenced information systems also refer to
                systems including personnel, institutions, and decisionmaking.
              </p>
              <p>
                GeoDa is designed as a supplement to existing GIS functionality,
                not as a substitute. For instance, GIS-related operations that
                are <b>not</b> implemented within GeoDa include map projections,
                merging/aggregating data/shape files, dissolving shape files,
                and otherwise changing shape files.
              </p>
              <p>
                If you do not have access to a GIS and need to change your
                shapefile, you can edit the coordinates of your shape file in
                text format before importing it or after exporting it but this
                process is more cumbersome.
              </p>
              <h3>
                <a>GIS</a>
              </h3>
              <p>
                See <a href="#gis">Geographic Information System</a>.
              </p>
              <h3>
                <a>Global Moran&#39;s I</a>
              </h3>
              <p>
                See <a href="#gmoran">Moran Scatter Plot</a>.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="h">
                  <b>H</b>
                </a>
              </h3>
              <h3>
                <a id="hist">Histogram</a>
              </h3>
              <p>
                A histogram sorts the values of a variable in ascending order
                and assigns them to bins that correspond to histogram bars.
                GeoDa implements a regular histogram and a connectivity
                histogram (to display the characteristics of weights matrices).
                Histograms are connected to other windows through linking. Their
                interval (bin) categories can be adjusted.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="i">
                  <b>I</b>
                </a>
              </h3>
              <h3>
                <a id="j">
                  <b>J</b>
                </a>
              </h3>

              <p>&nbsp;</p>
              <h3>
                <a id="k">
                  <b>K</b>
                </a>
              </h3>
              <h3>
                <a id="knn">K Nearest Neighbors</a>
              </h3>
              <p>
                K Nearest Neighbors (KNN) is a distance-based definition of
                neighbors where &quot;k&quot; refers to the number of neighbors
                of a location. It is computed as the distance between a point
                and the number (k) of nearest neighbor points (i.e. the distance
                between the <a href="#centralpt">central points</a> of
                polygons). It is often applied when areas (such as counties)
                have different sizes to ensure that every location has the same
                number of neighbors, independently how large the neighboring
                areas are.
              </p>

              <p>
                <a id="crash"></a>
              </p>
              <p>
                K Nearest Neighbors weights matrices can be created in GeoDa.
                They are asymmetric (e.g., point A is B&#39;s nearest neighbor
                but point B does not have to be point A&#39;s nearest neighbor).
                Because of this asymmetry, it is not possible to correctly
                estimate spatial lag or error models with KNN weights and
                Maximum Likelihood Estimators in GeoDa However, you can do this
                with other spatial estimators and KNN weights in{' '}
                <a href="GeoDaSpace">GeoDaSpace</a>.
              </p>

              <p>&nbsp;</p>
              <h3>
                <a id="l">
                  <b>L</b>
                </a>
              </h3>
              <h3>
                <a id="lattice">Lattice Data</a>
              </h3>
              <p>
                Lattice data refers to point or polygon data that represent
                discrete areal units (such as counties), i.e. areas where there
                is no uncertainty as to their location, as opposed to events or
                sample points whose location is not certain. For more details,
                see{' '}
                <a href="https://spatial.uchicago.edu/spatial-analysis-references">
                  Bailey &amp; Gatrell (introductory) or Cressie (1991)
                </a>{' '}
                (advanced).
              </p>
              <h3>
                <a id="layer">Layer</a>
              </h3>
              <p>
                When more than one <a href="#shape">shape file</a> is loaded in
                GeoDa or in a <a href="#gis">GIS</a>, the shape file is referred
                to as a layer. Layers share the same (or part of the same)
                geographic extent and display different characteristics of this
                geography, such as census tracts (polygons), businesses
                (points), and streets (lines) in the same city.
              </p>

              <h3>
                <a id="legend">Legend</a>
              </h3>
              <p>
                A legend provides information about the colors and symbols used
                in a view (such as a map or histogram). In GeoDa, the map legend
                consists of the color category, the category description, and
                the number of observations in each category (in parentheses).
                The number of categories is hard coded (i.e. it cannot be
                changed) for some maps (e.g.,
                <a href="#stmap">standard deviation map</a>,{' '}
                <a href="#excess">excess risk map</a>,{' '}
                <a href="#pctmap">percentile map</a>, or{' '}
                <a href="#boxmap">box map</a>).
              </p>
              <p>
                The legend colors can be changed by double-clicking on them
                (note that the default colors are based on{' '}
                <a href="http://www.colorbrewer.org/">
                  Cindy Brewer&#39;s Color Brewer
                </a>{' '}
                research). The legend can be made more or less visible by moving
                the divider between the map and the legend.
              </p>
              <h3>
                <a id="link">Linking &amp; Brushing</a>
              </h3>
              <p>
                Linking and brushing is part of the core functionality of
                interactive{' '}
                <a href="#esda">exploratory spatial data analysis</a>. When
                views of data (such as box plots, maps, or histograms) are
                dynamically linked, the selection of observations in one view
                results in the selection of the same observations in all other
                open views.
              </p>
              <p>
                Brushing is a dynamic form of linking. By creating a moving
                window that is brushed across observations, the observations
                within the window are selected on the fly across all views. The{' '}
                <a href="#gmoran">Moran scatter plot</a> and bivariate scatter
                plot can be brushed in a way that results in the recomputation
                of the regression slope excluding the selected observations.
                Brushing does not work for histograms.
              </p>
              <p>
                The <b>Window</b> menu contains a <b>Linking ON/OFF</b> option.
                However, this option is not yet activated, which means that
                linking is on by default and cannot yet be turned off.
              </p>
              <h3>
                <a id="lisa2">LISA</a>
              </h3>
              <p>
                See{' '}
                <a href="#lisa2">Local Indicators of Spatial Association.</a>
              </p>
              <h3>
                <a>Local Indicators of Spatial Association (LISA)</a>
              </h3>
              <p>
                Local Indicators of Spatial Association (LISA) indicate the
                presence or absence of significant spatial clusters or outliers
                for each location. A <a href="#random">Randomization</a>{' '}
                approach is used to generate a spatially random reference
                distribution to assess statistical significance. The Local Moran
                statistic implemented in GeoDa is a special case of a LISA. The
                average of the Local Moran statistics is proportional to the
                Global Moran&#39;s I value.
              </p>
              <p>
                LISA maps are particularly useful to assess the hypothesis of
                spatial randomness and to identify local hot spots. However,
                since LISA maps are univariate, they may mask multivariate
                associations, variability related to scale mismatch, and other{' '}
                <a href="#het">spatial heterogeneity</a>.
              </p>
              <p>
                For rates, the option of computing LISAs with{' '}
                <a href="#ebstand">EB standardization</a> is available in GeoDa.
              </p>
              <h3>
                <a id="localm">Local Moran</a>
              </h3>
              <p>
                Local Moran&#39;s I is a local test statistic for spatial
                autocorrelation. See{' '}
                <a href="#lisa2">
                  Local Indicators of Spatial Association (LISA)
                </a>{' '}
                for details.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="m">
                  <b>M</b>
                </a>
              </h3>
              <h3>
                <a id="movie">Map Movie</a>
              </h3>
              <p>
                A map movie highlights observations sequentially from the lowest
                to the highest value of a variable. GeoDa implements a
                cumulative and single (one-by-one) version. The purpose of the
                map movie is to visually explore whether a geographic pattern
                (e.g., from the periphery to the core) can be detected that
                corresponds to the sequencing from low to high values. Since the
                observations highlighted in the map movie are also selected in
                the other open views, one can interactively explore the
                relationship with other variables and other forms of
                representing the data.
              </p>

              <h3>
                <a id="join">Merge</a>
              </h3>
              <p>
                In GeoDa, merging refers to merging data to a table. For
                instance, if you only have data with geographic identifiers
                (e.g., county names) but no associated{' '}
                <a href="#shape">shape file</a>, you can try to find the shape
                file, open it in GeoDa and join your data to the shape
                file&#39;s table through a unique ID.
              </p>

              <h3>
                <a id="moransi">Moran&#39;s I</a>
              </h3>
              <p>
                Moran&#39;s I is a test statistic for spatial autocorrelation.
                See <a href="#gmoran">Moran scatter plot</a>.
              </p>
              <h3>
                <a id="gmoran">Moran Scatter Plot</a>
              </h3>
              <p>
                The Moran scatter plot visualizes the type and strength of{' '}
                <a href="#sa">spatial autocorrelation</a> in a data
                distribution. It provides a statistic (Moran?s I) to determine
                the extent of linear association between the values in a given
                location (x-axis) with values of the same variable in
                neighboring locations (y-axis).
              </p>
              <p>
                To compare a location?s values with its neighboring values, the
                Moran scatter plot regresses a{' '}
                <a href="#lag">spatially lagged</a> transformation of a variable
                (y-axis) on the original standardized variable (x-axis). The
                values of X are standardized in standard deviation units with a
                mean of zero and a variance of one (values above 2 are potential{' '}
                <a href="#outliers">outliers</a>).
              </p>
              <p>
                The slope of the scatter plot corresponds to the value for
                Moran&#39;s I. It is a measure of global spatial autocorrelation
                or overall clustering in a dataset. The four quadrants of the
                scatter plot describe an observation&#39;s value in relation to
                its neighbors; starting with the x-axis, followed by y:
                High-high, low-low (positive spatial autocorrelation) and
                high-low, low-high (negative spatial autocorrelation). These
                quadrants correspond to the clusters and spatial outliers in the{' '}
                <a href="#lisa2">LISA</a> maps - however, the LISA maps also
                provide information about which clusters/outliers are
                statistically significant compared to spatial randomness. The
                average of all Local Moran indices is proportional to the global
                Moran&#39;s I.
              </p>
              <p>
                The <a href="#ppvalue">pseudo statistical significance</a> of
                the observed global Moran&#39;s I is established by comparing it
                to a reference distribution of Moran&#39;s I values generated
                under conditions of spatial randomness (see{' '}
                <a href="#random">Randomization</a> and{' '}
                <a href="#perm">Permutations</a>).
              </p>
              <p>
                Since the Moran scatter plot is dependent on the{' '}
                <a href="#wghts">weights</a> file used, only those scatter plots
                should be compared that use the same weights file.
              </p>
              <p>
                In a bivariate Moran scatter plot, y and x are different
                variables. The neighboring values of one variable (y) are
                regressed on the values of another variable (x). In contrast to
                the univariate Moran scatter plot, the axes can be reversed in
                the bivariate scatter plot: In this case, the standardized
                version of one variable (y) can be regressed on the lag of
                another variable (x).
              </p>
              <p>
                For rates, the option of computing global Moran&#39;s I with{' '}
                <a href="#ebstand">EB standardization</a> is available in GeoDa.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="n">
                  <b>N</b>
                </a>
              </h3>
              <h3>
                <a>Neighbors</a>
              </h3>
              <p>
                See <a href="#wghts">Weights matrix</a>.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="o">
                  <b>O</b>
                </a>
              </h3>
              <h3>
                <a id="outliers">Outlier</a>
              </h3>
              <p>
                An observation is referred to as an outlier if its value is more
                extreme than those of the distribution it is part of. GeoDa
                provides non-parametric tools to detect outliers (i.e., for
                instance, without assuming normality), such as{' '}
                <a href="#boxplot">box plots</a> and{' '}
                <a href="#boxmap">box maps</a>, and parametric tools such as
                standard deviation maps. Outliers can point to the possible
                existence of a structural break in the data, which is
                characteristic of <a href="#regimes">spatial regimes</a>.
              </p>
              <p>
                In box plots and box maps, the criterion for what counts as an
                outlier can be set lower (at a hinge level of 1.5) or stricter
                (at a hinge level of 3). <a href="#pctmap">Percentile Maps</a>{' '}
                are an informal way of visualizing extreme values - however,
                since these extreme values are only based on data sorting, they
                are not necessarily outliers in a strict sense.
              </p>
              <p>
                By activating the <b>Exclude Selected</b> option before{' '}
                <a href="#link">linking and brushing</a> of regular and global
                Moran scatter plots, the leverage of outliers can be informally
                assessed.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="p">
                  <b>P</b>
                </a>
              </h3>
              <h3>
                <a id="pcp">Parallel Coordinate Plot</a>
              </h3>
              <p>
                Like the <a href="#conplot">Conditional Plot</a>, the Parallel
                Coordinate Plot is a tool for multivariate analysis. It is a
                tool to explore whether or not clusters in multivariate space
                match those in geographic space.
              </p>
              <p>
                The values of each selected variable (a minimum of two) are
                standardized and drawn on parallel x-axes from the lowest to the
                highest value. The value of each observation for a variable
                connects to the respective value of another variable of the same
                observation. As a result, a pattern of lines is drawn that
                connects the coordinates of each observation across the
                variables on parallel x-axes.
              </p>
              <h3>
                <a id="pctmap">Percentile Map</a>
              </h3>
              <p>
                Percentile maps highlight extreme values, i.e., observations
                that are in the bottom and top 1% of a data distribution. These
                maps group a ranked distribution into six fixed categories:
                0-1%, 1-10%, 10-50%, 50-90%, 90-99%, and 99-100%.
              </p>
              <p>
                The lowest and highest 1% are potentially outliers since they
                represent the extremes of the distribution. However, since
                percentile maps are based on a simple ranking of the data, these
                observations are not necessarily outliers in a statistical sense
                (<a href="#boxmap">box maps</a> are the only appropriate tool in
                this context).
              </p>
              <h3>
                <a id="perm">Permutations</a>
              </h3>
              <p>
                Permutations are part of a numerical approach to testing for
                statistical significance (in contrast to analytical approaches).
                The advantage of a numerical approach is that it is data-driven
                and makes no assumptions (such as normality) about the data. The
                disadvantage is that its p-values are dependent on the number of
                permutations (see
                <a href="#ppvalue">pseudo p-values</a>).
              </p>
              <p>
                Permutations are used in the context of{' '}
                <a href="#gmoran">global</a> and <a href="#lisa2">local</a>{' '}
                Moran&#39;s I values to determine how likely it would be to
                observe the Moran&#39;s I value of an actual distribution under
                conditions of spatial randomness. Each observation is assigned a
                vector of randomly generated numbers, which is used to randomly
                relocate each observation in space. To generate a random
                reference distribution of Moran&#39;s I, the statistic is
                computed each time with a different set of random numbers (i.e.,
                based on a different random seed) for the number of permutations
                specified (99 up to 9,999). The results are therefore not
                exactly replicable.
              </p>
              <p>
                You can then compare this reference distribution to your
                observed Moran&#39;s I value to determine where it falls in
                comparison. After choosing the number of permutations, GeoDa
                generates a histogram of Moran&#39;s I values compared to the
                observed Moran&#39;s I.
              </p>
              <p>
                See also <a href="#random">Randomization</a>.
              </p>
              <h3>
                <a id="error">Prediction Error</a>
              </h3>
              <p>
                GeoDa&#39;s <a href="#reg">spatial regression</a> function
                provides the option to save predicted values, prediction errors,
                and residuals. Prediction errors are defined differently in
                spatial lag and spatial error models. In spatial lag models,
                they represent the difference between the observed and the
                predicted value, excluding the <a href="#lag">spatial lag</a>{' '}
                Wy. In spatial error models, they represent the difference
                between the observed and predicted dependent variable. For
                spatial error models, residuals are spatially filtered.
              </p>

              <h3>
                <a id="project">Project</a>
              </h3>
              <p>
                A project file allows the user to save the particular
                configurations applied to one or more{' '}
                <a href="#shape">shape files</a> in order to return to the same
                set up later. In GeoDa, you can only load one shape file per
                project. You cannot save your project separately from your shape
                file as you can in some{' '}
                <a href="#gis">Geographic Information Systems</a>. The only way
                to capture multiple views in GeoDa is through screenshots.
              </p>

              <h3>
                <a id="projection">Projection</a>
              </h3>
              <p>
                Projections are used to convert the spherical surface of the
                earth to a map&#39;s flat surface. Different projections involve
                different trade-offs regarding shape, area, scale, distance, and
                direction.
              </p>
              <p>
                Since GeoDa does not contain any projection tools shape files
                need to be projected outside of GeoDa.
              </p>
              <h3>
                <a id="ppvalue">Pseudo P-Values</a>
              </h3>
              <p>
                GeoDa&#39;s <a href="#perm">permutation</a> tests (for global
                and local <a href="#sa">spatial autocorrelation</a>) are based
                on pseudo significance levels since the significance levels are
                dependent on the number of permutations.
              </p>
              <p>
                The pseudo significance is computed as (M + 1) / (R + 1) where R
                is the number of replications and M is the number of instances
                where a statistic computed from the permutations is equal to or
                greater than the observed value (for positive local Moran) or
                less or equal to the observed value (for negative local Moran).
                For instance, if an observed Moran&#39;s I value is higher than
                any of the randomly generated Moran&#39;s I values, the pseudo
                p-value would be 1/100=0.01 for 99 permutations or 1/1,000=0.001
                for 999 permutations. Therefore, GeoDa uses one-sided
                significance tests.
              </p>
              <p>
                See also <a href="#random">Randomization</a>.
              </p>

              <p>&nbsp;</p>
              <h3>
                <a id="q">
                  <b>Q</b>
                </a>
              </h3>
              <h3>
                <a id="qtmap">Quantile Map</a>
              </h3>
              <p>
                A quantile map displays a distribution of values in categories
                with an equal number of observations. It assigns the same (or
                close to the same) number of values to each of the specified
                number of quantiles in the map. For instance, in a quartile map
                (= 4 categories) with 100 observations, the values of a variable
                are assigned to four categories so that each category contains
                25 observations (the number of observations is displayed in the
                legend). The internal distance between values within each
                category is not observable in quantile maps.
              </p>
              <p>
                In GeoDa, the maximum number of categories in a quantile map is
                nine categories.
              </p>
              <h3>
                <a id="queen">Queen Weights Matrix</a>
              </h3>
              <p>
                A queen weights matrix defines a location&#39;s neighbors as
                those with either a shared border or{' '}
                <a href="#vertex">vertex</a> (in contrast to a{' '}
                <a href="#rook">rook weights matrix</a>, which only includes
                shared borders). Queen matrices are contiguity-based matrices
                with .gal extensions in GeoDa (as opposed to{' '}
                <a href="#distwgts">distance-based weights</a>).
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="r">
                  <b>R</b>
                </a>
              </h3>
              <h3>
                <a id="random">Randomization</a>
              </h3>
              <p>
                In GeoDa, the term randomization does not refer to an analytical
                inference approach based on a uniform distribution. Instead, it
                is used in the context of a numeric{' '}
                <a href="#perm">permutation</a> approach to describe the
                computation of <a href="#ppvalue">pseudo significance levels</a>{' '}
                for <a href="#gmoran">global</a> and <a href="#lisa2">local</a>{' '}
                <a href="#sa">spatial autocorrelation</a> statistics. To
                determine how likely it would be to observe the actual spatial
                distribution at hand, the actual values are randomly reshuffled
                over space at a given number of permutations (specified by the
                user).
              </p>
              <p>
                Specifically, for each permutation, GeoDa assigns a vector of
                random numbers (of length N) to each location in a dataset to
                compute a value for Moran&#39;s I. The resulting reference
                distribution of global or local Moran&#39;s I value is then
                compared to the observed Moran&#39;s I to determine the
                probability that the observed value could be derived from a
                random distribution. The initial LISA maps are based on 99
                permutations and a pseudo-significance level of p=0.05.
              </p>
              <h3>
                <a id="raw">Raw Rate</a>
              </h3>
              <p>
                The raw rate is the same as the rate or the percentage. It
                consists of an{' '}
                <a href="#event">
                  event (numerator) and base (denominator) variable.
                </a>
              </p>
              <h3>
                <a>Regression</a>
              </h3>
              <p>
                See <a href="#reg">Spatial Regression</a>
              </p>
              <h3>
                <a id="rook">Rook Weights Matrix</a>
              </h3>
              <p>
                A rook weights matrix defines a location&#39;s neighbors as
                those areas with shared borders (in contrast to a{' '}
                <a href="#queen">queen weights matrix</a>, which also includes
                the <a href="#vertex">vertices</a>). For instance, on a regular
                grid, neighbors according to the rook criterion would be cells
                to the North-South and West-East of a cell but not the
                Northwest, Southeast, etc. Rook matrices are contiguity-based
                matrices with .gal extensions in GeoDa (as opposed to{' '}
                <a href="#distwgts">distance-based weights</a>).
              </p>
              <h3>
                <a id="row">Row-Standardization</a>
              </h3>
              <p>
                A weights matrix is row-standardized when the values of each of
                its rows sum to one. By convention, the location at the center
                of its neighbors is not included in the definition of neighbors
                and is therefore set to zero.
              </p>
              <p>
                One of the advantages of using row-standardized weights is that
                it becomes easier to compare model coefficients for binary
                weights. The results in GeoDa&#39;s <a href="#gmoran">global</a>{' '}
                and <a href="#lisa2">local</a>
                measures of <a href="#sa">spatial autocorrelation</a>, its{' '}
                <a href="#lag">spatial lag</a>, and its{' '}
                <a href="#reg">spatial regressions</a> are based on
                row-standardized weights.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="s">
                  <b>S</b>
                </a>
              </h3>
              <h3>
                <a id="scatter">Scatter Plot</a>
              </h3>
              <p>
                A scatter plot plots the values of the variables on the x- and
                y-axis for each observation. The slope of the regression line
                (i.e., the beta coefficient) is found by minimizing the sum of
                squared prediction errors. When the values of the scatter plot
                variables are standardized in a correlation plot, the slope
                represents the bivariate correlation coefficient.
              </p>
              <p>
                GeoDa implements a regular scatter plot and a{' '}
                <a href="#gmoran">Moran scatter plot</a>. Both of these scatter
                plots can be brushed to assess the changes on the slope by
                excluding selected observations.
              </p>
              <p>
                In addition, a 3D scatter plot is available in GeoDa. It is a
                tool to explore possible clustering in multivariate 3D space and
                compare the patterns in 3D to those in geographic space through{' '}
                <a href="#link">linking and brushing</a>. Finally, a{' '}
                <a href="#conplot">conditional plot</a> with nine micro scatter
                plots is available.
              </p>
              <h3>
                <a id="shape">Shape File</a>
              </h3>
              <p>
                A map is stored in a shape file format, consisting of at least
                three files with information on the map boundary (.shp), the
                associated data (.dbf), and a file connecting the two (.shx).
                Since GeoDa reads shape files in{' '}
                <a href="http://www.esri.com/">ESRI</a> format, files in other
                formats need to be converted. Alternatively, shape files can be
                created within GeoDa using different{' '}
                <a href="#input">input formats</a>.
              </p>
              <h3>
                <a id="smooth">Smoothing</a>
              </h3>
              <p>
                Smoothing methods estimate the underlying, unobservable risk or
                probability that an event (e.g., cancer or crime) occurs.
              </p>
              <p>
                Rate smoothing is a procedure to address the variance
                instability related to estimating rates in areas with widely
                varying populations. Variance instability is particularly
                pertinent in areas with small population numbers. Raw rates and
                smoothed rates will differ less as underlying population numbers
                in areas increase. Smoothing increases the precision of risk
                estimates: The larger the standard error associated with a raw
                rate, the more the rate will be adjusted by smoothing. Smoothed
                rate maps are based on more stable estimates of underlying risk
                than raw rate maps since they incorporate additional
                information. One of the assumptions in GeoDa&#39;s smoothers is
                that there are no directional effects.
              </p>
              <p>
                GeoDa implements <a href="#ebsmooth">Empirical Bayes</a> (EB),{' '}
                <a href="#sebsmooth">Spatial Empirical Bayes</a>, and{' '}
                <a href="#srsmooth">Spatial Rate</a> (SR) smoothing. Which
                smoothing method is more appropriate depends on the research
                project. To determine how stable{' '}
                <a href="#outliers">outliers</a> are, a map of raw rates (e.g.,
                a <a href="#pctmap">percentile map</a>) can be compared with
                maps with EB smoothed rates and SR smoothed rates. If outliers
                remain the same across both smoothed maps, the results are more
                stable than if the outliers vary depending on what smoothing
                technique is chosen.
              </p>
              <p>
                Advantages of smoothing include the removal of spurious outliers
                and the highlighting of overall patterns beyond particular high
                and lows values. Smoothing-related disadvantages include the
                fact that results are rather sensitive to the particular
                smoother that is chosen and oversmoothing hides interesting
                extreme cases. Sensitivity analysis of various smoothers is
                useful to gain a better understanding of how results change
                based on different smoothers.
              </p>
              <p>
                An alternative way of estimating underlying risk is model-based
                smoothing, which directly models the underlying
                <a href="#het">spatial heterogeneity</a>, e.g. through{' '}
                <a href="#reg">spatial regression analysis</a>.
              </p>
              <h3>
                <a id="sa">Spatial Autocorrelation</a>
              </h3>
              <p>
                Spatial autocorrelation (SA) refers to the correlation of a
                variable with itself in space. It can be positive (spatial
                clusters for high-high or low-low values) and negative (spatial
                outliers for high-low or low-high values). Positive spatial
                autocorrelation exists when high values correlate with high
                neighboring values or when low values correlate with low
                neighboring values (note that positive spatial autocorrelation
                can be associated with a small negative value (e.g., -0.01)
                since the mean in finite samples is not centered on 1). Positive
                spatial autocorrelation operationalizes{' '}
                <a href="#tobler">Tobler&#39;s First Law of Geography</a>{' '}
                whereby closer areas are more similar in value than distant
                ones. Negative spatial autocorrelation exists when high values
                correlate with low neighboring values and vice versa.
              </p>
              <p>
                The presence of positive spatial autocorrelation results in a
                loss of information, which is related to greater uncertainty,
                less precision, and larger standard errors. Spatial
                autocorrelation can be exploited through data compression or
                spatial sampling. Spatial autocorrelation coefficients (in
                contrast to their counterparts in time) are not constrained by
                -1/+1. Their range depends on the choice of the weights matrix.
                The meaning of spatial autocorrelation differs by data type
                (e.g., point versus lattice data).
              </p>
              <p>
                <a href="#gmoran">Global spatial autocorrelation</a>, measured
                by Moran&#39;s I in GeoDa, captures the extent of overall
                clustering that exists in a dataset.{' '}
                <a href="#lisa2">Local spatial autocorrelation</a> indicates the
                location of local clusters and spatial outliers. GeoDa provides{' '}
                <a href="#ppvalue">pseudo-significance levels</a>
                for both global and local spatial autocorrelation by comparing
                the observed spatial distributions to spatially randomized
                reference distributions.
              </p>
              <h3>
                <a id="space">Spatial Data Analysis</a>
              </h3>
              <p>
                Spatial data analysis differs from non-spatial data analysis in
                that the location of an observation impacts the result. The
                spatial analysis toolbox contains tools for data visualization,{' '}
                <a href="#esda">Exploratory Spatial Data Analysis</a>, and
                spatial econometrics. The latter two tools (e.g., including{' '}
                <a href="#sa">spatial autocorrelation</a> tools) go beyond
                visualizing the results on a map by adding statistical
                hypothesis tests and
                <a href="#reg">spatial regression</a> modeling.
              </p>
              <p>
                Space does not have to be defined geographically but can also
                refer to variable space, policy space, and other notions of
                space (e.g., perceptual distances compared to actual distances).
                The concept of space can be operationalized through a{' '}
                <a href="#wghts">weights matrix</a>, which contains information
                about the neighborhood or connectivity structure in a dataset.
              </p>
              <h3>
                <a id="dep">Spatial Dependence</a>
              </h3>
              <p>
                Spatial dependence exists when the value associated with one
                location is dependent on those of other locations. The effect of
                this similarity of values and locations is a loss of
                information. Spatial dependence can result from spatial
                interaction effects (e.g., externalities or spill-over effects)
                or from measurement error (e.g. related to a mismatch between
                the scale at which a phenomenon occurs and how it is measured).
                Because it can be challenging to distinguish whether a location
                is impacted by its neighboring values or is just different, it
                can be difficult to separate spatial dependence from{' '}
                <a href="#het">spatial heterogeneity</a>.
              </p>
              <p>
                Spatial dependence is a property of joint multivariate density
                functions while <a href="#sa">spatial autocorrelation</a> is a
                moment or characteristic of these functions. Only the latter can
                be estimated in practice.
              </p>
              <h3>
                <a id="sebsmooth">Spatial Empirical Bayes Smoothing</a>
              </h3>
              <p>
                Spatial Empirical Bayes (EB) Smoothing differs from{' '}
                <a href="#ebsmooth">Empirical Bayes Smoothing</a> only in that
                the <i>prior</i> distribution that strength is borrowed from to
                correct for variance instability is localized as opposed to
                global (i.e., based on all observations). The extent of the
                localized prior is defined through the weights matrix. In
                contrast to a constant mean and variance (as in the regular EB
                case), the spatial EB smoother is based on a locally varying
                reference mean and variance.
              </p>
              <h3>
                <a id="het">Spatial Heterogeneity</a>
              </h3>
              <p>
                Spatial heterogeneity exists when structural changes related to
                location exist in a dataset. In such cases,{' '}
                <a href="#regimes">spatial regimes</a> might be present, which
                are characterized by differing parameter values or functional
                forms (e.g., crime in certain regions might be structurally
                different from crime in other regions). Spatial heterogeneity
                can result in non-constant error variance (heteroskedasticity)
                across areas, especially when scale-related measurement errors
                are present. It can be difficult to distinguish from{' '}
                <a href="#dep">spatial dependence</a>.
              </p>
              <h3>
                <a id="lag">Spatial Lag</a>
              </h3>
              <p>
                A spatial lag is a variable that essentially averages the
                neighboring values of a location (the value of each neighboring
                location is multiplied by the spatial weight and then the
                products are summed). It can be used to compare the neighboring
                values with those of the location itself. Which locations are
                defined as neighbors in this process is specified through a
                row-standardized spatial weights matrix in GeoDa. By convention,
                the location at the center of its neighbors is not included in
                the definition of neighbors and is therefore set to zero.
              </p>
              <p>
                Spatial lags are used in the computation of global and local
                Moran&#39;s I, as well as in spatial lag (Wy) and spatial error
                models (We). They can also be computed as separate variables
                (e.g., WX) in GeoDa.
              </p>
              <h3>
                <a id="srsmooth">Spatial Rate Smoothing</a>
              </h3>
              <p>
                Spatial Rate (SR) <a href="#smooth">smoothing</a> is based on a
                smaller (or more regional) reference area similar to a spatial
                moving average or window average. Instead of computing rates for
                each areal unit first and then weighting it by a reference
                estimate, Spatial Rate smoothing is based on raw rates for each
                areal unit that are computed in combination with their reference
                neighbors. It can be useful to identify{' '}
                <a href="#regimes">spatial regimes</a>. The fewer the number of
                neighbors that are part of the reference distribution, the more
                spikes are in the resulting map; the more neighbors, the
                smoother the outcome.
              </p>
              <h3>
                <a id="regimes">Spatial Regimes</a>
              </h3>
              <p>
                Spatial regimes are a form of{' '}
                <a href="#het">spatial heterogeneity</a>, which implies
                structural differences across space. When a variable is
                characterized by distinct distributions (e.g., with a different
                mean or variance) for different geographic subregions, these
                subregions might point to the existence of spatial regimes. When
                a subset of observations is clustered in the tails of the
                distribution (e.g., two standard deviations beyond the mean),
                this can also be an indicator for possible spatial regimes.
              </p>
              <p>
                In GeoDa, <a href="#link">linking and/or brushing</a> (e.g., of
                maps and histograms) can be used to visually explore the
                possible existence of spatial regimes.
              </p>
              <h3>
                <a id="reg">Spatial Regression</a>
              </h3>
              <p>
                Spatial regression models are statistical models that account
                for the presence of spatial effects, i.e.,{' '}
                <a href="#sa">spatial autocorrelation</a> (or more generally{' '}
                <a href="#dep">spatial dependence</a>) and/or{' '}
                <a href="#het">spatial heterogeneity</a>. In GeoDa, the user can
                run Ordinary Least Squares models (with a weights matrix
                specification) to obtain spatial diagnostics. The program
                implements maximum likelihood methods to estimate a model with a
                spatially lagged dependent variable (spatial lag model) and a
                spatial autoregressive process for the error term (spatial error
                model).
              </p>

              <h3>
                <a id="stmap">Standard Deviational Map</a>
              </h3>
              <p>
                A standard deviational map highlights differences in
                standardized values from the mean. GeoDa&#39;s standard
                deviational map displays the data in 7 categories: The mean, and
                three standard deviational units above and below the mean. The
                standard deviational map is the parametric counterpart to the{' '}
                <a href="#boxmap">box map</a>.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="t">
                  <b>T</b>
                </a>
              </h3>
              <h3>
                <a id="thiessen">Thiessen Polygons</a>
              </h3>
              <p>
                Thiessen polygons (also called Voronoi polygons or Dirichlet
                tesselation) are included in GeoDa to allow users to convert
                point <a href="#shape">shape files</a> to polygons. Each point
                is assigned an area whose boundaries are defined by the median
                distance between itself and its nearest neighbors. In more
                technical terms, Thiessen polygons are based on the
                perpendicular bisectors of the lines between all points. The
                value of the point is assigned to the polygon surrounding the
                point.
              </p>
              <h3>
                <a id="tobler">Tobler&#39;s First Law of Geography</a>
              </h3>
              <p>
                According to Tobler&#39;s First Law of Geography,
                &quot;everything is related to everything else, but near things
                are more related than distant things.&quot; This law is
                operationalized through the concept and tools of{' '}
                <a href="#sa">spatial autocorrelation</a>.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="u">
                  <b>U</b>
                </a>
              </h3>

              <p>&nbsp;</p>
              <h3>
                <a id="v">
                  <b>V</b>
                </a>
              </h3>
              <h3>
                <a id="vertex">Vertex</a>
              </h3>
              <p>
                Vertices are the nodal points that define the boundary corners
                of a polygon. At each vertex, the direction of the polygon
                boundary line changes. Vertex points are defined by{' '}
                <a href="#xy">x-y coordinates</a>. Vertices are e.g. relevant in
                distinguishing <a href="#rook">rook</a> from{' '}
                <a href="#queen">queen</a> weights matrices: A rook matrix
                defines a neighbor as an area with a shared border while a queen
                matrix defines a neighbor as an area with a shared border and a
                shared vertex.
              </p>
              <h3>
                <a>Voronoi Polygons</a>
              </h3>
              <p>
                See <a href="#thiessen">Thiessen Polygons</a>
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="w">
                  <b>W</b>
                </a>
              </h3>
              <h3>
                <a id="wghts">Weights Matrix</a>
              </h3>
              <p>
                A weights matrix is used to impose a neighborhood structure on
                the data to assess the extent of similarity between locations
                and values (<a href="#sa">spatial autocorrelation</a>).
                Neighbors are defined by a binary (0, 1),{' '}
                <a href="#row">row-standardized</a> spatial weights matrix in
                GeoDa. Each observation is represented by a row and a column in
                the matrix (with neighbors defined as 1 and non-neighbors and
                the location itself as 0). Neighbors of neighbors are defined by
                higher orders of contiguity (with the option to exclude lower
                orders).
              </p>
              <p>
                Currently, there are two basic categories of neighbor
                definitions: Contiguity (shared borders) and distance.
                Contiguity-based weights matrices include{' '}
                <a href="#rook">rook</a> and <a href="#queen">queen</a>. Areas
                are neighbors under the rook criterion if they share borders,
                not <a href="#vertex">vertices</a> (e.g., on a grid, only the
                cells to the North-South and East-West are neighbors). Under the
                queen criterion, areas are neighbors if they share either a
                border or point (e.g., on a grid, in addition to the four cells
                included under rook, the four cells sharing a corner with the
                central location are also counted as neighbors).
              </p>
              <p>
                <a id="distwgts"></a>
                <a href="#distwgts">Distance-based weights matrices</a> include
                distance bands and <a href="#knn">k nearest neighbors.</a>
              </p>

              <p>&nbsp;</p>
              <h3>
                <a id="x">
                  <b>X</b>
                </a>
              </h3>
              <h3>
                <a id="xy">X-Y Coordinates</a>
              </h3>
              <p>
                An x-y coordinate system locates points on a map by measuring
                their distance from the equator and the Central Meridian
                (Greenwich, England). X-Y coordinates can be projected or
                unprojected. X-coordinates are also referred to as longitude
                (East-West; with Greenwich at 0 degrees) and y-coordinates as
                latitude (North-South; with the equator at 0 degrees).
              </p>
              <p>
                You can create a point shape file in GeoDa if you have x-y
                coordinates in .dbf or ASCII format. GeoDa allows you to add{' '}
                <a href="#centralpt">central points</a> to your table.
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="y">
                  <b>Y</b>
                </a>
              </h3>
              <h3>
                <a>Y Coordinates</a>
              </h3>
              <p>
                See <a href="#xy">X-Y Coordinates</a>
              </p>
              <p>&nbsp;</p>
              <h3>
                <a id="z">
                  <b>Z</b>
                </a>
              </h3>
              <h3>
                <a id="zoom">Zoom</a>
              </h3>
              <p>
                Zooming changes the scale of an object, such as a map or a 3D
                scatter plot. The purpose of zooming in is to view the object in
                greater detail or, with zooming out, to gain a better general
                overview. Zooming to full extent returns the object to its
                original scale.{' '}
              </p>
            </div>
            <p>
              Questions? Contact <a href="mailto:spatial@uchicago.edu">us</a>.
            </p>
          </div>
        </section>
        
      </main>
    </Layout>
  );
}
