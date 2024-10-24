import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section className='px-base py-4 bg-red-500'>
				<div className='grid grid-cols-2 gap-4 bg-white rounded-2xl w-full max-w-4xl mx-auto p-4'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad blanditiis saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad blanditiis saepe.</p>
        </div>
			</section>
		</>
	);
}

export default App;
