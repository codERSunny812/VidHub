import Header from './Component/Header/Header'
import SIdeBar from './Component/SideBar/SIdeBar'
import {Container} from 'react-bootstrap'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_App.scss'
function App() {

  return (
    <>
     {/* header component */}
      <Header/>
      <div className="app_container border border-info">

      {/* side bar component */}
    <SIdeBar/>

    <Container fluid className="app_main border border-warning">
     <HomeScreen/>
    </Container>


      {/* category component */}


    {/* videos components */}
    </div>
    </>
  )
}

export default App
