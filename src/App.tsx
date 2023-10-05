import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { Layout } from './App/Layout/Layout';
import { Accordion } from './App/components/Accordion/Accordion';
import { Autocomplete } from './App/components/Autocomplete/Autocomplete';
import { Button } from './App/components/Button/Button';
import { Chip } from './App/components/Chip/Chip';
import { Drawer } from './App/components/Drawer/Drawer';
import { InputField } from './App/components/InputField/InputField';
import { Select } from './App/components/Select/Select';
import { Stepper } from './App/components/Stepper/Stepper';
import { Table } from './App/components/Table/Table';
import { Tabs } from './App/components/Tabs/Tabs';

function App() {
	const [open, setOpen] = React.useState(false);
	const img =
		'data:image/jpeg;base64,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';

	return (
		<Layout>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					gap: '20px',
					margin: '10px 0',
				}}
			>
				{/* <iframe src="/src/card/index.html" width="485px" height="1000px" /> */}
				<Button
					loading={false}
					disabled={false}
					size="small"
					leftIcon={<BiCalendar />}
					variant="primary"
					onClick={() => setOpen(!open)}
				>
					Teste de Botao
				</Button>
				<Button
					loading={false}
					disabled={false}
					leftIcon={<BiCalendar />}
					variant="primary"
				>
					Teste de Botao
				</Button>
				<Button
					loading={false}
					disabled={false}
					size="large"
					leftIcon={<BiCalendar />}
					variant="primary"
				>
					Teste de Botao
				</Button>
				<Button
					size="small"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="medium"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="large"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="small"
					variant="label"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="medium"
					variant="label"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="large"
					variant="label"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="small"
					variant="link"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="medium"
					variant="link"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Button
					size="large"
					variant="link"
					loading={false}
					disabled={false}
					rightIcon={<BiCalendar />}
				>
					Teste de Botao
				</Button>
				<Accordion />
				<Stepper
					onChange={(index) => console.log(index)}
					active={1}
					steps={[
						{ id: 1, label: 'teste 1' },
						{ id: 2, label: 'teste 2' },
						{ id: 3, label: 'teste 3' },
						{ id: 4, label: 'teste 4' },
					]}
				/>
				<Autocomplete label="Autocomplete" />
				<Tabs
					options={[
						{
							label: 'Active',
							id: 'tab1',
							amount: 10,
						},
						{
							label: 'Archived',
							id: 'tab2',
							amount: 20,
						},
						{
							label: 'Batata frita',
							id: 'tab3',
							amount: 20,
						},
						{
							label: 'Estudios medicos',
							id: 'tab4',
							amount: 450,
						},
					]}
				/>

				<div
					style={{
						display: 'flex',
						gap: '12px',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<InputField
						label="Search"
						type="search"
						placeholder="Search for clients"
						value=""
						onChange={(value: any) => console.log(value)}
					/>
					<div style={{ display: 'flex', gap: '10px' }}>
						<Select />
						<Button leftIcon={<BiCalendar />}>
							Jan 6, 2022 - Jan 13, 2023
						</Button>
						<Select />
					</div>
				</div>

				<Table
					headers={[
						{ key: 'client', value: 'Client', width: '190px' },
						{ key: 'ref', value: 'Case ref', width: '100px' },
						{ key: 'opened', value: 'Opened at', width: '200px' },
						{ key: 'date', value: 'Date', width: '200px' },
						{ key: 'source', value: 'Source', width: '200px' },
						{ key: 'provider', value: 'Provider', width: '200px' },
						{ key: 'services', value: 'Services', width: '200px' },
						{ key: 'value', value: 'Value', width: '90px' },
					]}
					rows={[
						{
							client: (
								<div
									key="Joao Vicente"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Joao Vicente</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'LinkedIn',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip variant="primary">Node</Chip>
									<Chip variant="secondary">Svelte</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Maria José"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Maria José</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'Facebook',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Marcio Ribeiro"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Marcio Ribeiro</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'Instagram',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Angular</Chip>
									<Chip variant="secondary">JQuery</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Thiago Abravanel"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Thiago Abravanel</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'Google',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Dorote Menezes"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Dorote Menezes</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'GitHub',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Paulo Ricardo"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Paulo Ricardo</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'Azure',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Benedito Gonçalvez"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Benedito Gonçalvez</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'Email',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
						{
							client: (
								<div
									key="Benito Soares"
									style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
								>
									<img
										src={img}
										style={{ borderRadius: '50%' }}
										width="25px"
										height="25px"
										className="avatar"
									/>
									<div style={{ display: 'grid' }}>
										<span>Benito Soares</span>
										<strong>1234-52326</strong>
									</div>
								</div>
							),
							ref: 'CC/80564',
							opened: '04/07/2023',
							date: '01/07/2023',
							source: 'LinkedIn',
							provider: 'CC/DGM',
							services: (
								<div style={{ display: 'flex', gap: '4px' }}>
									<Chip>Vue</Chip>
									<Chip variant="secondary">Angular</Chip>
									<Chip variant="tertiary">React</Chip>
								</div>
							),
							value: 'R$ 1.000,00',
						},
					]}
				/>
				<Select />
				<Drawer visible={open} onClose={() => setOpen(false)}>
					<h1>teste</h1>
				</Drawer>
			</div>
		</Layout>
	);
}

export default App;
