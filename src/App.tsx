import { BrowserRouter } from 'react-router-dom'
import './App.css'
import BottomNavbar from './components/BottomNavbar'
import Container from './components/Container'
import Routes from './components/Routes'
import GlobalStyle from './globalStyle'
import { routeConfig } from './routeConfig'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Container maxWidth={500} padding={20}>
          <Routes routeConfig={routeConfig} />
          <BottomNavbar maxWidth={500} padding={20} />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
