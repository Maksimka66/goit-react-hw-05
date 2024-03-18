import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Тут так же пусто, как в твоей башке!</p>
      <Link to="/">Home</Link>
    </div>
  );
}
