import PropTypes from 'prop-types';
import MetiersListItem from './MetiersListItem';

function MetiersList({ metiers }) {
  if (!metiers || metiers.length < 1) {
    return 'No data';
  }

  if (!metier || !metier.attributes) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
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
