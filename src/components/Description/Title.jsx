import React from 'react';
import css from './Title.module.css'

const Title = () => {
  return (
    <div className={css.title}>
      <h1>Contacts App</h1>
      <p className={css.description}>
        Welcome to our user-friendly website designed to store and organize your phone contact cards.
      </p>
    </div>
  );
};

export default Title;
