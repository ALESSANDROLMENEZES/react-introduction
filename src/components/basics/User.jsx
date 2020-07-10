import React from 'react';
import If from './../condition/If.js';

export default props => {
	return (
		<div>
			<If test={props.user && props.user.name}>
				<h4>Seja bem vindo <strong>{props.user.name}</strong></h4>
			</If>
			<If test={!props.user || !props.user.name}>
				<h4>Seja bem vindo <strong>Anônimo</strong></h4>
			</If>
		</div>
	)
}