import React from "react";
import styles from '../css/mycssmodule.module.css'
import TopPick from "./TopPick";
import { Link } from 'react-router-dom'
import AddProduct from "./AddProduct";


export default class CreatePickup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: Math.ceil(Math.random() * 20),
            val2: Math.ceil(Math.random() * 20),
            val3: Math.ceil(Math.random() * 20),
            refresh: false,
            newProduct: {}
            // change: false
        };
    }

    chooseProduct = () => {
        if (this.state.refresh) {
            this.setState({
                refresh: false,
                val: Math.ceil(Math.random() * 20),
                val2: Math.ceil(Math.random() * 20),
                val3: Math.ceil(Math.random() * 20),

            })
        } else {
            this.setState({
                refresh: true,
                val: Math.ceil(Math.random() * 20),
                val2: Math.ceil(Math.random() * 20),
                val3: Math.ceil(Math.random() * 20),

            })
        }
    }


    componentDidMount() {
        this.setState({
            refresh: false,
            val: Math.ceil(Math.random() * 20),
            val2: Math.ceil(Math.random() * 20),
            val3: Math.ceil(Math.random() * 20),
        })

    }

    changeState = ({ title, description, price, category, image }) => {
        let obj = {}
        obj['title'] = title
        obj['price'] = price
        obj['description'] = description
        obj['category'] = category
        obj['image'] = image

        this.setState({ newProduct: obj })
        // console.log(this.state.newProduct)

    }

    render() {
        let { val, val2, val3, refresh } = this.state


        if (!refresh) {
            return (
                <div className={styles.topPicSec}>
                    <div>
                        <div className={styles.weeTre}>Weekly Trending
                            {/* <img className={styles.refresh} onClick={this.chooseProduct} src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" />
                            Refresh */}
                            <button className={styles.refresh} onClick={this.chooseProduct}>
                                <img height="20px" src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" />
                            </button>
                        </div>

                        <div>{refresh}</div>
                    </div>
                    <div className={styles.topPicArea}>
                        <div>
                            <AddProduct newV={this.changeState} />
                        </div>
                        <div>
                            <div></div>
                            <TopPick pro={val} />
                        </div>
                        <div>
                            <div></div>
                            <TopPick pro={val2} />
                        </div>
                        <div>
                            <div></div>
                            <TopPick pro={val3} />
                        </div>
                    </div>
                </div>
            )

        } else {
            return (
                <div className={styles.topPicSec}>
                    <div>
                        <div className={styles.weeTre}>Weekly Trending
                            {/* <img className={styles.refresh} onClick={this.chooseProduct} src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" /> */}
                            <button className={styles.refresh} onClick={this.chooseProduct}>
                                <img height="20px" src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" />
                            </button>
                        </div>

                    </div>
                    <div className={styles.topPicArea}>
                        <div>
                            <AddProduct newV={this.changeState} />
                        </div>
                        <div>

                            <TopPick pro={val} />
                        </div>
                        <div>

                            <TopPick pro={val2} />
                        </div>
                        <div>

                            <TopPick pro={val3} />
                        </div>
                    </div>
                </div>
            )
        }



    }
}