import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

import {
  AlertTriangle,
  Anchor,
  ArrowRightCircle,
  BookOpen,
  Tv,
} from 'react-feather'

const getFeatures = () => [
  {
    title: 'Get Oriented',
    Icon: Anchor,
    description: (
      <>
        Finally!{' '}
        <Link to={useBaseUrl('orientation/')}>
          The missing introduction to Webpacker
        </Link>
        . Understand what Webpacker does (and doesn&apos;t) do. Crafted
        especially for developers familiar with the Rails asset pipeline. used
        to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Full Tutorial',
    Icon: Tv,
    description: (
      <>
        Coming soon! Follow the best step-by-step tutorial to get up-and-running
        with Webpacker taking you from zero-to-deploy covering topics from
        development to optimization.
      </>
    ),
  },
  {
    title: 'Tips and Tricks',
    Icon: BookOpen,
    description: (
      <>
        Coming soon! Need help with a specific integration or task? Check out
        common Webpacker tasks including how-in-the-world to add jQuery and
        setup steps for React and Vue.
      </>
    ),
  },
]

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Icon size={48} className={clsx(styles.featureIcon)} />
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const features = getFeatures()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Webpacker Survival Guide provides documentation, tutorials, and tips for using Webpacker and webpack to bundle JavaScript, CSS, and images with a Ruby on Rails application"
    >
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroBannerContainer)}>
          <h1
            className={clsx('hero__title margin-bottom--lg', styles.heroTitle)}
          >
            &rsquo;Adopting Webpacker is one of the hardest things I&apos;ve
            ever done in Rails&lsquo;
          </h1>
          <h4 className={styles.workInProgress}>
            <AlertTriangle /> Work in Progress!
          </h4>
          <p className="hero__subtitle">
            Save yourself time and frustration on the road to modernizing your
            Rails frontend with{' '}
            <span className="text--primary text--bold">{siteConfig.title}</span>
          </p>
          <div className={clsx('margin-top--lg', styles.buttons)}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('orientation/')}
            >
              Get Started <ArrowRightCircle className="margin-left--sm" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
