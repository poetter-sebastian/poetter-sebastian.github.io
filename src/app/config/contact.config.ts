import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedinIn, faMastodon, faItchIo} from '@fortawesome/free-brands-svg-icons';

export interface ContactConfig {
    href: string;
    title: string;
    icon: IconDefinition;
    isHiddenEmail?: boolean;
    relString?: string;
    hrefString?: string;
    dataI18n: string;
}

export const CONTACTS_CONFIG: ContactConfig[] = [
    {
        href: 'mailto:&#x73;&#x65;&#x62;&#x2D;&#x70;&#x6F;&#x65;&#x74;%74%65%72%40%67%6D%78%2E%64%65',
        title: 'Send me a mail',
        icon: faEnvelope,
        isHiddenEmail: true,
        dataI18n: 'contact-email',
    },
    {
        href: 'https://github.com/poetter-sebastian',
        title: 'My GitHub page',
        icon: faGithub,
        dataI18n: 'contact-github',
    },
    {
        href: 'https://www.linkedin.com/in/sebastian-p-17a94721b',
        title: 'Find me on LinkedIn',
        icon: faLinkedinIn,
        dataI18n: 'contact-linkedin',
    },
    {
        href: 'https://social.tchncs.de/@Seb',
        title: 'Tell me a joke on Mastodon',
        icon: faMastodon,
        relString: 'me',
        dataI18n: 'contact-mastodon',
    },
    {
        href: 'https://poetter-sebastian.itch.io/',
        title: 'Look on my Itch.io page',
        icon: faItchIo,
        dataI18n: 'contact-itchio',
    },
    {
        href: 'https://poetter-sebastian.github.io/',
        title: 'Poetter-Sebastian.Github.io',
        icon: faGlobe,
        dataI18n: 'contact-website',
    }
];
