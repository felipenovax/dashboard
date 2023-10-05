import { createGlobalStyle } from 'styled-components';

const colors = {
	green: {
		primary: '#8dc63f',
		'primary-100': '#ddeec6',
		'primary-hover': '#8dc63f17',
	},
	blue: {
		primary: '#5082C2',
		'primary-100': '#89B7FB',
		'primary-hover': '#5082c217',
	},
	purple: {
		primary: '#783fc6',
		'primary-100': '#A188BB',
		'primary-hover': '#FDEAFF',
	},
};

type ThemeProps = {
	$theme: 'purple' | 'green' | 'blue';
};

export default createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
		--form-control-color: rebeccapurple;
  	--form-control-disabled: #959495;

    --primary: ${({ $theme }) => colors[$theme].primary};
		--primary-100: ${({ $theme }) => colors[$theme]['primary-100']};
		--primary-hover: ${({ $theme }) => colors[$theme]['primary-hover']};
		--form-control-disabled: #959495;
    --zindex-default: 1010;
    --zindex-dropdown: 1010;
    --zindex-sticky: 1020;
    --zindex-fixed: 1030;
    --zindex-drawer-backdrop: 1040;
    --zindex-drawer: 1050;
    --zindex-modal-backdrop: 1060;
    --zindex-modal: 1070;
    --zindex-popover: 1080;
    --zindex-tooltip: 1090;

    font-size: 100%;
  }

  :root {
		font-family: 'Nunito', sans-serif;
		line-height: 1.5;
		color-scheme: light dark;
		color: #49505b;
		background-color: #fafafa;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	a {
		text-decoration: inherit;
	}

	body {
		height: 100vh;
		overflow-y: hidden;
		margin: 0;
	}

	p {
		margin: 0;
	}
`;
