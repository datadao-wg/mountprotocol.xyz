import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Mount Protocol',
    Svg: require('@site/static/img/logo3.svg').default,
    description: (
      <>
          Finance first Data DAO Asset Creation and Issuance Protocol
      </>
    ),
  },
  {
    title: 'Why Mount Protocol',
    Svg: require('@site/static/img/logo1.svg').default,
    description: (
      <>
        Free storage,auction,vote and inspirit.
      </>
    ),
  },
  {
    title: 'Join us',
    Svg: require('@site/static/img/logo2.svg').default,
    description: (
      <>
        Come and join us!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
