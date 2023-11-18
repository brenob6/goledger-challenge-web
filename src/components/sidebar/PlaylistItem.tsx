import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa6"
import { BsFillExplicitFill } from "react-icons/bs"

export function PlaylistItem() {
	return(
		
		<Flex justifyContent='start' alignItems='center' gap={3}>
			<Icon as={FaMusic}/>
			<VStack alignItems='left'>
				<Text>Nome da musica</Text>
				<Text as='sup'>Nome do Artista</Text>
			</VStack>
			<Icon as={BsFillExplicitFill} boxSize={3} mt="auto"/>
			<Text ml={3}>Nome do album</Text>
		</Flex>
	)
}
