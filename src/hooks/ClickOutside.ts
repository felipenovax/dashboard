import { useEffect } from 'react';

export const useClickOutside = (
	ref: { current: { contains: (arg0: any) => any } },
	callback: (state: boolean) => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
};
