import img from '../assetts/level1.jpg';

export default function Level1(props) {
  const handleImgClick = props.handleImgClick;
  return (
    <div className="gamePage">
      <img className="gameImg" onClick={handleImgClick} src={img}></img>
    </div>
  );
}
