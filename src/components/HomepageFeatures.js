import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fundamentals',
    Svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v8m-4-4h8"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    ),
    description: (
      <>
        Learn the foundational concepts of Physical AI and how they apply to humanoid robotics.
      </>
    ),
  },
  {
    title: 'Design Principles',
    Svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M5 14l7-7 7 7"></path>
      </svg>
    ),
    description: (
      <>
        Explore the design considerations for creating effective humanoid robots.
      </>
    ),
  },
  {
    title: 'Control Systems',
    Svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h.01M12 12h.01M16 12h.01M3 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"></path>
      </svg>
    ),
    description: (
      <>
        Master the control algorithms that enable dynamic movement in humanoid robots.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container padding-vert--lg">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}