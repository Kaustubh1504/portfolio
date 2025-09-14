import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

// Define the type for the theme context value.
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Create the React Context with a default value of null.
const ThemeContext = createContext<ThemeContextType | null>(null);

// Create a custom hook to easily access the theme context with a type guard.
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

// Define the props for the ThemeProvider component.
interface ThemeProviderProps {
    children: ReactNode;
}

// The main ThemeProvider component that manages the theme state.
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // State to hold the current theme: 'light', 'dark', or 'system'
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        // Function to determine the theme based on the current state and system preference.
        const applyTheme = (currentTheme: string) => {
            const isDarkMode = currentTheme === 'dark' || (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
            
            // Add or remove the 'dark' class on the HTML element.
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        // Try to get the theme from local storage.
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            // If no theme is saved, use the system preference by default.
            applyTheme('system');
        }

        // Set up a listener for system theme changes if the theme is set to 'system'
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleSystemChange);
        
        // Cleanup the event listener when the component unmounts.
        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
