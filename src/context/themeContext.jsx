import { createContext, useState } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Provider component
export const ThemeContextProvider = ({ children }) => {
    // Initial theme state
    const [theme, setTheme] = useState({
        name: "theme-green", // Default theme name
        color: "#299D91",   // Default theme color
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};