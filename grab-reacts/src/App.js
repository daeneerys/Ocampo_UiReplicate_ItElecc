import Navbar from "./Navbar";
import Header from "./Header";
import Border from "./Border";
import Search from "./Search";
import CategoryMenu from "./CategoryMenu";
import About from "./About";
import Faq from "./Faq";
import Banner from "./Banner";
import Foot from "./Foot";
import MoreFoot from "./MoreFoot";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Border />
        <Search />
      </div>
      <div className="section_container">
        <h3 className="category_title">There's something for everyone!</h3>
        <div className="content">
          <CategoryMenu />
        </div>
        <h1 className="why">Why GrabFood?</h1>
        <About />
        <Faq />
      </div>
      <Banner />
      <Foot />
      <MoreFoot />

    </>
  );
}

export default App;
