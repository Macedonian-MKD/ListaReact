import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact><AllMeetups/></Route>
      <Route path="/newmeetup" exact><NewMeetup/></Route>
      <Route path="/favorites" exact><Favorites/></Route>
    </Switch>
    </Layout>
  );
}

export default App;