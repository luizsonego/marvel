import { BrowserRouter, Route } from 'react-router-dom'
import Index from './Pages'
import Profile from './Pages/Profile'


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/profile/:id" exact component={Profile} />
    </BrowserRouter>
  )
}

export default Routes