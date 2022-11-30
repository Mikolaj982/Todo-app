import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const InProgressList = ({
	inProgressList,
	setInProgressList,
	handleChange3,
	handleChange5,
}) => {
	const handleRemove = (id) => {
		const removeItem = inProgressList.filter((todo) => {
			return todo.id !== id;
		});
		setInProgressList(removeItem);
	};

	return (
		<div className="in-progress">
			<h2>In progress</h2>
			<div className="in-progress-item">
				<div className="in-progress-items">
					{inProgressList.map((inProgressItem, index) => {
						return (
							<li className="todo-item" key={index}>
								<p className="todo-text">{inProgressItem.todoItem}</p>
								<div className="btns-wrapper">
									<i
										className="btn-delete"
										onClick={() => handleRemove(inProgressItem.id)}
									>
										<MdDeleteForever
											style={{ color: "red", fontSize: "25px" }}
										/>
									</i>
									<i
										className="btn-left"
										onClick={() => {
											handleChange5(inProgressItem.id);
											handleRemove(inProgressItem.id);
										}}
									>
										<BsFillArrowLeftCircleFill
											style={{ color: "orange", fontSize: "25px" }}
										/>
									</i>
									<i
										className="btn-right"
										onClick={() => {
											handleChange3(inProgressItem.id);
											handleRemove(inProgressItem.id);
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
				</div>
			</div>
		</div>
	);
};
export default InProgressList;
