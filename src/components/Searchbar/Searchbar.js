import React from 'react';
import styles from './Searchbar.module.css'
export default class Searchbar extends React.Component{
    state = {
        value: ""
    }
    handleChange=(e)=>{
      this.setState({
         value: e.target.value
      })
    }
    handleSubmit=(e)=>{
       e.preventDefault();
        this.props.submit(this.state.value);
        this.setState({value:""})
    }

    render(){
        return (
            <header className={styles.searchBar}>
            <form className={styles.searchForm} onSubmit={this.handleSubmit}>
              <button type="submit" className={styles.searchFormBtn}>
                <span className={styles.searchFormLabel}><i className="fas fa-search"></i></span>
              </button>
          
              <input
                className={styles.searchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={this.state.value}
              />
            </form>
          </header>
        )
    }
 
}
