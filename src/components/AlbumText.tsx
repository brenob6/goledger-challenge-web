import { MdAlbum } from "react-icons/md"
import { useAsset } from "../hooks/useAsset"
import { HStack, Icon, Skeleton, Text, TextProps } from "@chakra-ui/react"
import { Rating } from "./Rating"

interface AlbumTitleProps {
	_key: string
	rest?: TextProps
}

export function AlbumText({ _key, ...rest }: AlbumTitleProps) {

	const { data, isLoading} = useAsset("album", _key)

	return (
		<Skeleton isLoaded={!isLoading}>
			<HStack>
				<Icon as={MdAlbum} boxSize={5} />
				<Text {...rest}>{data?.title}</Text>
			</HStack>
			<Rating value={data?.rating ?? 0}/>
		</Skeleton>
	)
}
