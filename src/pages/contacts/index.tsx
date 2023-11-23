import { Link } from "react-router-dom";

export function Contacts() {
  return (
    <div>
      <h1>Welcome to page Contacts</h1>
      <h3>Phone: (xx) xxxx-xxxx</h3>
      <hr />
      <Link to='/about'>About</Link>
      <br />
      <Link to='/home'>Go to Home</Link>
    </div>
  );
}
