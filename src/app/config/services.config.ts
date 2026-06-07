import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faPager, faServer, faUserFriends, faIndustry, faFileLines} from '@fortawesome/free-solid-svg-icons';

export interface ServiceConfig {
    icon: IconDefinition;
    dataI18n: string;
}

export const SERVICES_CONFIG: ServiceConfig[] = [
    { icon: faPager, dataI18n: 'services-web' },
    { icon: faServer, dataI18n: 'services-dev' },
    { icon: faUserFriends, dataI18n: 'services-team' },
    { icon: faIndustry, dataI18n: 'services-digi' },
    { icon: faFileLines, dataI18n: 'services-cons' }
];
