const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return currentUser ? (
    <h1>Welcome, {currentUser.email}</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

// context = { req, res }
LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default LandingPage;
