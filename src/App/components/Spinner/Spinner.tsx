import { SpinnerContainer } from './Spinner.styles';

interface ISpinner extends React.HTMLAttributes<HTMLSpanElement> {
	size?: string;
}
export const Spinner = ({ size, ...rest }: ISpinner) => {
	return <SpinnerContainer size={size} {...rest} />;
};
