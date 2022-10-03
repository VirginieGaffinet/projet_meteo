// import css
import './plusButton.scss';
// import react feather
import { Plus } from 'react-feather';

const PlusButton = () => {
  return (
    <div className='plusButton'>
      <button className='plusButton-button'>
        <Plus size="24" color="#8E8F98" className="buttonPlus-circleButton" />
      </button>
    </div>
  )
};

export default PlusButton;