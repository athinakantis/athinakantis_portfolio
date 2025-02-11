import { Link } from 'react-router-dom';

function Error() {
  return (
    <div id="error-container">
      <h2>Something went wrong</h2>
      <Link to='/'>Back home</Link>
    </div>
  );
}

export default Error;
