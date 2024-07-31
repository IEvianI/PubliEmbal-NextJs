import PropTypes from 'prop-types';

const MatieresListItem = ({ matiere }) => {
  if (!matiere || !matiere.attributes) {
    return null;
  }

  const { matiere_title, matiere_img } = matiere.attributes;
  const matiereImg = matiere_img?.data?.attributes?.url;

  

  return (
    <div className="img-section-matiere relative w-96 h-96 max-[767px]:w-80 max-[767px]:h-80 overflow-hidden rounded-lg">
      <img src={matiereImg} className="w-full h-full object-cover" alt={matiere_title} />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-6xl font-secondary uppercase" style={{fontWeight: '900', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{matiere_title}</h3>
      </div>
    </div>
  );
};

MatieresListItem.propTypes = {
  matiere: PropTypes.object.isRequired,
};

export default MatieresListItem;
