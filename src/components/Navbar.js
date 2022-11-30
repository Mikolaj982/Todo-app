const Navbar = () => {
	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<nav className="navbar">
			<h1>Todo list</h1>
			<span className="timer">{date}</span>
		</nav>
	);
};
export default Navbar;
