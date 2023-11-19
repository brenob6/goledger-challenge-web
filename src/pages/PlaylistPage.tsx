import { Box, Text, VStack } from "@chakra-ui/react";
import { PlaylistItem } from "../components/sidebar/PlaylistItem";
import { useAsset } from "../hooks/useAsset";
import { useParams } from "react-router-dom";


export function PlaylistPage() {
	
	const { _key } = useParams()
	const { data, error, isLoading } = useAsset("song", _key)	

	return (
		<>
			<Box 
				top={0}
				position='sticky'
				bgGradient={'linear-gradient(180deg, blue.500 0%, blue.100 100%)'}
				p={5}
				mb={2}
				zIndex={1}
			>
				<Text as='b' position='sticky' top={0} fontSize='4xl'>{data?.name}</Text>
				<Text>{data?.description}</Text>
			</Box>
		<VStack alignItems='left' px={2}>
			{!isLoading && !error && data.songs?.map((item: any) => (
				<PlaylistItem key={item['@key']} _key={item['@key']}/>
			))}
		</VStack>
		</>
	)
}
