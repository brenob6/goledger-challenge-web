import { Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
		<Grid
			templateAreas={`"sidebar content"`}
			gridTemplateColumns='320px 1fr'
			gridTemplateRows='100vh'
		>
			<GridItem  area='sidebar'>
			</GridItem>
			<GridItem area='content'>
			</GridItem>
		</Grid>
  )
}

export default App
