import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card borderRadius={10} overflow="hidden">
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi...
				</Text>
			</CardBody>
		</Card>
	);
}

export default GameCard;
