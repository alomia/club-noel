import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import CustomCarousel from '../Carousel/CustomCarousel';
import CustomNavbar from '../Navbar/CustomNavbar';
import CustomTable from '../Table/CustomTable';
import VideoSection from '../VideoSection/VideoSection';

function App() {
  return (
    <>
      <CustomNavbar />
      <CustomCarousel />
      <VideoSection />
      <CustomTable />
    </>
  )
}

export default App
