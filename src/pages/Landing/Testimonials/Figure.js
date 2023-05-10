import { images } from '../../../utils/constants';

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
      <img
        className="object-contain w-full h-full"
        src={avatar?.url ?? images.default_user}
        alt="avatar"
      />
    </figure>
  );
};

export default Figure;
