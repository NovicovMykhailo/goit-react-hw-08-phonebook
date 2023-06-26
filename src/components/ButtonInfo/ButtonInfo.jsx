import React from 'react';
import cursorImage from '../../assets/Black_question_mark.png';

const ButtonInfo = ({ onClick }) => {
  return (
    <div style={styles.container}>

      <button onClick={onClick} style={styles.button} title="Learn More">
        <img src={cursorImage} alt="icon" style={styles.symbol} width="20" />
      </button>
    </div>
  );
};

export default ButtonInfo;
const styles = {
  container: {
    position: 'absolute',
    right: 10,
    top: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    padding: 10,
    display: 'block',
    cursor: `pointer`,
    borderRadius: '50%',
    width: 40,
    height: 40,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgb(239, 239, 239)',
  },
  symbol: {
    objectFit: 'contain',
  },
};
