import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const DoneItemsList = ({ doneItemList, setDoneItemList, handleChange4 }) => {
	const handleRemove = (id) => {
		const removeItem = doneItemList.filter((todo) => {
			return todo.id !== id;
		});
		setDoneItemList(removeItem);
	};

	return (
		<div className="done">
			<h2>Done</h2>
			<div className="done-item">
				{doneItemList.map((doneItem, index) => {
					return (
						<li className="todo-item" key={index}>
							<p className="todo-text">{doneItem.todoItem}</p>
							<div className="btns-wrapper">
								<i
									className="btn-left"
									onClick={() => {
										handleChange4(doneItem.id);
										handleRemove(doneItem.id);
									}}
								>
									<BsFillArrowLeftCircleFill
										style={{ color: "orange", fontSize: "25px" }}
									/>
								</i>
								<i
									className="btn-delete"
									onClick={() => handleRemove(doneItem.id)}
								>
									<MdDeleteForever style={{ color: "red", fontSize: "25px" }} />
								</i>
							</div>
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default DoneItemsList;
