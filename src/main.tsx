import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalProvider } from './Contexts/Global.tsx';
import GlobalStyle from './Styles/global.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalProvider>
			<GlobalStyle $theme="blue" />
			<App />
		</GlobalProvider>
	</React.StrictMode>,
);
