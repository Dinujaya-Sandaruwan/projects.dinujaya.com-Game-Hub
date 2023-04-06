import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/imageUrl";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

export const GenereList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								objectFit="cover"
								boxSize="32px"
								borderRadius={8}
								src={getCropedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								variant="link"
								onClick={() => onSelectGenre(genre)}
							>
								{genre.name}
							</Button>
							{/* fontSize="lg" */}
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};
