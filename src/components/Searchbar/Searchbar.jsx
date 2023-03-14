import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { Component } from 'react';
import { Header, Input, Button, Form } from './Searchbar.styled';

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
        <Form onSubmit={this.handleSumbitForm}>
          <Button
            type="submit"
            className="button"
            disabled={this.props.isLoading}
          >
            <span className="button-label">
              <BsSearch style={{ width: 20, height: 20 }} />
            </span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchValue}
          />
        </Form>
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
