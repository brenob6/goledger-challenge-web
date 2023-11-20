import { Box, Text, VStack, useColorMode } from "@chakra-ui/react";
import { useAsset } from "../hooks/useAsset";
import { useParams } from "react-router-dom";
import { SongCard } from "../components/SongCard";


export function PlaylistPage() {
	
	const { _key } = useParams()
	const { data, error, isLoading } = useAsset("song", _key)	
	const { colorMode } = useColorMode()

	return (
		<>
			<Box 
				top={0}
				position='sticky'
				bgGradient={
					colorMode === 'light'?
						'linear-gradient(180deg, blue.300 0%, blue.50 100%)':
						'linear-gradient(180deg, blue.900 0%, blue.500 100%)'
				}
				p={5}
				mb={2}
				zIndex={1}
			>
				<Text as='b' position='sticky' top={0} fontSize='4xl'>{data?.name}</Text>
				<Text>{data?.description}</Text>
			</Box>
		<VStack alignItems='left' px={2}>
			{!isLoading && !error && data.songs?.map((item: any) => (
				<SongCard key={item['@key']} _key={item['@key']}/>
			))}
		</VStack>
		</>
	)
}
