import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
	const images = import.meta.glob(
		"/src/BackgroundImages/*.{bmp,avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
		{
			eager: true,
		},
	);

	const imageList = Object.entries(images).map(([path, mod]) => {
		const src = (mod as { default: string }).default;
		const filename =
			path
				.split("/")
				.pop()
				?.replace(/\.\w+$/, "") ?? "Unknown Location";
		return { src, filename };
	});

	const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

	return {
		backgroundImage: randomImage,
	};
};
