import PropTypes from 'prop-types';
import LoisListItem from './LoisListItem';

function LoisList({ lois, onLoiClick, activeLoiId }) {
  if (!lois || lois.length < 1) {
    return 'No data';
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {lois.map(loi => (
        <LoisListItem 
          key={loi.id} 
          loi={loi} 
          onClick={() => onLoiClick(loi)} 
          isActive={loi.id === activeLoiId}
        />
      ))}
    </div>
  );
}

LoisList.propTypes = {
  lois: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoiClick: PropTypes.func.isRequired,
  activeLoiId: PropTypes.number.isRequired,
};

export default LoisList;
