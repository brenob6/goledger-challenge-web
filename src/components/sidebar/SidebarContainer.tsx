import { Button, Flex, HStack, Icon, Spacer, Text, useBoolean } from '@chakra-ui/react'
import { IoIosAddCircle } from 'react-icons/io';
import { Playlist } from './Playlist'
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb"

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
		<Button 
			justifyContent='left'
			verticalAlign='center'
			leftIcon={<Icon as={IoIosAddCircle} boxSize='32px' />}
			colorScheme='blue'
			borderBottomRadius={0}
		>{!isCollapsed && "Nova Playlist"}</Button>
		</Flex>
	);
}
