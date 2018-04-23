import React from 'react';

import styles from './Organization.scss';

const Organization = props => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <h3>{props.org.title}</h3>
        <p>{props.org.body}</p>
      </div>
    </React.Fragment>
  );
};

export default Organization;
