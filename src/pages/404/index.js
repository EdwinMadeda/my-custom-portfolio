import { useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen fixed flex flex-col justify-center items-start'>
      <div className='section-container  h-[unset]'>
      <h1 className='text-4xl mb-5'>There's nothing here: 404!</h1>
      <BackBtn onClick={()=> navigate('/')} />
      </div>
    </div>
  );
};
export default Page404;
