import { HStack, Skeleton, Text, TextProps } from "@chakra-ui/react";
import { useAsset } from "../hooks/useAsset";

interface ArtistTextProps {
	_key: Object[]
	rest?: TextProps
}

export function ArtistsText({ _key, ...rest }: ArtistTextProps) {

	const rtr = _key.map((item: any) => {
				const { data, error, isLoading } = useAsset("artist", item['@key'])
				return (
					<Text {...rest}>{data?.name}</Text>
				)
			})

	return (
		<HStack>{rtr}</HStack>
	)
	
}
