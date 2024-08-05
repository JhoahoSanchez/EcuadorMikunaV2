import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

class RouterManager {
  constructor() {
    this.routes = [];
    this.protectedRoutes = [];
  }

  addRoute(path, element) {
    this.routes.push({ path, element });
  }

  addProtectedRoute(path, element, isAuthenticated) {
    this.protectedRoutes.push({ path, element, isAuthenticated });
  }

  getRoutes() {
    return (
      <Routes>
        {this.routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {this.protectedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute isAuthenticated={route.isAuthenticated}>
                {route.element}
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    );
  }
}

export default RouterManager;
