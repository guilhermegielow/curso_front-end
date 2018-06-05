import React, { Component } from 'react';
import { List } from './List';
import { Footer } from './Footer';
import { Form } from './Form';
export type todoItem = {
	id: string,
	text:string,
	done:boolean
}
type initStateType = {
			todoList: Array<todoItem>
}
const initState = {
	todoList: [{
				id:"23232",
				text: "teste",
				done: true
	}],
}
export class Todo extends Component{
	state : initStateType = initState;
	onAddTarefa = (text) => {
		let newTarefa = {id: (Math.random() * 1).toString(),
				text,
				done: false
				}
		this.setState({
			todoList: [
				...this.state.todoList,
				newTarefa
			]
		})
	}

	onCheckboxClick = (itemId) => {
		const itemParaAlterar = 
			this.state.todoList.map(item => { 
				if (item.id == itemId) {
					return {
						...item,
						done: !item.done
					}
				}
				return item;
			});
		this.setState({todoList:itemParaAlterar});
	}

	render() {
		const {todoList} = this.state;
		const feitas = todoList.filter(item => item.done);
		
		return(
			<div>
				<Form
					onAddTarefa={this.onAddTarefa}
				/>
				<List
					list={todoList}
					onCheckboxClick={this.onCheckboxClick}
				/>
				<Footer
					feitas={feitas.length}
					faltam={todoList.length - feitas.length}
				/>
			</div>
		)
	}
}
