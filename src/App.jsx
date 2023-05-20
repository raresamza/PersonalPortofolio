import './App.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {

	return (
		<>
			<div className="h-[100vh] snap-mandatory snap-y scroll-smooth overflow-y-auto no-scrollbar text-white bg-[url('./assets/bg.jpeg')]">
				<Hero />
				<Who />
				<Works />
				<Contact />
			</div>
		</>
	)
}

export default App
