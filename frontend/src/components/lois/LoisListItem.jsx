function LoisListItem({ loi, onClick, isActive }) {
  if (!loi || !loi.attributes) {
    return null;
  }

  const { loi_title, metier } = loi.attributes;
  const metierTitle = metier?.data?.attributes?.metier_title || 'Titre non disponible';
  const metierColor = metier?.data?.attributes?.metier_color || '#000';

  const activeStyle = {
    backgroundImage: 'url(/CTA-hover-green.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: '10px 20px',
    minWidth: '150px',  
    display: 'flex',
};

  return (
    <div 
      className="flex flex-col justify-center items-center mb-8 cursor-pointer" 
      onClick={onClick}>
      <button 
        className="bg-transparent font-secondary uppercase text-custom-green border-2 rounded-lg px-4 mr-12 py-1 -mb-2 z-10" 
        style={{ backgroundColor: metierColor, color: "#fff", borderColor: metierColor, fontWeight: '900', fontSize: '18px' }}>
        {metierTitle}
      </button>
      <button 
        className={`bg-transparent font-primary text-xl text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2 ${isActive ? 'active-loi' : ''}`} 
        style={{
          fontWeight: '800',
          ...(isActive ? activeStyle : {})
        }}>
        {loi_title}
      </button>
    </div>
  );
}

export default LoisListItem;