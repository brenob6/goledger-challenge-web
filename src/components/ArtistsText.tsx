import { HStack, Skeleton, Text, TextProps } from "@chakra-ui/react";
import { useAsset } from "../hooks/useAsset";

interface ArtistTextProps {
	artists?: Array<any>
	isLoading: boolean
}

interface ArtistProps {
	artist: string
}

function Artist({ artist }: ArtistProps) {
	const { data, error, isLoading } = useAsset("artist", artist)

	return(
		<Text as='u'>{data?.name}</Text>
	)
}

export function ArtistsText({ artists, isLoading }: ArtistTextProps) {

	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack>{artists?.map((artist, index) => (
				<Artist key={index+"artist"} artist={artist['@key']} />
			))}</HStack>
		</Skeleton>
	)
	
}
