import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const RestaurantPage = lazy(() => import('./pages/RestaurantPage/RestaurantPage.page'));

function App() {
  const fallbackComponent = () => <div>Loading...</div>

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={fallbackComponent()}>
            <HomePage />
          </Suspense>
        </Route>
        <Route path="/restaurant">
          <Suspense fallback={fallbackComponent()}>
            <RestaurantPage />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
