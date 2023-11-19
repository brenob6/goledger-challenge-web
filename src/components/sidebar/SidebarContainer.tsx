import { Flex, HStack, Icon, Spacer, Text, useBoolean } from '@chakra-ui/react'
import { Playlist } from './Playlist'
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb"
import { AddPlaylistButton } from './AddPlaylistButton';

export function Sidebar() {

	const [isCollapsed, setCollapse] = useBoolean()

	return (
		<Flex 
			flexDir='column'
			gap={5}
			borderRightWidth={1} 
			borderColor='teal.500' 
			top={0}
			h='100vh'
			position='sticky'
			>
		<HStack>
			<Icon 
				cursor='pointer'
				onClick={setCollapse.toggle}
				as={isCollapsed ? TbLayoutSidebarRightCollapseFilled : TbLayoutSidebarLeftCollapseFilled}
				boxSize={10}
				ml={3}
			/>
			<Text as='b' fontSize='lg' hidden={isCollapsed}> Gopher HiFi </Text>
		</HStack>
		<Playlist isCollapsed={isCollapsed} />
		<Spacer />
		<AddPlaylistButton isCollapsed={isCollapsed}/>
		</Flex>
	);
}
