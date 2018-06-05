import React from 'react';

export const Footer = ({feitas, faltam}) => {
	return (
		<div>
		<span>Faltam: {faltam} </span>
		<span>Feitas: {feitas} </span>
		</div>
		)
}