import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchForm from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
    loading: false,
    resetPage: null,
  };

  formSumbit = search => {
    this.setState({ searchValue: search });
  };

  onLoading = load => {
    this.setState({ loading: load });
  };

  getResetFunc = result => {
    this.setState({ resetPage: result });
  };

  render() {
    const { searchValue, loading, resetPage } = this.state;
    return (
      <>
        <SearchForm
          onSubmit={this.formSumbit}
          isLoading={loading}
          resetPage={resetPage}
        />
        <ImageGallery
          searchValue={searchValue}
          isLoading={this.onLoading}
          getResetFunc={this.getResetFunc}
        />

        <ToastContainer autoClose={1000} />
      </>
    );
  }
}
