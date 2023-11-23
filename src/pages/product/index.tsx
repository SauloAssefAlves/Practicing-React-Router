import { useParams } from "react-router-dom";
export function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>Welcome to product {id}</h1>
    </div>
  );
}
