// galleryData.ts
const images = import.meta.glob('$lib/Images/gallery/*.jpg', { eager: true });

const altMap: Record<string, string> = {
	'con1.jpg': 'Con-Crete live on stage with fans',
	'con2.jpg': 'Band rehearsal in studio',
	'con3.jpg': 'Con-Crete at a concert',
	'con4.jpg': 'Band members during a live performance',
	'con5.jpg': 'Con-Crete at a music festival',
	'con6.jpg': 'Band members in the studio',
	'con7.jpg': 'Con-Crete at a concert'
};

export const galleryImages = Object.entries(images).map(([path, module]) => {
	const fileName = path.split('/').pop()!;
	return {
		src: module.default,
		alt: altMap[fileName] || `Con-Crete gallery photo: ${fileName}`,
		caption: fileName.replace('.jpg', '')
	};
});
