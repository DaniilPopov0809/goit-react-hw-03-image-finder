import { Circles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

 const Loader = () => {
  return (
    <>
    <Wrapper>
      <Circles
        height="50"
        width="50"
        color="#c6c2c5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      </Wrapper>
    </>
  );
};

export default Loader;