import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  LandingPage,
  Signup,
  Chat,
  Login,
  Validate,
  Dashboard,
  Apointment,
  History,
  Profile,
  Support,
  Logout,
  UniqueChat,
} from "./pages/";

import { AuthProvider } from "./contexts";
import PrivateRoute from "./components/private-route";
import { Emergency, UniqueEmergency } from "./pages/emergency";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/validate" element={<Validate />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute Component={<Dashboard />} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute Component={<Profile />} />}
            />
            <Route
              path="/appointment"
              element={<PrivateRoute Component={<Apointment />} />}
            />
            <Route
              path="/history"
              element={<PrivateRoute Component={<History />} />}
            />
            <Route
              path="/chat"
              element={<PrivateRoute Component={<Chat />} />}
            />

            <Route 
              path="/chats/:chatId"
              element={<UniqueChat/>}
            />

            <Route 
              path="/emergency/:uniqueId"
              element={<UniqueEmergency/>}
            />
              

            <Route
              path="/support"
              element={<PrivateRoute Component={<Support />} />}
            />

            <Route
              path="/emergency"
              element={<Emergency />} 
            />
            
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
};

export default App;
