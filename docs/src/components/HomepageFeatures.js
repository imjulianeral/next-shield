import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        Configure everything in one place, just pass the values from your state and
        everything will be reactive.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/focus.svg').default,
    description: <>Just define what you need and let NextShield handle it for you.</>,
  },
  {
    title: 'No Flashy Content',
    Svg: require('../../static/img/flash.svg').default,
    description: (
      <>
        Protect your sensitive data. If not authorized, it won&apos;t be displayed; as
        simple as that.
      </>
    ),
  },
  {
    title: 'Role-Based Access Control',
    Svg: require('../../static/img/RBAC.svg').default,
    description: (
      <>Define the roles and the permissions for each of them in one single step.</>
    ),
  },
  {
    title: 'Completely Agnostic',
    Svg: require('../../static/img/routes.svg').default,
    description: (
      <>
        It doesn&apos;t matter which auth provider your app use; only provide the required
        values to NextShield.
      </>
    ),
  },
  {
    title: "Don't Write Repetitive Code Anymore",
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        Forget about writing `router.push` and custom validations on each page or
        component.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
