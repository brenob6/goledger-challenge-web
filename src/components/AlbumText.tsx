import { useAsset } from "../hooks/useAsset"
import { Skeleton, Text, TextProps } from "@chakra-ui/react"

interface AlbumTitleProps {
	_key: string
	rest?: TextProps
}

export function AlbumText({ _key, ...rest }: AlbumTitleProps) {

	const { data, error, isLoading} = useAsset("album", _key)

	return (
		<Skeleton isLoaded={!isLoading}>
			<Text {...rest}>{data?.title}</Text>
		</Skeleton>
	)
}
