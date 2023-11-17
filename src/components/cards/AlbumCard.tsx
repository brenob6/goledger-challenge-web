import { Card, CardFooter, Image, Text } from "@chakra-ui/react";
import { Rating } from "./Rating";

interface AlbumCardProps {
	title: string
	rating: number
}

export function AlbumCard({title, rating}: AlbumCardProps) {

	return (
		<Card borderRadius='md' >
			<Text m='5px' as='b'>{title}</Text>
				<Image 
					objectFit='cover'
					src='https://placehold.co/600x400'
				/>
			<Text m='5px' as='samp'>Nome do Artista</Text>
			<CardFooter>
				<Rating value={rating} />
			</CardFooter>
		</Card>
	)
}
