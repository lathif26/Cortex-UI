import CoverImageCtn from './components/CoverImage';
import Footer from './components/Footer';
import MenuList from './components/MenuList';
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
function App() {
  return (
    <div className="w-[99.99%] flex flex-col overflow-x-hidden">
     <Navbar/>
     <TitleBar />
     <MenuList />
     <CoverImageCtn />
     <Footer/>
    </div>
  );
}

export default App;
