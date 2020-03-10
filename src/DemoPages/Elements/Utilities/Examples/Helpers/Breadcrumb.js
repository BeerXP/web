import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbExample = props => {
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbItem active>Home</BreadcrumbItem>
			</Breadcrumb>
			<Breadcrumb>
				<BreadcrumbItem>
					<a href='#top'>Home</a>{' '}
				</BreadcrumbItem>
				<BreadcrumbItem active>Library</BreadcrumbItem>
			</Breadcrumb>
			<Breadcrumb>
				<BreadcrumbItem>
					<a href='#top'>Home</a>{' '}
				</BreadcrumbItem>
				<BreadcrumbItem>
					<a href='#top'>Library</a>{' '}
				</BreadcrumbItem>
				<BreadcrumbItem active>Data</BreadcrumbItem>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbExample;
