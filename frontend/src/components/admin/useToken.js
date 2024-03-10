import { useMemo } from 'react';
import { jwtDecode } from 'jwt-decode';

// Custom hook to get the decoded token
const useToken = () => {
  const token = localStorage.getItem('token');
  const user = useMemo(() => {
    // Check if there is a token
    if (token) {
      try {
        // Decode it and return the user data
        const decoded = jwtDecode(token);
        // console.log('Decoded token', decoded);
        return decoded;
      } catch (error) {
        // If error in decoding, token might be invalid or expired
        console.error('Failed to decode token', error);
        return null;
      }
    }
    // If no token, return null
    return null;
  }, [token]); // Depend on the token

  return user;
};

export default useToken;
