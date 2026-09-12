import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faTv, faSwimmer, faHiking, faSeedling, faGamepad, faCube} from '@fortawesome/free-solid-svg-icons';
import {faUnity, faRaspberryPi} from '@fortawesome/free-brands-svg-icons';

export interface HobbyConfig {
    icon: IconDefinition;
    dataI18n: string;
}

export const HOBBIES_CONFIG: HobbyConfig[] = [
    { icon: faTv, dataI18n: 'hobbies-programming' },
    { icon: faSwimmer, dataI18n: 'hobbies-swimming' },
    { icon: faHiking, dataI18n: 'hobbies-hiking' },
    { icon: faUnity, dataI18n: 'hobbies-game' },
    { icon: faSeedling, dataI18n: 'hobbies-planting' },
    { icon: faRaspberryPi, dataI18n: 'hobbies-circuit' },
    { icon: faGamepad, dataI18n: 'hobbies-gaming' },
    { icon: faCube, dataI18n: 'hobbies-modeling' }
];
