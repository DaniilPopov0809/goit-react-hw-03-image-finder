import { Circles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <>
    <Wrapper>
      <Circles
        height="50"
        width="50"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      </Wrapper>
    </>
  );
};
