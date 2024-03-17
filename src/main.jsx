import ReactDOM from 'react-dom/client'
import { Link } from './components/link'

const element = (
	<>
		<h1>Nasza strona</h1>
		<main>
			<Link />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis eligendi et iure distinctio repudiandae
				atque corrupti! Esse, ullam quidem?
			</p>
			<Link />
		</main>
	</>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
