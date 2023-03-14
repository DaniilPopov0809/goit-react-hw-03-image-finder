import PropTypes from 'prop-types';
import { Button, Wrapper } from './Button.styled';

 const LoadMore = ({ currentPage }) => {
  return (
    <>
      <Wrapper>
        <Button type="button" onClick={() => currentPage()}>
          LoadMore
        </Button>
      </Wrapper>
    </>
  );
};

LoadMore.propTypes = {
  currentPage: PropTypes.func,
};

export default LoadMore;