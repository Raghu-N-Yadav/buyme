import { Link } from "react-router-dom";
import React from "react";
import styles from '../css/mycssmodule.module.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterData: [],
            searchData: [],
            pId: '',
            button: true
        }
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => this.setState({ filterData: json }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)

        // const product = this.state.searchData.find(item => item.title.trim() === e.target[0].value.trim())
        // this.setState({ pId: product['id'] })
        // console.log(product['id'])
        // e.target[0].value = ''
    }
    handleChange = ({ target }) => {
        if (target.value !== '') {
            this.setState({ button: false })
            // console.log(target.value)
            // fetch('https://fakestoreapi.com/products')
            //     .then(res => res.json())
            //     .then(json => {
            // console.log(json)
            let searchData = this.state.filterData.filter(product => product.title.toLowerCase().includes(target.value.toLowerCase()))
            this.setState({ searchData: searchData })
            // console.log(this.state.searchData)
            const product = this.state.searchData.find(item => item.title.trim() === target.value.trim())
            if (product.length !== 0) {
                this.setState({ pId: product['id'] })
            }
            // console.log(filterData)
            // console.log(this.state.filterData)

            // })
        } else {
            this.setState({ searchData: [], button: true })
            // console.log('hi')
            // console.log(this.state.filterData.length)
        }
    }
    render() {
        return (
            <div className={styles.mainHead}>
                {/* <div>Header</div> */}
                <div className={styles.mainTitle}>
                    <div className={styles.logo}><img id={styles.logo} src="https://img.icons8.com/clouds/100/000000/r--v1.png" alt="logo" /></div>
                    <div className={styles.title}>are</div>
                </div>
                <div className={styles.search}>
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <input list="products" id="product" onChange={this.handleChange} className={styles.searchIn}
                        type="search" placeholder="search products"></input>
                    <Link to={`/product/${this.state.pId}`}><button className={styles.lable} disabled={this.state.button}>Search</button></Link>
                    {/* <span className={styles.lable} htmlFor="search">Search</span> */}
                    <datalist id="products">
                        {/* <option value={`${this.state.filterData[0].title}`}></option> */}
                        {this.state.searchData.map(product => <option value={product.title} key={product.id}></option>)}

                    </datalist>
                    {/* </form> */}
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to="/">Home</Link>
                    <span className={styles.link} >Latest</span>
                    <span className={styles.link} >Category</span>
                </div>
                <div className={styles.btnC} >
                    <img className={styles.cart} src="https://img.icons8.com/color/48/000000/shopping-cart--v2.png" alt="cart" />
                    <button className={styles.btn}>Sign In</button>
                </div>
            </div>
        )
    }
}