import { HStack, Skeleton, Text, TextProps } from "@chakra-ui/react";
import { useAsset } from "../hooks/useAsset";

interface ArtistTextProps {
	artists?: Array<any>
	rest?: TextProps
	isLoading: boolean
}

interface ArtistProps {
	artist: string
}

function Artist({ artist }: ArtistProps) {
	const { data, error, isLoading } = useAsset("artist", artist)

	return(
		<Text>{data?.name}</Text>
	)
}

export function ArtistsText({ artists, isLoading, ...rest }: ArtistTextProps) {

	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack>{artists?.map((artist, index) => (
				<Artist key={index+"artist"} artist={artist['@key']} />
			))}</HStack>
		</Skeleton>
	)
	
}
