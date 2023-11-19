import { Text, VStack } from "@chakra-ui/react";
import { PlaylistItem } from "../components/sidebar/PlaylistItem";
import { useAsset } from "../hooks/useAsset";
import { useParams } from "react-router-dom";

export function PlaylistPage() {
	
	const { _key } = useParams()
	const { data, error, isLoading } = useAsset("song", _key)	

	return (
		<VStack alignItems='left'>
			<Text as='b' fontSize='4xl'>{data?.name}</Text>
			{!isLoading && !error && data.songs?.map((item: any) => (
				<PlaylistItem key={item['@key']} _key={item['@key']}/>
			))}
		</VStack>
	)
}
