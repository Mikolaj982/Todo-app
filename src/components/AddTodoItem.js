const AddTodoItem = ({ handleAdd, handleChange, todoItem, alert }) => {
	return (
		<>
			<form className="planned-form" onSubmit={handleAdd}>
				<input
					type="text"
					placeholder={
						alert ? 'Input can"t be empty' : "What do you need to do?"
					}
					onChange={handleChange}
					value={todoItem}
					className="form-input"
				></input>
				<input className="add-button" type="submit" value="add"></input>
			</form>
		</>
	);
};

export default AddTodoItem;
