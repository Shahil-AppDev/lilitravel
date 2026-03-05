/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import './i18n';
import About from './pages/About';
import AdminBookings from './pages/AdminBookings';
import Dashboard from './pages/Dashboard';
import DestinationDetail from './pages/DestinationDetail';
import Destinations from './pages/Destinations';
import Excursions from './pages/Excursions';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Login from './pages/Login';
import PlannedTripDetail from './pages/PlannedTripDetail';
import Planner from './pages/Planner';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Stays from './pages/Stays';
import TripDetail from './pages/TripDetail';
import TripGenerator from './pages/TripGenerator';

import { ThemeProvider } from './context/ThemeContext';
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
      <ThemeProvider>
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
            <Route path="properties" element={<Properties />} />
            <Route path="properties/:id" element={<PropertyDetail />} />
            <Route
              path="admin/bookings"
              element={
                <ProtectedRoute>
                  <AdminBookings />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="trip-generator" element={<TripGenerator />} />
            <Route path="trip/:slug" element={<TripDetail />} />
            <Route path="planner" element={<Planner />} />
            <Route path="trips/:slug" element={<PlannedTripDetail />} />
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
