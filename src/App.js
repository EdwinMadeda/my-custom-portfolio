import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './layouts/Landing';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
};
export default App;
