import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Mount Protocol',
    Svg: require('@site/static/img/what.svg').default,
    description: (
      <>
          An Filecoin protocol in order to build the world's first financial-first protocol for data organization, asset creation, and issuance.
          Driving open data with open finance to promote the democratization of AI.
      </>
    ),
  },
  {
    title: 'Why Mount Protocol',
    Svg: require('@site/static/img/why.svg').default,
    description: (
      <>
          1、Funds would only payout after proof is provided that the data has successfully been stored on Filecoin. 2、DataDAO can specify the storage duration.
          3、Implementing a unique system that links data storage with usage rights, providing new revenue streams for digital assets.
      </>
    ),
  },
  {
    title: 'Join us',
    Svg: require('@site/static/img/true.svg').default,
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
