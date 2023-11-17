import { Card, CardFooter, Image, Text } from "@chakra-ui/react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io"

interface AlbumCardProps {
	title: string
}

export function AlbumCard({title}: AlbumCardProps) {

	return (
		<Card borderRadius='md' >
			<Text m='5px' as='b'>{title}</Text>
				<Image 
					objectFit='cover'
					src='https://placehold.co/600x400'
				/>
			<Text m='5px' as='samp'>Nome do Artista</Text>
			<CardFooter
				justify='space-between'
			>
				<IoMdStar />
				<IoMdStar />
				<IoMdStar />
				<IoMdStarHalf />
				<IoMdStarOutline />
			</CardFooter>
		</Card>
	)
}
