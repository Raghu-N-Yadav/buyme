import { connect } from "react-redux";

import CatType from "../components/CatType";
import { getCategory } from "../services/action";

const mapStateToProps = state => ({
    product: state

})

const mapDispatchToProps = dispatch => ({
    categoryHandler: data => dispatch(getCategory(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CatType)
// export default Home;