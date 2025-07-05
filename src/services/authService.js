// services/authService.js

export const signup = async (userPayload) => {
    try {
      const response = await fetch("good-byte-backend.vercel.app/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPayload),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      return data;
    } catch (error) {
      throw new Error(error.message || "Network error");
    }
  };



  
