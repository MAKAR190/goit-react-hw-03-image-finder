import React from "react";
import styles from "./Modal.module.css";
export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }
  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div onClick={this.props.onClose} className={styles.overlay}>
        <div className={styles.modal}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
