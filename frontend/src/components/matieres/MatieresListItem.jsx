import PropTypes from 'prop-types';

const MatieresListItem = ({ matiere }) => {
  if (!matiere || !matiere.attributes) {
    return null;
  }

  const { matiere_title, matiere_img } = matiere.attributes;
  const matiereImg = matiere_img?.data?.attributes?.url;

  

  return (
    <div className="relative w-72 h-72 overflow-hidden rounded-lg">
      <img src={matiereImg} className="w-full h-full object-cover" alt={matiere_title} />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold uppercase">{matiere_title}</h3>
      </div>
    </div>
  );
};

MatieresListItem.propTypes = {
  matiere: PropTypes.object.isRequired,
};

export default MatieresListItem;
