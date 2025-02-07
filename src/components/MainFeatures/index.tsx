import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function MainFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureCard
            img="/img/pharmacy-management.svg"
            title="Streamlined Pharmacy Management"
            description="Manage patient records, prescriptions, and communication effortlessly with an intuitive dashboard."
          />
          <FeatureCard
            img="/img/patient-care.svg"
            title="Automated Patient Engagement"
            description="Send refill reminders, follow-up messages, and appointment notifications automatically."
          />
          <FeatureCard
            img="/img/analytics.svg"
            title="Actionable Insights & Analytics"
            description="Make data-driven decisions with real-time reports on patient trends, adherence, and engagement."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ img, title, description }: { img: string; title: string; description: string }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
