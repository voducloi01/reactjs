import { useRef, useState } from "react";

function Content() {
	const [count, setCount] = useState(60);

	const item = useRef();
	const hadlestart = () => {
		item.current = setInterval(() => {
			setCount((prve) => prve - 1);
		}, 100);
	};
	const hadlestop = () => {
		clearInterval(item.current);
	};

	return (
		<div>
			<h1> {count}</h1>
			<button onClick={hadlestart}> start</button>
			<button onClick={hadlestop}> stop</button>
		</div>
	);
}

export default Content;
