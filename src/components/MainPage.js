import React from "react";
import { useState, useEffect } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItemList from "./TodoItemList";
import InProgressList from "./InProgressList";
import DoneItemList from "./DoneItemList";
import Navbar from "./Navbar";

export default function MainPage() {
	const [plannedList, setPlannedList] = useState([]);
	const [todoItem, setTodoItem] = useState("");
	const [todoItemId, setTodoItemId] = useState(0);
	const [inProgressList, setInProgressList] = useState([]);
	const [inProgressItem] = useState("");
	const [doneItemList, setDoneItemList] = useState([]);
	const [doneItem, setDoneItem] = useState("");
	const [alert, setAlert] = useState(false);

	const handleChange = (e) => {
		setTodoItem(e.target.value);
	};

	const handleChange2 = (plannedItemId) => {
		setInProgressList([
			...inProgressList,
			plannedList.find((item) => item.id === plannedItemId),
		]);
	};

	const handleChange3 = (inProgressItemId) => {
		setDoneItemList([
			...doneItemList,
			inProgressList.find((item) => item.id === inProgressItemId),
		]);
	};

	const handleChange4 = (doneItemId) => {
		setInProgressList([
			...inProgressList,
			doneItemList.find((item) => item.id === doneItemId),
		]);
	};

	const handleChange5 = (inProgressItemId) => {
		setPlannedList([
			...plannedList,
			inProgressList.find((item) => item.id === inProgressItemId),
		]);
	};

	const handlePlannedList = (e) => {
		e.preventDefault();
		if (todoItem.trim().length !== 0) {
			setPlannedList((list) => [...list, { todoItem, id: todoItemId }]);
			setTodoItemId((todoItemId) => todoItemId + 1);
			setTodoItem("");
			setAlert(false);
		} else {
			setAlert(true);
		}
	};

	useEffect(() => {
		const plannedItems = JSON.parse(localStorage.getItem("planned-items"));
		const inProgressItems = JSON.parse(
			localStorage.getItem("in-progress-items")
		);
		const doneItems = JSON.parse(localStorage.getItem("done-items"));
		if (plannedItems || inProgressItems || doneItems) {
			setPlannedList(plannedItems);
			setInProgressList(inProgressItems);
			setDoneItemList(doneItems);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("planned-items", JSON.stringify(plannedList));
		localStorage.setItem("in-progress-items", JSON.stringify(inProgressList));
		localStorage.setItem("done-items", JSON.stringify(doneItemList));
	}, [plannedList, inProgressList, doneItemList]);

	return (
		<div className="main-page-container">
			<Navbar />
			<div className="wrapper">
				<div className="planned">
					<h2>Planned</h2>
					<AddTodoItem
						handleAdd={handlePlannedList}
						handleChange={handleChange}
						todoItem={todoItem}
						alert={alert}
					/>
					<TodoItemList
						plannedList={plannedList}
						handleChange2={handleChange2}
						setPlannedList={setPlannedList}
					/>
				</div>
				<InProgressList
					inProgressList={inProgressList}
					inProgressItem={inProgressItem}
					setInProgressList={setInProgressList}
					setDoneItem={setDoneItem}
					handleChange3={handleChange3}
					handleChange5={handleChange5}
				/>
				<DoneItemList
					doneItemList={doneItemList}
					setDoneItemList={setDoneItemList}
					doneItem={doneItem}
					handleChange4={handleChange4}
				/>
			</div>
		</div>
	);
}
