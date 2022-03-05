import { connect } from "react-redux";

import Home from "../components/Home";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    // categoryHandler: data => dispatch(createCategory(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;