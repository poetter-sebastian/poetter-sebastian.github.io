export interface ProjectConfig {
    href: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
}

export const PROJECTS_CONFIG: ProjectConfig[] = [
    {
        href: 'https://voxreality.eu/aixtra/',
        imgSrc: '/img/projects/voxreality.webp',
        imgAlt: 'Vox reality logo',
        title: 'AIXTRA Vox reality Open Call'
    },
    {
        href: 'https://www.master-xr.eu/oc-project/reach/',
        imgSrc: '/img/projects/reach.webp',
        imgAlt: 'Master XR',
        title: 'Master XR Open Call 1'
    },
    {
        href: 'https://github.com/MindPort-GmbH/VR-Builder',
        imgSrc: '/img/projects/vrbuilder.webp',
        imgAlt: 'VR-Builder logo',
        title: 'VR Builder'
    },
    {
        href: 'https://www.in.nrw/news/next-2024-11-25',
        imgSrc: '/img/projects/genaivatar.webp',
        imgAlt: 'GenAIvatar',
        title: 'GenAIvatar'
    }
];
