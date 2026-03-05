/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import './i18n';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import DestinationDetail from './pages/DestinationDetail';
import Destinations from './pages/Destinations';
import Excursions from './pages/Excursions';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Login from './pages/Login';
import Stays from './pages/Stays';

import MapPage from './pages/MapPage';
import Profile from './pages/Profile';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return children;
}


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="map" element={<MapPage />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/:slug" element={<DestinationDetail />} />
            <Route path="guides" element={<Guides />} />
            <Route path="excursions" element={<Excursions />} />
            <Route path="stays" element={<Stays />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="trip-generator" element={<TripGenerator />} />
            <Route path="trip/:slug" element={<TripDetail />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
