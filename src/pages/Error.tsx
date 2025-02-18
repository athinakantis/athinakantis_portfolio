import { Link } from 'react-router-dom';

function Error() {
  return (
    <main>
      <div id="error-container">
        <img id='logo' src="/logo_300w.png" alt="" />
        <h2>Something unexpected happened</h2>
        <p>Sorry about that!</p>
        <Link to='/'>Back home</Link>
      </div>
    </main>
  );
}

export default Error;
