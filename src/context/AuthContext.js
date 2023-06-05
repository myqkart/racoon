import React, { createContext, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const contextValue = {
        isLoggedIn, setIsLoggedIn
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};