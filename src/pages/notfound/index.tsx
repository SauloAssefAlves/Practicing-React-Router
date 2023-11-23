import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Ops. this page don't exist!</h1>
      <Link to='/'>Access page home</Link>
    </div>
  );
}
