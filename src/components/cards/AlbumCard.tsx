import { Card, CardFooter, Image, Text, VStack } from "@chakra-ui/react";
import { Rating } from "./Rating";

interface AlbumCardProps {
	title: string
	rating: number
	releaseDate: string
}



export function AlbumCard({title, rating, releaseDate}: AlbumCardProps) {

	const dateWithoutZ = releaseDate.replace("Z", "");
	const date = new Date(dateWithoutZ)

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return (
		<Card borderRadius='md' >
			<Text m='5px' as='b'>{title}</Text>
				<Image 
					objectFit='cover'
					src='https://placehold.co/600x400'
				/>
			<Text m='5px' as='samp'>Nome do Artista</Text>
			<CardFooter>
				<VStack w='full'>
					<Rating value={rating} />

					<Text as='sup' align='right' w='full' mt={3}>{`${day}/${month}/${year}`}</Text>
				</VStack>
			</CardFooter>
		</Card>
	)
}
