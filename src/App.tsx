import { Grid, GridItem } from '@chakra-ui/react'
import { Sidebar } from './components/sidebar/SidebarContainer'
import { CardGrid } from './components/cards/CardGrid'

function App() {

  return (
		<Grid
			templateAreas={`"sidebar content"`}
			gridTemplateColumns='320px 1fr'
			gridTemplateRows='100vh'
		>
			<GridItem  area='sidebar'>
				<Sidebar />
			</GridItem>
			<GridItem  area='content'>
				<CardGrid />
			</GridItem>
		</Grid>
  )
}

export default App
