import { Image, Card, CardBody, Circle, Text } from "@chakra-ui/react";

export function SongCard() {
	return (
		<Card borderRadius='md'>
				<Circle >
					<Image
						src='https://placehold.co/600x400'
						objectFit='cover'
						borderRadius='full'
						w='180px'
						h='180px'

					/>
				</Circle>
			<Text m='5px' as='b'> Nome do Artista</Text>
		</Card>
	)
}
