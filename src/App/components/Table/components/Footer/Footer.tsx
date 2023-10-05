import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Button } from '../../../Button/Button';
import { Container } from './Footer.styles';

export const Footer = () => {
	return (
		<Container>
			<Button leftIcon={<BiLeftArrowAlt />}>Previous</Button>
			<div style={{ display: 'flex', alignItems: 'self-end', gap: '10px' }}>
				<Button variant="label">1</Button>
				<Button variant="label">2</Button>
				<Button variant="label">3</Button>
				<span>...</span>
				<Button variant="label">15</Button>
				<Button variant="label">16</Button>
				<Button variant="label">17</Button>
			</div>
			<Button rightIcon={<BiRightArrowAlt />}>Next</Button>
		</Container>
	);
};
