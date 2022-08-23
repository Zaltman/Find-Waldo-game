import level1 from '../assetts/level1.jpg';
export default function Level1(props) {
  console.log(props);
  const handleImgClick = props.handleImgClick;
  return (
    <div className="gamePage">
      <img className="gameImg" onClick={handleImgClick} src="/static/media/level1.6c87f4fdd6b44a049118.jpg"></img>
    </div>
  );
}
