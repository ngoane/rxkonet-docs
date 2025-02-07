import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="RxKonet | Empowering Pharmacies">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>RxKonet</h1>
          <p className={styles.subtitle}>
            A smarter way to manage your pharmacy, engage patients, and drive better health outcomes.
          </p>
          <Link className="button button--primary button--lg" to="/docs/category/introduction/">
            Start Using RxKonet
          </Link>
        </div>
      </header>

      <main>
        {/* WHY CHOOSE RXKONET */}
        <section className={styles.whyChoose}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Choose RxKonet?</h2>
            <p className={styles.sectionDescription}>
              RxKonet empowers pharmacies with automation, data-driven insights, and seamless patient engagement. 
              Unlike traditional pharmacy systems, RxKonet is built for patient-centered care and long-term pharmacy success.
            </p>
            <div className="row">
              <FeatureCard
                icon="🚀"
                title="Automate Pharmacy Workflows"
                description="Eliminate manual tasks with automated patient reminders, follow-ups, and data entry."
              />
              <FeatureCard
                icon="📊"
                title="Data-Driven Decision Making"
                description="Gain real-time insights into patient adherence, pharmacy performance, and medication refill trends."
              />
              <FeatureCard
                icon="💬"
                title="Seamless Patient Engagement"
                description="Engage patients effortlessly through automated SMS reminders, targeted messaging, and structured health follow-ups."
              />
            </div>
          </div>
        </section>

        {/* WHAT'S IN THE DOCUMENTATION */}
        <section className={styles.documentation}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What’s Inside This Documentation?</h2>
            <p className={styles.sectionDescription}>
              This guide helps you set up and maximize RxKonet. Here’s what you’ll find:
            </p>
            <div className="row">
              <DocFeature title="📝 Client Registration" description="Learn how to register and manage patient profiles efficiently." />
              <DocFeature title="📂 Encounter Documentation" description="Record consultations, treatments, and medical history seamlessly." />
              <DocFeature title="✉️ Automated Communication" description="Set up refill reminders, follow-up alerts, and bulk messaging." />
              <DocFeature title="📊 Analytics & Insights" description="Track pharmacy performance and patient engagement trends." />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Feature Card for Why Choose RxKonet
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Documentation Section Card
function DocFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className={clsx('col col--6', styles.docFeature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
