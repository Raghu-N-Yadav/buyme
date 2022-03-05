import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CategoryContainer from "../container/CategoryContainer";
import CreatePickup from "./CreatePickup";
import shopImg from '../img/shop3.png'
import styles from '../css/mycssmodule.module.css'

export default class Home extends React.Component {

    render() {
        // console.log("home", this.props)
        return (
            <div>
                <Header />
                <img src={shopImg} className={styles.shoping} alt="shopping" />
                <CreatePickup />
                <CategoryContainer />
                {/* <CatType /> */}
                <Footer />
            </div>
        )
    }
}