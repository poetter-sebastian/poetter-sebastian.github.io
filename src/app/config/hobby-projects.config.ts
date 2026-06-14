import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
    faFan,
    faMobileAlt,
    faListOl,
    faCloudSun,
    faRobot,
    faSatellite,
    faCalendarAlt,
    faLeaf,
    faKey
} from '@fortawesome/free-solid-svg-icons';

export interface HobbyProjectConfig {
    icon: IconDefinition;
    text: string;
    href: string;
    dataI18n: string;
}

export const HOBBY_PROJECTS_CONFIG: HobbyProjectConfig[] = [
    {
        icon: faFan,
        dataI18n: 'project-rasp-name',
        text: 'Raspberry Pi fan control',
        href: 'https://github.com/poetter-sebastian/pi-fan-controll'
    },
    {
        icon: faMobileAlt,
        dataI18n: 'project-note-name',
        text: 'Notes App (PWA)',
        href: 'https://github.com/poetter-sebastian/Notes'
    },
    {
        icon: faListOl,
        dataI18n: 'project-priority-name',
        text: 'Concurrent priority list',
        href: 'https://github.com/poetter-sebastian/concurrent-priority-list'
    },
    {
        icon: faCloudSun,
        dataI18n: 'project-weather-name',
        text: 'Weather station (IoT)',
        href: 'https://github.com/poetter-sebastian/solar-weatherstation'
    },
    {
        icon: faRobot,
        dataI18n: 'project-yolo-name',
        text: 'YoloV5 Neural network',
        href: 'https://github.com/poetter-sebastian/TeamFortress2-YoloV5'
    },
    {
        icon: faSatellite,
        dataI18n: 'project-sat-name',
        text: 'Satellite movement visualisation',
        href: 'https://github.com/poetter-sebastian/WorldSatelite'
    },
    {
        icon: faCalendarAlt,
        dataI18n: 'project-time-name',
        text: 'Timetable creator',
        href: 'https://gitlab.imn.htwk-leipzig.de/spoetter/bachelor-task'
    },
    {
        icon: faLeaf,
        dataI18n: 'project-simulation-name',
        text: 'Simulation of an ecosystem',
        href: 'https://github.com/poetter-sebastian/Simulation'
    },
    {
        icon: faKey,
        dataI18n: '',
        text: 'OTP Authenticator',
        href: 'https://github.com/poetter-sebastian/SimpleThenticator'
    }
];
