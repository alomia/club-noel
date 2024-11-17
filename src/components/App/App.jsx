import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import CustomCarousel from '../Carousel/CustomCarousel';
import CustomNavbar from '../Navbar/CustomNavbar';
import CustomTable from '../Table/CustomTable';


function App() {
  return (
    <>
      <CustomNavbar />
      <CustomCarousel />
      <CustomTable />
    </>
  )
}

export default App
