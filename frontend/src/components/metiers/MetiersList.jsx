import PropTypes from 'prop-types';
import MetiersListItem from './MetiersListItem';

function MetiersList({ metiers, isCenterSlide }) {
  if (!metiers || metiers.length < 1) {
    return 'No data';
  }

  if (!metier || !metier.attributes) {
    return null;
  }

  const { metier_title, metier_color } = metier.attributes;

  return (
    <>
    {isCenterSlide && (
      <div className="text-center font-secondary uppercase font-bold" style={{ color: metier_color, fontWeight: '900', fontSize: '75px' }}>
        {metier_title}
      </div>
    )}
    <div className="flex flex-col md:flex-row items-center justify-center">
      {metiers.map(metier => (
        <MetiersListItem key={metier.id} metier={metier} />
      ))}
    </div>
    </>
  );
}

MetiersList.propTypes = {
  metiers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isCenterSlide: PropTypes.bool.isRequired,
};

export default MetiersList;
