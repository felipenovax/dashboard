import { ReactNode, createContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('green');

	return (
		<GlobalContext.Provider value={{ theme, setTheme }}>
			{children}
		</GlobalContext.Provider>
	);
};
