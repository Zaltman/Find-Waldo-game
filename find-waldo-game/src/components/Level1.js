import img from '../assetts/level1.jpg';
import ChooseCharacterModal from './ChooseCharacterModal';

export default function Level1(props) {
  const handleImgClick = props.handleImgClick;
  const isModalOpen = props.isModalOpen;
  return (
    <div className="gamePage">
      <img className="gameImg" onClick={handleImgClick} src={img}></img>
      <ChooseCharacterModal isModalOpen={isModalOpen} />
    </div>
  );
}
