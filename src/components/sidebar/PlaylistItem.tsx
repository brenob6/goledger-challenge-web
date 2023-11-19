import { Divider, Flex, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa6"
import { BsFillExplicitFill } from "react-icons/bs"
import { useAsset } from "../../hooks/useAsset";
import { AlbumText } from "../AlbumText";

interface PlaylistItemProps {
	_key: string
}

export function PlaylistItem({_key}: PlaylistItemProps) {
	const { data, error, isLoading } = useAsset("song", _key)	
	return(
		<>
		<Flex 
			justifyContent='start'
			alignItems='center'
			gap={3}
			cursor='default'
			borderRadius='md'
			padding={2}
			_hover={{bg:'whiteAlpha.50'}}
		>
			<Icon as={FaMusic}/>
			<VStack alignItems='left'>
				<Text>
					{data?.explicit && <Icon as={BsFillExplicitFill} boxSize={3}/>}
					{" "}
					{data?.title}
				</Text>
				<Text as='sup'> Nome do Artista </Text>
			</VStack>
			<Spacer />
			<AlbumText _key={_key}/>
		</Flex>
		<Divider />
		</>
	)
}
