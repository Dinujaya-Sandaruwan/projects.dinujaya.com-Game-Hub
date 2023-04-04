import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreticScore from "./CreticScore";
import getCropedImageUrl from "../services/imageUrl";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCropedImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CreticScore score={game.metacritic} />
				</HStack>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi...
				</Text>
			</CardBody>
		</Card>
	);
}

export default GameCard;
