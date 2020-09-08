import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import Payment from "./Payment";
import "./cart.scss";

// let items = [
//   {
//     id: 0,
//     name: "Apple iPad Mini 2 16GB",
//     description: "An iPad like no other. 16GB, WiFi, 4G.",
//     price: 10
//   },
//   {
//     id: 1,
//     name: "Apple iPad Mini 2 32GB",
//     description: "Even larger than the 16GB.",
//     price: 20
//   },
//   {
//     id: 2,
//     name: "Canon T6i",
//     description: "DSLR camera with lots of megapixels.",
//     price: 30
//   },
//   {
//     id: 3,
//     name: "Apple Watch Sport",
//     description: "A watch",
//     price: 20
//   },
//   {
//     id: 4,
//     name: "Apple Watch Silver",
//     description: "A more expensive watch",
//     price: 50
//   }
// ];

let items = [
  {
    id: 0,
    name: "Time Pass",
    description: `1x Ticket
      1x Lucky Contest Entry
      English Subtitles
      Tulu / Kannada Language
      For Indian Users Only`,
    price: 249
  },
  {
    id: 1,
    name: "Group Pass",
    description: `Pay For 9 and Get 1 For Free
      10x Ticket
      10x Lucky Contest Entry
      English Subtitles
      Tulu / Kannada Language
      For Indian Users Only`,
    price: 2241
  },
  {
    id: 2,
    name: "NRI Pass",
    description: `1x Day Ticket
        1x Lucky Contest Entry
        English Subtitles
        Tulu / Kannada Language
        Broadcast Globally`,
    price: 349
  }
];

class Nav extends React.Component {
  render() {
    let { selectedTab, onTabChange } = this.props;
    return (
      <nav className="App-nav">
        <ul>
          <li className={`App-nav-item ${selectedTab === 0 && "selected"}`}>
            <a onClick={onTabChange.bind(this, 0)}>Items</a>
          </li>
          <li className={`App-nav-item ${selectedTab === 1 && "selected"}`}>
            <a onClick={onTabChange.bind(this, 1)}>Cart</a>
          </li>
        </ul>
      </nav>
    );
  }
}
// Nav.propTypes = {
//   selectedTab: React.PropTypes.number.isRequired,
//   onTabChange: React.PropTypes.func.isRequired
// };

let Item = ({ item, children }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image" />
      <div className="Item-title">{item.name}</div>
      <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
      <div className="Item-price">₹{item.price}</div>
      {children}
    </div>
  </div>
);

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item}>
            <button
              className="Item-addToCart"
              onClick={onAddToCart.bind(null, item)}
            >
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}

function CartPage({ items, onAddOne, onRemoveOne, emptyCart }) {
  return (
    <ul className="CartPage-items">
      {items.map(item => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={onRemoveOne.bind(null, item)}
              >
                &ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                onClick={onAddOne.bind(null, item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
      <li>
        <div
          className="CartItem-controls"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          Total
          <span className="CartItem-count">
            ₹
            {items.reduce((acc, cv) => {
              return (acc = cv.price * cv.count + acc);
            }, 0)}
          </span>
        </div>
        <Payment
          total={items.reduce((acc, cv) => {
            return (acc = cv.price * cv.count + acc);
          }, 0)}
          emptyCart={emptyCart}
          items={items}
        />
      </li>
    </ul>
  );
}
// CartPage.propTypes = {
//   items: React.PropTypes.array.isRequired,
//   onAddOne: React.PropTypes.func.isRequired,
//   onRemoveOne: React.PropTypes.func.isRequired
// };

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      cart: []
    };
  }

  componentDidMount() {
    this.setState({
      cart: [...this.state.cart, this.props.item.id]
    });
  }

  emptyCart = () => {
    this.setState({ cart: [] });
  };

  handleTabChanged = index => {
    this.setState({ selectedTab: index });
  };

  handleAddToCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  handleRemoveOne = item => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  };

  renderContent() {
    switch (this.state.selectedTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  }

  renderCart() {
    // Count how many of each item is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      var item = items.find(item => item.id === parseInt(itemId, 10));

      // Create a new "item" that also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}
        emptyCart={this.emptyCart}
      />
    );
  }

  render() {
    // items = this.props.cart;
    let { selectedTab } = this.state;
    return (
      <div className="App">
        <Nav selectedTab={selectedTab} onTabChange={this.handleTabChanged} />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

function mapToProps({ user, cart }) {
  return { user, cart };
}
export default connect(mapToProps)(Cart);
