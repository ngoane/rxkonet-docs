import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function MainFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/pharmacy-management.svg" className={styles.featureSvg} alt="Easy Management" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Streamlined Management</Heading>
              <p>
                Efficiently manage your pharmacy operations with our intuitive interface and powerful features.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/patient-care.svg" className={styles.featureSvg} alt="Patient Care" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Enhanced Patient Care</Heading>
              <p>
                Focus on what matters most - your patients. Let RxKonet handle the administrative tasks.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/analytics.svg" className={styles.featureSvg} alt="Analytics" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Powerful Analytics</Heading>
              <p>
                Make data-driven decisions with comprehensive reporting and analytics tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 