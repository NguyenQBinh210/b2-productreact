import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ListProduct from "./components/ListProduct";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Main />        
          <ListProduct />
      </div>
      <Footer />
    </div>
  );
};

export default App;
