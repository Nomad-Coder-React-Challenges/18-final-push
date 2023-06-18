import { Suspense } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import HomePage from '#pages/home';

const Router = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
