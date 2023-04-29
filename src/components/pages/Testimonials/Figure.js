const Figure = ({ avatar, size }) => {
  return (
    <figure
      className="rounded-[50%] overflow-hidden bg-white"
      style={{
        boxShadow: 'var(--box-shadow-extra)',
        width: size,
        height: size,
      }}
    >
      <img className="object-contain w-full h-full" src={avatar} alt="avatar" />
    </figure>
  );
};

export default Figure;
