import React, { Component} from 'react';

export class Form extends Component {
	state = {
		tarefa: ""
	}
	
	render () {
	return (
		<div>
			<input 
				type="text"
				placeholder="Digite uma tarefa"
				onChange={(event) => 
				this.setState({tarefa: event.currentTarget.value
				})
				}
				/>
				<button
				onClick={() => this.props.onAddTarefa(this.state.tarefa)
				}
				>
				Adicionar
				</button>
		</div>
		)
	}
}