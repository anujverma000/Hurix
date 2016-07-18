import React from 'react'
import AppContainer from '../containers/AppContainer'
import VisibleApp from '../containers/VisibleApp'
import Result from '../containers/Result'
import Footer from './Footer'

const App = () => (
  <div>
    <AppContainer />
    <VisibleApp />
    <Result />
    <Footer />
  </div>
)

export default App