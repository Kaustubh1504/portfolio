import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "./ThemeProvider"; // Import the useTheme hook

// Define the props for the SettingsPopover component.
interface SettingsPopoverProps {
    onClose: () => void;
}

// The popover component for the theme settings.
export const SettingsPopover = ({ onClose }: SettingsPopoverProps) => {
    // Access the theme state and the setter function from the ThemeContext
    const { theme, setTheme } = useTheme();

    // Handler to change the theme and close the popover.
    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        // Save the user's choice to local storage for persistence
        localStorage.setItem('theme', newTheme);
        onClose();
    };

    // const [colorTheme, setColorTheme] = useDarkSide();
    // const [darkSide, setDarkSide] = useState(
    //     colorTheme === "light" ? true : false
    // );

    // const toggleDarkMode = (checked:any) => {
    //     // setColorTheme(colorTheme);
    //     setDarkSide(checked);
    // };



    return (
        // The popover is now positioned above the settings icon and aligned to the left.
        // We use `bottom-full` to place it just above the parent element,
        // and `left-0` to align it with the left edge of the button. A `mb-2` is added for spacing.
        <div className="absolute bottom-2 left-30 mb-2 w-52 bg-white dark:bg-[#282a2d] p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 pt-1 pb-2">Appearance</p>
            <div className="flex flex-col gap-1">
                {/* Light Mode Option */}
                <button
                    onClick={() => handleThemeChange('light')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-800 dark:text-gray-200 ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <FiSun className="h-5 w-5" />
                    <span>Light</span>
                </button>
                {/* Dark Mode Option */}
                <button
                    onClick={() => handleThemeChange('dark')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-800 dark:text-gray-200 ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <FiMoon className="h-5 w-5" />
                    <span>Dark</span>
                </button>
                {/* System Mode Option */}
                <button
                    onClick={() => handleThemeChange('system')}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-800 dark:text-gray-200 ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <FiMonitor className="h-5 w-5" />
                    <span>System</span>
                </button>
            </div>
        </div>
    );
};
