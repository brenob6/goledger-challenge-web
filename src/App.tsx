import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AlbumPage } from "./pages/AlbumPage"
import { Layout } from "./Layout"

function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<AlbumPage />}/>
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
