export interface ScienceEntry {
    title: string;
	desc: string;
    year: string;
	doi: string;
	href: string;
	bibtex: string;
}

export const SCIENCE_CONFIG: ScienceEntry[] = [
	{
		title: 'science-time-algorithm',
		desc: 'science-time-algorithm-desc',
		year: '2020',
		doi: '10.33968/2026.60',
		href: 'https://doi.org/10.33968/2026.60',
		bibtex: `
			@article{zur2020algorithmisch,
			  title={Algorithmisch Unterstützte Terminplanung},
			  author={zur Generierung, Untersuchung von Algorithmen and P{ötter, Sebastian},
			  year={2020},
			  url={https://htwk-leipzig.qucosa.de/api/qucosa%3A75378/zip/}
			}
		`
	},
	{
		title: 'science-unity-simulation',
		desc: 'science-unity-simulation-desc',
		year: '2023',
		doi: '10.33968/2026.61',
		href: 'https://doi.org/10.33968/2026.61',
		bibtex: `
			@phdthesis{potter2023entwicklung,
			  title={Entwicklung einer Umweltsimulation in Unity mit Fokus auf den anthropogenen Klimawandel},
			  author={Pötter, Sebastian},
			  year={2023},
			  school={Hochschule für Technik, Wirtschaft und Kultur},
			  url={https://htwk-leipzig.qucosa.de/id/qucosa:86065}
			}
		`
	},
	{
		title: 'science-virtosha-system',
		desc: 'science-virtosha-system-desc',
		year: '2026',
		doi: '10.1109/VRW70859.2026.00171',
		href: 'https://ieeexplore.ieee.org/document/11489623/',
		bibtex: `
			@inproceedings{jansen2026virtosha,
			  title={VIRTOSHA-A VR Training Simulation for Osteosynthesis Procedures with Force Feedback and Tissue Simulation},
			  author={Jansen, Anna and Waldow, Kristoffer and Pötter, Sebastian and Civelek, Turhan and Steininger, Melissa and Perret, Jerome and Wellmann, Markus and Stein, Steffen-Sascha and Lähner, David and Welle, Kristian and others},
			  booktitle={2026 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)},
			  pages={921--930},
			  year={2026},
			  organization={IEEE}
			}
		`
	},
];
