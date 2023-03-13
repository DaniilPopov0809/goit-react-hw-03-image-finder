import PropTypes from 'prop-types';
import { Component } from 'react';
import { Header } from './Searchbar.styled';
import { toast } from 'react-toastify';

class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  handleInputChange = event => {
    const currentInputValue = event.currentTarget.value.toLowerCase();
    this.setState({ searchValue: currentInputValue });
  };

  handleSumbitForm = event => {
    const { searchValue } = this.state;
    const { onSubmit, resetPage } = this.props;
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.info('Enter search image or photo!');
      return;
    }
    onSubmit(searchValue);
    resetPage();
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <Header>
        <form className="form" onSubmit={this.handleSumbitForm}>
          <button
            type="submit"
            className="button"
            disabled={this.props.isLoading}
          >
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchValue}
          />
        </form>
      </Header>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  resetPage: PropTypes.func,  
};
