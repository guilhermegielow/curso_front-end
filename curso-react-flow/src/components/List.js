import React from 'react';
import {type todoItem} from './Todo';

type Props = {
	list: Array<todoItem>
}

export const List = ({list, onCheckboxClick} : Props) => {
	const todoListRender = list.map(item => {
		return(
			<div key={item.id}>
				<input type="checkbox" 
				checked={item.done}
				onClick={() => onCheckboxClick(item.id)}
				/>
				{item.text}
			</div>
			)
	})
	return (
		todoListRender
		)
	}