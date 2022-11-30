import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const TodoItemList = ({ plannedList, handleChange2, setPlannedList }) => {
	const handleRemove = (id) => {
		const removeItem = plannedList.filter((todo) => {
			return todo.id !== id;
		});
		setPlannedList(removeItem);
	};
	return (
		<div className="planned-items">
			<ul className="planned-items">
				{plannedList.map((item, index) => {
					return (
						<li className="todo-item" key={index}>
							<p className="todo-text">{item.todoItem}</p>
							<div className="btns-wrapper">
								<i className="btn-delete" onClick={() => handleRemove(item.id)}>
									<MdDeleteForever style={{ color: "red", fontSize: "25px" }} />
								</i>

								<i
									className="btn-right"
									onClick={() => {
										handleChange2(item.id);
										handleRemove(item.id);
									}}
								>
									<BsFillArrowRightCircleFill
										style={{ color: "green", fontSize: "25px" }}
									/>
								</i>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoItemList;
