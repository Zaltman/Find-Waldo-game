import { Link } from 'react-router-dom';

export default function GamePage() {
  return (
    <div className="gamePage">
      <p>Choose level</p>
      <Link to={'/level1'}>Level 1</Link>
    </div>
  );
}
