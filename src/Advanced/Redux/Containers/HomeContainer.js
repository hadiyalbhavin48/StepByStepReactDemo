//HomeContainer.js


import Home from "../Components/Home";
import { addToCart, removeToCart } from '../Services/Actions/Action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home;