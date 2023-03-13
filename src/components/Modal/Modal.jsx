import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class ModalWindow extends Component {
  state = {
    isOpenModal: null,
  };

  onCloseModal = () => {
    this.setState({ isOpenModal: false });
    this.props.closeModal(this.state.isOpenModal);
  };

  onKeyCloseModal = event => {
    if (event.code === 'Escape') {
      this.setState({ isOpenModal: false });
      this.props.closeModal(this.state.isOpenModal);
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyCloseModal);
  }

  render() {
    const { modalImg } = this.props;
    return createPortal(
      <>
        <Overlay onClick={this.onCloseModal}>
          <Modal>
            <img src={modalImg[0].largeImageURL} alt={modalImg[0].tags} />
          </Modal>
        </Overlay>
      </>,
      modalRoot
    );
  }
}

ModalWindow.propTypes = {
  closeModal: PropTypes.func,
  modalImg: PropTypes.arrayOf(PropTypes.object),
};
