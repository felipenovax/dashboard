import styled from 'styled-components';

export const Article = styled.div`
	background: #ffffff;
	width: 400px;
	border-radius: 10px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 35px;
		padding: 0 10px 0 20px;
		border-radius: 6px;
		background: var(--primary);
		margin-bottom: 10px;
		color: #f8f8f8;
		cursor: pointer;
	}

	h2 {
		margin: 0;
		font-size: 16px;
		font-weight: 500;
	}

	p {
		padding: 0 20px 10px;
		line-height: 1.7;
		font-size: 14px;
	}

	span {
		transition: 0.3s;
	}

	.collapse {
		position: relative;
		height: 0;
		overflow: hidden;
		transition: height 0.5s ease;
	}

	.collapse.show {
		height: auto;
	}
`;
