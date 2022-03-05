import { connect } from "react-redux";

import GetCat from "../components/GetCat";
// import { getCategory } from "../services/action";

const mapStateToProps = state => ({
    // product: state

})

const mapDispatchToProps = dispatch => ({
    // categoryHandler: data => dispatch(getCategory(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetCat)
// export default Home;