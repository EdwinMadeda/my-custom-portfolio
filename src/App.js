import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './layouts/Landing';
import SingleWork from './components/pages/Works/Single';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/works/:slug" element={<SingleWork />} />
      </Route>
    </Routes>
  );
};
export default App;
