import React from "react";
import "./App.css";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "react-loader-spinner";
import Modal from './components/Modal/Modal'
class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: "",
    page: 1,
    showModal: false,
  };
  

  componentDidMount() {
    this.setState({ isLoading: true });

    this.handleSubmit("");
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.handleSubmit();
    }
  }
  handleSubmit = () => {
    this.setState({isLoading: true})
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=18865973-5d109a1ffb14de9c0f29f81a5&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...response.data.hits],
            isLoading: false,
            page: prevState.page + 1,
          };
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };
  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  toggleModal=(e)=>{
this.setState(prevState=>{
 return{
   showModal: !prevState.showModal,
 }
})
  }

  render() {
    const { images, isLoading, showModal } = this.state;
    return (
      <div>
        <Searchbar submit={this.handleSearchFormSubmit} />
        {images.length > 0 && <ImageGallery onClick={this.toggleModal} articles={images} />}
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
        {isLoading && (
          <Loader
            className="Loader"
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {images.length > 0 && !isLoading && (
          <Button loadMore={this.handleSubmit} />
        )}
      </div>
    );
  }
}

export default App;
