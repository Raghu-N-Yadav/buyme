import React from "react";
import styles from '../css/mycssmodule.module.css'
import { Link } from 'react-router-dom'
import monkey from '../img/monkey.gif'


export default class Categories extends React.Component {

    makeCategoryComp = (name) => {
        return (
            <div>
                <Link className={styles.link} to={`type/${name}`}>
                    <div className={styles.categorie}>{name}</div>
                </Link>
            </div>
        )
    }
    componentDidMount() {
        // console.log("cat", this.props.product.Productreducer.product)
        // console.log(store)
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    this.props.categoryHandler({
                        isLoaded: true,
                        items: result,
                        error: null
                    })

                },
                (error) => {
                    this.props.categoryHandler({
                        isLoaded: true,
                        error: error
                    })

                }
            )
    }

    render() {
        // console.log("cat", this.props.product.Productreducer.product)
        let i = 0;
        const { error, isLoaded, items } = this.props.product.Productreducer.product
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={styles.monkey}><img src={monkey} alt="loading.." /></div>;
        } else {
            return (
                <>
                    <div className={styles.catHead}>Categories</div>
                    <div className={styles.categories}>
                        {items.map(cat => <div key={i++}>{this.makeCategoryComp(cat)}</div>)}
                    </div>
                </>
            );
        }
        // return <>hi</>
    }
}