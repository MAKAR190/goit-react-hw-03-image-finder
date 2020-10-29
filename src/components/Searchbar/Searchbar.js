import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
export default class Searchbar extends React.Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormBtn}>
            <span className={styles.searchFormLabel}>
              <i className="fas fa-search"></i>
            </span>
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
    );
  }
}
