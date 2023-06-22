const { default: UserBar } = require('./UserBar');

const Nav = () => {
  return (
    <div style={styles.hedder}>
      <h3 style={{ fontSize: 25, margin: 0, display: 'block' }}>
        PhoneBook
      </h3>
      <UserBar />
    </div>
  );
};
export default Nav;
const styles = {
  hedder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid white',
    paddingBottom: '5px',
    marginBottom: '25px',
  },
};
