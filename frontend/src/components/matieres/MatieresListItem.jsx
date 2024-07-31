import PropTypes from 'prop-types';

const MatieresListItem = ({ matiere }) => {
  if (!matiere || !matiere.attributes) {
    return null;
  }

  const { matiere_title, matiere_img } = matiere.attributes;

  return (
    <div className="relative w-72 h-72 overflow-hidden rounded-lg">
      <img src={matiere_img} className="w-full h-full object-cover" alt={matiere_title} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold uppercase">{matiere_title}</h3>
      </div>
    </div>
  );
};

MatieresListItem.propTypes = {
  matiere: PropTypes.object.isRequired,
};

export default MatieresListItem;
