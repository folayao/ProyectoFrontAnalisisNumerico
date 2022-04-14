import React from 'react';

const Title = () => {
  return (
    <>
      <section id='title'>
        <div className={styles['title-container']}>
          <h1 className={styles['title-container__title']}>
            ToA4
            <FontAwesomeIcon icon={faImages} className={styles['icon']} />
          </h1>
        </div>
      </section>
    </>
  );
};

module.exports = {};
