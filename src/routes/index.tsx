import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Room } from "../pages/Room";
import { Forgot } from "../pages/Forgot";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";

import { RoomList } from "../pages/Rooms";
import ProtectedRoute from "../components/Protect";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Room />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rooms"
        element={
          <ProtectedRoute>
            <RoomList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
