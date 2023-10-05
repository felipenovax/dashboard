import { useRef } from 'react';

export const AccordionItem = ({
	handleToggle,
	active,
	faq,
}: {
	handleToggle: (id: number | null) => void;
	active: number | null;
	faq: {
		id: number;
		header: string;
		text: string;
	};
}) => {
	const contentEl = useRef<HTMLDivElement>(null);
	const { header, id, text } = faq;

	return (
		<div className="rc-accordion-card">
			<header
				className={active === id ? 'active' : ''}
				onClick={() => handleToggle(id)}
			>
				<h2>{header}</h2>
				<span className="material-symbols-outlined">
					{active === id ? '-' : '+'}
				</span>
			</header>
			<div
				ref={contentEl}
				className={`collapse ${active === id ? 'show' : ''}`}
				style={{ height: active === id ? contentEl?.current?.scrollHeight : 0 }}
			>
				<p>{text}</p>
			</div>
		</div>
	);
};
