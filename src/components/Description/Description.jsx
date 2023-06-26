import React from 'react';

const Description = () => {
  return (
    <div style={styles.container}>
          <div style={styles.list}>
              <h3 style={{textAlign: 'center', margin: '10px 0 10px 0'}}>Features:</h3>
        <p style={styles.listItem}>
          • With a simple and intuitive interface, you can easily manage all your contacts in one convenient location.
          Each contact card includes the essential details: the contact name and their associated phone number.
        </p>
        <p style={styles.listItem}>
          • To simplify your search, we've implemented a powerful filter that enables you to sort contacts by name,
          allowing for quick and hassle-free access to specific individuals.
        </p>
        <p style={styles.listItemLast}>
          • Whether you're a busy professional or just someone who values organization, our website ensures that your
          phone contacts are easily accessible and effortlessly maintained.
        </p>
      </div>
    </div>
  );
};

export default Description;

const styles = {
  container: {
    right: 25,

    fontSize: 20,
    textAlign: 'justify',
  },
  list: {
    padding: 0,
    width: '100%',
  },
  listItem: {
    margin: 0,
    borderBottom: '1px solid lightgray',
    padding: '16px 0 16px 0',
  },
  listItemLast: {
    padding: '16px 0 16px 0',
    margin: 0,
  },
};
