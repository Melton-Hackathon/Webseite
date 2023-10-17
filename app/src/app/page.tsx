import Image from 'next/image'

//import router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import components
import Header from './components/Header.tsx'


export default function Home() {
  return (
    <Router>
      <div id='app'>

        <main>
          <Switch>
            <Route exact path="/">

            </Route>
          </Switch>
        </main>

      </div>
    </Router>
  )
}
