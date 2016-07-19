import React from 'react'
import Header from './Header'
import AppContainer from '../containers/AppContainer'
import VisibleApp from '../containers/VisibleApp'
import Result from '../containers/Result'
import Footer from './Footer'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <div className="app-panel">
        <AppContainer />
        <VisibleApp />
      </div>
      <Result />
    </div>
    <Footer />
  </div>
)

export default App