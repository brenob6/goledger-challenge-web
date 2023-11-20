import { Button, Flex, HStack, Icon, Spacer, Text, useBoolean, useColorMode } from '@chakra-ui/react';
import { Playlist } from './Playlist';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { CreatePlaylistButton } from './CreatePlaylistButton';
import { GiMusicalScore } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export function Sidebar() {

	const [isCollapsed, setCollapse] = useBoolean()
	const { colorMode, toggleColorMode } = useColorMode()
	const navigate = useNavigate()

	return (
		<Flex 
			flexDir='column'
			gap={5}
			borderRightWidth={1} 
			borderColor='teal.500' 
			top={0}
			h='100vh'
			position='sticky'
			boxShadow='md'
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

		<HStack
			onClick={() => { navigate('/') }}
			cursor='pointer'
			w='auto'
		>
			<Icon 
				as={GiMusicalScore}
				boxSize={8}
				ml={4}
			/>
			<Text as='b' fontSize='lg' hidden={isCollapsed}>Todas as Músicas </Text>
		</HStack>

		<Playlist isCollapsed={isCollapsed} />
		<Spacer />
		<Button
			onClick={toggleColorMode}
				leftIcon={
					<Icon as={ colorMode === 'light' ? MdDarkMode : MdLightMode}
						boxSize='32px'
					/>}
			justifyContent='left'
			borderRadius={0}
		>
				{!isCollapsed && "Modo " }
				{!isCollapsed && (colorMode === 'light' ? 'Escuro' : 'Claro')}
			</Button>
		<CreatePlaylistButton isCollapsed={isCollapsed}/>
		</Flex>
	);
}
