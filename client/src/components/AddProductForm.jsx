import React from 'react';
import PropTypes from 'prop-types';
import {
  addProduct
} from '../actions/actions.jsx';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: '',
      productQuantity: '',
      price: '',
      description: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onProductNameChanged = this.onProductNameChanged.bind(this);
    this.onProductQuantityChanged = this.onProductQuantityChanged.bind(this);
    this.onPriceChanged = this.onPriceChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);

  }

  componentWillMount() {
    const { store } = this.context;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { store } = this.context;
    let product = {
      productName: this.state.productName,
      productQuantity: this.state.productQuantity,
      price: this.state.price,
      description: this.state.description,
    }
    console.log(product);
    store.dispatch(addProduct(product));
    // store.dispatch(addProduct(this.state.productName));
    this.setState({
      productName: '',
      productQuantity: '',
      price: '',
      description: '',
    });
  }

  onProductNameChanged(e) {
    this.setState({ productName: e.target.value });
  }

  onProductQuantityChanged(e) {
    this.setState({ productQuantity: e.target.value });
  }

  onPriceChanged(e) {
    this.setState({ price: e.target.value });
  }

  onDescriptionChanged(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    const { store } = this.context;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Product..." onChange={this.onProductNameChanged} value={this.state.productName} />
        <input type="text" placeholder="Quantity..." onChange={this.onProductQuantityChanged} value={this.state.productQuantity} />
        <input type="text" placeholder="$0.00" onChange={this.onPriceChanged} value={this.state.price} />
        <input type="text" placeholder="Description..." onChange={this.onDescriptionChanged} value={this.state.description} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
AddProductForm.contextTypes = {
  store: PropTypes.object
};

export default AddProductForm;