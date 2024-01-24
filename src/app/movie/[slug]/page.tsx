// export async function generateMetadata({
// 	params,
// }: {
// 	params: {
// 		slug: string
// 	}
// }) {
// 	try {
// 		const movie = await getMovie(params.slug)
// 		if(!movie) return {
// 			title: "Not Found",
// 			description: "The page you are looking for does not exist"
// 		}

// 		return {
// 			title: movie.title,
// 			description: movie.description,
// 		}

// 	} catch (error) {
// 		return {
// 			title: "Not Found",
// 			description: "The page you are looking for does not exist"
// 		}
// 	}

// 	return {
// 		title: '...',
// 	}
// }

// export async function generateStaticParams() {
// 	const movies = await getAllMovies();
// 	if(!movies) return [];
// 	return movies.map((movie) => ({
// 		slug: movie.slug,
// 	}));
// }

export default function MoviePage({
	params: { slug },
}: {
	params: { slug: string }
}) {
	//используем slug для получения фильма
	return <div>movie page</div>
}
