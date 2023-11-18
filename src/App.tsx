import { Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Sidebar } from './components/sidebar/SidebarContainer'
import { CardGridAlbum } from './components/cards/CardGridAlbum'
import { CardGridSong } from './components/cards/CardGridSong'

function App() {

  return (
		<Grid
			templateAreas={`"sidebar content"`}
			gridTemplateColumns='min-content 1fr'
		>
			<GridItem  area='sidebar'>
				<Sidebar />
			</GridItem>
			<GridItem  area='content'>
				<Tabs isFitted variant='enclosed'>
					<TabList>
						<Tab>
							<Text as='b'>Álbuns</Text>
						</Tab>
						<Tab>
							<Text as='b'>Músicas</Text>
						</Tab>
						<Tab>
							<Text as='b'>Artistas</Text>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<CardGridAlbum />
						</TabPanel>
						<TabPanel>
							<CardGridSong />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</GridItem>
		</Grid>
  )
}

export default App
