import PropTypes from 'prop-types';

function LoisListItem({ loi, onClick, isActive }) {
  if (!loi || !loi.attributes) {
    return null;
  }

  const { loi_title, metier } = loi.attributes;
  const metierTitle = metier?.data?.attributes?.metier_title || 'Titre non disponible';
  const metierColor = metier?.data?.attributes?.metier_color || '#000';

  return (
    <div 
      className={`flex flex-col justify-center items-center mb-8 cursor-pointer ${isActive ? 'active-loi' : ''}`} 
      onClick={onClick}>
      <button 
        className="bg-transparent font-secondary uppercase text-custom-green border-2 rounded-lg px-4 mr-12 py-1 -mb-2 z-10" 
        style={{ backgroundColor: metierColor, color: "#fff", borderColor: metierColor, fontWeight: '900', fontSize: '18px' }}>
        {metierTitle}
      </button>
      <button className={`bg-transparent font-primary text-xl text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2 ${isActive ? 'active-loi-title' : ''}`} style={{fontWeight: '800'}}>
        {loi_title}
      </button>
    </div>
  );
}

LoisListItem.propTypes = {
  loi: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default LoisListItem;
