import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreticScore from "./CreticScore";
import getCropedImageUrl from "../services/imageUrl";
import { Emoji } from "./Emoji";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCropedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CreticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
				<Text marginTop={2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi...
				</Text>
				<Emoji rating={game.rating_top} />
			</CardBody>
		</Card>
	);
}

export default GameCard;
