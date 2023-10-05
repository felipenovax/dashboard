import { Backdrop, Container } from './Drawer.styles';
export const Drawer = ({
	children,
	visible,
	width,
	onClose,
}: {
	visible: boolean;
	children: any;
	width?: string;
	onClose: (state: boolean) => void;
}) => {
	return (
		<>
			{visible && <Backdrop onClick={() => onClose(false)} />}
			<Container open={visible} width={width}>
				{visible && children}
			</Container>
		</>
	);
};
