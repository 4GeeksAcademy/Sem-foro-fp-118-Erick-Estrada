import React, { useState } from "react";

import Color from "./color";

const Home = () => {
	const [activeColor, setActiveColor] = useState("");
	return (
		<div id="semaforo" className="text-center d-flex justify-content-center bg-dark p-3 rounded-5">
			<div >
				<Color color="danger" active={activeColor === "danger"} render={() => setActiveColor("danger")} />
				<Color color="warning" active={activeColor === "warning"} render={() => setActiveColor("warning")} />
				<Color color="success" active={activeColor === "success"} render={() => setActiveColor("success")} />
			</div>
		</div>
	);
};

export default Home;