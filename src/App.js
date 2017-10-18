import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './MyAwesomeReactComponent'
import AppBar from './components/appbar'
import GridList from './components/gridlist'
import Header from './components/header'
import StartupHero from './components/startuphero'

const App = () => (
  <MuiThemeProvider>
    <AppBar />
    <StartupHero />
    <Header />
    <MyAwesomeReactComponent />
    <GridList />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
