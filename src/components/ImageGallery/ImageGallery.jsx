import axios from 'axios';
import * as Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';
import { List } from './ImageGallery.styled';
import  Loader  from 'components/Loader/';
import  LoadMore  from 'components/Button';
import ModalWindow from 'components/Modal';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    galery: [],
    loading: false,
    button: false,
    page: 1,
    isOpenModal: false,
    modalImg: null,
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  onIncrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onCloseModal = state => {
    this.setState({ isOpenModal: state });
  };

  onHadnleClickImg = event => {
    const searchImg = this.state.galery.filter(
      elem => elem.webformatURL === event.target.src
    );

    this.setState({ modalImg: searchImg });
    this.setState({ isOpenModal: true });
  };

  scrollDown = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToBottom();
  };

  async getDataImg() {
    let limitData;
    let per_page = 12;
    const { loading, page, galery } = this.state;
    const { searchValue, isLoading } = this.props;

    this.setState({ loading: true });
    this.setState({ button: false });
    isLoading(!loading);
    const BASE_URL = 'https://pixabay.com/api/';
    const PARAMS = {
      params: {
        key: '33059287-a3adfd6fce60f5adf99857961',
        q: `${searchValue}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: `${page}`,
        per_page: `${per_page}`,
      },
    };
    try {
      const response = await axios.get(BASE_URL, PARAMS);
      const data = response.data.hits;
      limitData = response.data.totalHits;
      if(data.length === 0){
        toast.error('Image or photo not found!');
      }
      this.setState(prevState => ({
        galery: [...prevState.galery, ...data],
      }));
    } catch (error) {
      toast.error('Oops, something went wrong!');
      this.setState({ button: true });
    } finally {
      this.setState({ loading: false });
      isLoading(!this.state.loading);
      if (limitData <= galery.length + per_page) {
        this.setState({ button: false });
      } else {
        this.setState({ button: true });
      }
    }
  }

  componentDidMount() {
    this.props.getResetFunc(this.resetPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ galery: [] });
      this.getDataImg();
    }
    if (prevState.page < this.state.page) {
      this.getDataImg();
    }
    this.scrollDown();
  }

  render() {
    const { galery, loading, button, isOpenModal, modalImg } = this.state;
    return (
      <>
        {galery && (
          <List onClick={this.onHadnleClickImg}>
            {galery.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                alt={tags}
              />
            ))}
          </List>
        )}
        {loading && <Loader />}
        {button && (
          <LoadMore currentPage={this.onIncrementPage} page={this.state.page} />
        )}
        {isOpenModal && (
          <ModalWindow modalImg={modalImg} closeModal={this.onCloseModal} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  isLoading: PropTypes.func,
  searchValue: PropTypes.string,
  getResetFunc: PropTypes.func,
};
