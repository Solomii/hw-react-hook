import React from "react";
import { Routes, Route} from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogsPage } from './pages/BlogsPage';
import { Profile } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from './pages/NotFoundPage';

import { Layout } from "./components/Layout";
import { AuthProvider } from "./context/AuthProvider";
import {RequireAuth} from "./context/RequireAuth"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<BlogsPage />} />
          <Route path="profile" element={
            <RequireAuth>
               <Profile />
            </RequireAuth>
            }
            />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ AuthProvider>
  );
}

export default App;
