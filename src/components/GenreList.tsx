import useGenres from "../hooks/useGenres";

export const GenereList = () => {
	const { data } = useGenres();
	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};
