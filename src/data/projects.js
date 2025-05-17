import premierImage1 from "../img/empaques-premier-1.png";
import premierImage2 from "../img/empaques-premier-2.png";
import premierImage3 from "../img/empaques-premier-3.png";

import cxrtoImage1 from "../img/cxrto-1.png";

export const projects = [
	{
		id: "empaques-premier",
		title: "Empaques Premier",
		description:
			"Rediseñé desde cero el sitio web de una empresa de empaques flexibles usando Astro en el frontend. El foco estuvo en mejorar el rendimiento, la estructura y la experiencia de usuario.",
		images: [premierImage1, premierImage2, premierImage3],
		url: "https://empaquespremier.com",
		badges: [
			{
				title: "Astro",
			},
		],
	},
	{
		id: "cxrto",
		title: "Cxrto",
		description:
			"Desarrollé una herramienta para acortar URLs, construida con Next.js en el frontend y Supabase para manejar la base de datos y la lógica del backend. El proyecto está desplegado en Vercel.",
		images: [cxrtoImage1],
		url: "https://cxrto.vercel.app",
		badges: [
			{
				title: "NextJS",
			},
			{
				title: "Supabase",
			},
		],
	},
];
