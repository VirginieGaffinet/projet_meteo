// import hooks
import { useDispatch, useSelector } from 'react-redux';
// actions
import { showSearchInput } from '../../../actions/search';
// import css
import './plusButton.scss';
// import react feather
import { Plus } from 'react-feather';

const PlusButton = () => {
  const dispatch = useDispatch();
  return (
    <div className='plusButton'>
      <button 
        className='plusButton-button'
        onClick={() => {
          dispatch(showSearchInput());
          // console.log('je suis la');
        }}
        >
        <Plus size="24" color="#8E8F98" className="buttonPlus-circleButton" />
      </button>
    </div>
  )
};

export default PlusButton;