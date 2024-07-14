import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts';
import Routings from './router';

function App() {
  return (
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  );
}

export default App;
