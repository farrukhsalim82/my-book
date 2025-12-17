import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started Reading
          </Link>
          <Link
            className="button button--outline button--lg"
            to="#features">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive textbook on Physical AI and Humanoid Robotics covering fundamentals, design principles, control systems, and machine learning applications.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--lg bg-gray">
          <div className="container">
            <div className="row">
              <div className="col col--6 padding-horiz--md">
                <h2>What You'll Learn</h2>
                <ul className={styles.learningPoints}>
                  <li>Core principles of physical AI</li>
                  <li>Design considerations for humanoid robots</li>
                  <li>Control algorithms for robotic systems</li>
                  <li>Machine learning for embodied intelligence</li>
                  <li>Ethical implications of humanoid robotics</li>
                </ul>
              </div>
              <div className="col col--6 padding-horiz--md">
                <h2>Prerequisites</h2>
                <ul className={styles.prerequisites}>
                  <li>Basic understanding of calculus and linear algebra</li>
                  <li>Fundamentals of programming (preferably Python)</li>
                  <li>Introductory knowledge of physics (mechanics)</li>
                  <li>Basic understanding of machine learning concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <h2 style={{textAlign: 'center'}}>About This Textbook</h2>
                <p style={{textAlign: 'center', fontSize: '1.2em'}}>
                  This comprehensive guide introduces you to the fascinating world of physical artificial intelligence and humanoid robotics.
                  Our curriculum is structured into four main modules, each building upon the previous one.
                  Throughout the course, you'll encounter key concept explanations, mathematical formulations, programming exercises,
                  case studies, and assessment questions to reinforce your learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.getStarted}>
          <div className="container padding-vert--xl text--center">
            <h2>Start Learning Today</h2>
            <p className="padding-horiz--md" style={{fontSize: '1.2em', maxWidth: '60%', margin: '0 auto 2rem'}}>
              Ready to dive into the world of Physical AI and Humanoid Robotics? Our comprehensive textbook provides everything you need to get started.
            </p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Begin Your Journey
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}