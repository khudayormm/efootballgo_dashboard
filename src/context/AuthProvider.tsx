import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: number;
  username: string;
  // Add more user properties here as needed
}

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: { username: string, password: string }) => void;
  logout: () => void;
}

// Create a context for authentication
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if the user is already authenticated (e.g., by verifying a token in local storage)
    // Set the user and setLoading accordingly
    // Example: const token = localStorage.getItem('token');
    // Perform token verification logic here
    // setUser(resultFromTokenVerification);
    setLoading(false);
  }, []);

  const login = (userData: { username: string, password: string }) => {
    // Implement your login logic here (e.g., sending a request to your API)
    // Update the user state with the authenticated user data
    // Example: axios.post('/api/login', userData)
    //   .then((response) => {
    //     setUser(response.data.user);
    //     localStorage.setItem('token', response.data.token);
    //   })
    //   .catch((error) => {
    //     console.error('Login error:', error);
    //   });
  };

  const logout = () => {
    // Implement your logout logic here (e.g., clearing local storage)
    // Update the user state to null
    // Example: localStorage.removeItem('token');
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
