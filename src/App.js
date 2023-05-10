import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import SingleWork from './pages/SingleWork';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/:slug" element={<SingleWork />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};
export default App;
