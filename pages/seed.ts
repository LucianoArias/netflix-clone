// import prismadb from '@/lib/prismadb';

// // <!---ARCHIVO PARA AÑADIR MAS PELICULAS A LA BASE DE DATOS!---!>

// const load = async () => {
//   try {
//     await prismadb.movie.createMany({
//       data: {
//         title: 'Gran Turismo',
//         age: 12,
//         duration: 2.15,
//         description:
//           'La historia definitiva de la realización de los deseos de un adolescente jugador de Gran Turismo cuyas habilidades con el juego le hicieron ganar una serie de concursos de Nissan para convertirse en piloto de carreras profesional.',
//         videoUrl:
//           'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
//         thumbnailUrl:
//           'https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg',
//         release: 2023,
//         category: 'recent',
//         youtubeUrl: 'https://www.youtube.com/embed/GVPzGBvPrzw',
//       },
//     });
//   } catch (e) {
//     console.error(e);
//     process.exit(1);
//   } finally {
//     await prismadb.$disconnect();
//   }
// };
// load();
// {
//   title: 'Gran Turismo',
//   age: 12,
//   duration: 2.15,
//   description:
//     'La historia definitiva de la realización de los deseos de un adolescente jugador de Gran Turismo cuyas habilidades con el juego le hicieron ganar una serie de concursos de Nissan para convertirse en piloto de carreras profesional.',
//   videoUrl:
//     'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
//   thumbnailUrl:
//     'https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg',
//   release: 2023,
//   category: 'recent',
//   youtubeUrl: 'https://www.youtube.com/embed/GVPzGBvPrzw',
// },
// {
//   title: 'Cacería en Venecia',
//   age: 12,
//   thumbnailUrl:
//     'https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg',
//   duration: 1.44,
//   description:
//     'El célebre detective Hércules Poirot, ahora retirado y viviendo en un exilio autoimpuesto en Venecia, asiste a regañadientes a una sesión de espiritismo de Halloween en un palacio decadente y encantado. Cuando uno de los invitados es asesinado, el detective se ve inmerso en un siniestro mundo de sombras y secretos.',
//   release: 2023,
//   videoUrl:
//     'https://rr10---sn-uxax4vopj55gb-x1x6.googlevideo.com/videoplayback?expire=1709283396&ei=5EPhZbquCMeo_9EPnumbgAk&ip=64.43.118.193&id=o-ABFPSSCep_SblPxj78fjENN-ZW0MeduXogisf_0_mlv4&itag=248&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f3NBlDM7go6w_d_mln7VoUU8-PHD9iDR7hBZPJ1Sl_g&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=13215929&dur=144.644&lmt=1694338265265034&keepalive=yes&fexp=24007246&c=ANDROID&txp=5535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgc_ryfaaRExdijYQNeCPgPEc72yyDotTbLWKueF0MRaACIDO7nuP2n9kcpF2ZivyJqMwNtUqVvY3bz4Mf8DIWXzGG&redirect_counter=1&rm=sn-ab5eey7z&req_id=4c0fa4c0d0bca3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=C5&mip=179.36.179.23&mm=31&mn=sn-uxax4vopj55gb-x1x6&ms=au&mt=1709260784&mv=u&mvi=10&pcm2cms=yes&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=APTiJQcwRQIgepPgb37IFlyCIaDR07j3tO3T4kMJyBRZoQOFVvyE08oCIQDVjioxifLskEz1eaKtF_PuMh0d4CxGCNJM3_4q1gEJyQ%3D%3D',
//   category: 'recent',
//   youtubeUrl: 'https://www.youtube.com/embed/yEddsSwweyE',
// },
