import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to page home!</h1>
      <span>This is my page with navigation</span>
      <br />
      <Link to='/about'>About</Link>
    </div>
  );
}
