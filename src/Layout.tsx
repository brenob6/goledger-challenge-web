import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "./components/sidebar/SidebarContainer";
import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<Grid
			templateAreas={`"sidebar content"`}
			gridTemplateColumns='min-content 1fr'
		>
			<GridItem  area='sidebar'>
				<Sidebar />
			</GridItem>
			<GridItem  area='content' >
				<Outlet />
			</GridItem>
		</Grid>
	)
}
