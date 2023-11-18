import { Image, Card, Text, Center } from "@chakra-ui/react";

interface SongCardProps {
	title: string;
	explicit: boolean;
}

export function SongCard({title, explicit} : SongCardProps) {
	return (
		<Card borderRadius='md'>
			<Center>
				<Image
					mt={3}
					src='https://placehold.co/600x400'
					objectFit='cover'
					borderRadius='full'
					w='180px'
					h='180px'
				/>
			</Center>
			<Text as='b' align='center' w='full' m='5px' >{title}</Text>
		</Card>
	)
}
