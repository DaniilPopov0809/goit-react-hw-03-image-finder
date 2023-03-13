import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, alt }) => {
  return (
    <>
      <Item>
        <Image src={webformatURL} alt={alt} />
      </Item>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string,
};
