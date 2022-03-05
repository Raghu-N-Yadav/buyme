import { connect } from "react-redux";

import Categories from "../components/Categories";
import { createCategory } from "../services/action";


const mapStateToProps = state => ({
    product: state

})

const mapDispatchToProps = dispatch => ({
    categoryHandler: data => dispatch(createCategory(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
// export default Home;