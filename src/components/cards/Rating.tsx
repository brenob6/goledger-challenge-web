import { HStack, Icon } from "@chakra-ui/react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

interface RatingProps {
	value: number
}

export function Rating({ value }: RatingProps) {
	const startRate = value/2;
	const starStack = [];

	const fullStar = Math.floor(startRate);
	const halfStar = value%2;
	const emptyStar = 5 - (fullStar+halfStar);

	for(let i = 0; i < fullStar; i++) {
		starStack.push(IoMdStar)
	}

	for(let i = 0; i < halfStar; i++) {
		starStack.push(IoMdStarHalf)
	}

	for(let i = 0; i < emptyStar; i++) {
		starStack.push(IoMdStarOutline)
	}

	return (
		<HStack justifyContent='space-between' w='full'>	
			{starStack.map((item) => (<Icon w='30px' h='30px' as={item} />))}
		</HStack>
	)
}
