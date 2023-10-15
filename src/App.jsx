import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import HomeScreen from './components/Screen/HomeScreen/HomeScreen'
import {Container} from 'react-bootstrap'
function App() {

  return (
    <>
      {/* header component 
       */}
       <Header/>
     <div className="app_container">
      <SideBar />
      <Container fluid className="app_main">
      <HomeScreen/>
      </Container>
     </div>

    </>
  )
}

export default App
