import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { PlaylistPage } from "./pages/PlaylistPage"
import { SongPage } from "./pages/SongPage"

function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<SongPage />}/>
					<Route path="playlist/:_key" element={<PlaylistPage />}/>
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
