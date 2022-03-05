import React from "react";
// import CatType from "./CatType";
import CatTypeContainer from "../container/CatTypeContainer";
import { useParams } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import styles from '../css/mycssmodule.module.css'


function GetCat() {
    const { cat } = useParams()
    // console.log(cat)
    return (
        <div className={styles.productPage} >
            <Header />
            <CatTypeContainer type={cat} />
            <Footer />
        </div>
    )
}
export default GetCat;