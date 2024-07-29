import PropTypes from 'prop-types';

function MetiersListItem({ metier, isCenter }) {
  if (!metier || !metier.attributes) {
    return null;
  }

  const { metier_title, metier_img, metier_color } = metier.attributes;
  const imgUrl = metier_img?.data?.attributes?.url;

  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        {isCenter && <span className="background-text" style={{ color: metier_color }}>{metier_title}</span>}
      </div>
      <div className="relative w-72 h-72 overflow-hidden m-2">
        <div className="w-full h-full">
          <img src={imgUrl} className="w-full h-full object-cover rounded-lg z-10" alt={metier_title} style={{ borderBottomRightRadius: '40px' }} />
        </div>
        <div className="absolute bottom-0 flex gap-2 flex-row left-1/2 transform -translate-x-1/2 pl-2.5 z-50 pr-2.5 text-white text-center rounded-lg py-2 text-2xl font-secondary font-extrabold uppercase" style={{ backgroundColor: metier_color }}>
          {metier_title} <img src="/chevron_metier.svg" alt="" className='pr-3' />
        </div>
      </div>
    </>
  );
}

MetiersListItem.propTypes = {
  metier: PropTypes.object.isRequired,
  isCenter: PropTypes.bool.isRequired,
};

export default MetiersListItem;
