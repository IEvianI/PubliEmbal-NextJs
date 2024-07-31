import PropTypes from 'prop-types';

function MetiersListItem({ metier }) {
  if (!metier || !metier.attributes) {
    return null;
  }

  const { metier_title, metier_img, metier_color } = metier.attributes;
  const imgUrl = metier_img?.data?.attributes?.url;

  return (
    <div className="relative w-72 h-72 overflow-hidden max-[767px]:ml-12 m-2">
      <div className="w-full h-full">
        <img src={imgUrl} className="w-full h-full object-cover rounded-lg" alt={metier_title} style={{ borderBottomRightRadius: '40px' }} />
        <div className="absolute bottom-0 flex gap-2 flex-row left-1/2 transform -translate-x-1/2 pl-2.5 z-20 pr-2.5 text-white text-center rounded-lg py-2 text-2xl font-secondary font-extrabold uppercase" style={{ backgroundColor: metier_color }}>
        {metier_title} <img src="/chevron_metier.svg" alt="" className='pr-3' />
      </div>
      </div>
    </div>
  );
}

MetiersListItem.propTypes = {
  metier: PropTypes.object.isRequired,
};

export default MetiersListItem;
