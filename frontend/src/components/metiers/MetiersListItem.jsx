import PropTypes from 'prop-types';

function MetiersListItem({ metier, isCenterSlide }) {
  if (!metier || !metier.attributes) {
    return null;
  }

  const { metier_title, metier_img, metier_color } = metier.attributes;
  const imgUrl = metier_img?.data?.attributes?.url;

  return (
    <div
      className={`relative mx-auto overflow-hidden max-[767px]:ml-12 m-2 ${
        isCenterSlide ? 'w-80 h-80' : 'w-72 h-72'
      }`}
      style={{
        transform: isCenterSlide ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="w-full h-full">
        <img
          src={imgUrl}
          className="w-full h-full object-cover rounded-lg"
          alt={metier_title}
          style={{ borderBottomRightRadius: '40px' }}
        />
        <div
          className="absolute -bottom-0 flex gap-2 flex-row left-1/2 transform -translate-x-1/2 w-full items-center justify-center z-20 text-white text-center rounded-lg py-2 text-2xl font-secondary font-extrabold uppercase"
          style={{ backgroundColor: metier_color }}
        >
          {metier_title}
          <img src="/chevron_metier.svg" alt="" className="pr-3" />
        </div>
      </div>
    </div>
  );
}

MetiersListItem.propTypes = {
  metier: PropTypes.object.isRequired,
  isCenterSlide: PropTypes.bool.isRequired,
};

export default MetiersListItem;
