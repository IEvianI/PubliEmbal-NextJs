import PropTypes from 'prop-types';
import MetiersListItem from './MetiersListItem';

function MetiersList({ metiers }) {
  if (!metiers || metiers.length < 1) {
    return 'No data';
  }
  return (
    <div className="flex items-center justify-center">
      {metiers.map(metier => (
        <MetiersListItem key={metier.id} metier={metier} />
      ))}
    </div>
  );
}

MetiersList.propTypes = {
  metiers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MetiersList;
