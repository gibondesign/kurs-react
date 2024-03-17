import ReactDOM from 'react-dom/client'

const currentDate = new Date()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const formatedHours = hours > 10 ? hours : `0${hours}`
const formatedMinutes = minutes > 10 ? minutes : `0${minutes}`

const dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
const monthName = [
	'stycznia',
	'lutego',
	'marca',
	'kwietnia',
	'maja',
	'czerwca',
	'lipca',
	'sierpnia',
	'września',
	'października',
	'listopada',
	'grudnia',
]

const weekDay = dayName[currentDate.getDay()]
const monthDay = currentDate.getDate()
const month = monthName[currentDate.getMonth()]
const year = currentDate.getFullYear()

const timer = (
	<p>
		{weekDay}, {monthDay} {month} {year}, godzina: {formatedHours}:{formatedMinutes}
	</p>
)

ReactDOM.createRoot(document.getElementById('root')).render(timer)


