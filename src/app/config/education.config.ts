export interface EducationSubject {
    i18nKey: string;
    isHtml?: boolean;
}

export interface EducationEntry {
    titleKey: string;
    titleIsHtml?: boolean;
    year?: string;
    textKey: string;
    subjectsTitleKey?: string;
    subjects?: EducationSubject[];
    subjectListClass?: string; // 'lul' for bachelor, 'lur' for master
}

export const EDUCATION_CONFIG: EducationEntry[] = [
    {
        titleKey: 'education-secondary-title',
        year: '2014',
        textKey: 'education-secondary-text'
    },
    {
        titleKey: 'education-high-title',
        year: '2017',
        textKey: 'education-high-text'
    },
    {
        titleKey: 'education-bachelor-title',
        year: '2020',
        textKey: 'education-bachelor-text',
        subjectsTitleKey: 'education-bachelor-subjects',
        subjectListClass: 'lul',
        subjects: [
            { i18nKey: 'education-bachelor-subject-ads' },
            { i18nKey: 'education-bachelor-math' },
            { i18nKey: 'education-bachelor-programming' },
            { i18nKey: 'education-bachelor-fp' },
            { i18nKey: 'education-bachelor-afl' },
            { i18nKey: 'education-bachelor-ai' },
            { i18nKey: 'education-bachelor-mr' },
            { i18nKey: 'education-bachelor-th', isHtml: true }
        ]
    },
    {
        titleKey: 'education-master-title',
        titleIsHtml: true,
        textKey: 'education-master-text',
        subjectsTitleKey: 'education-master-subjects',
        subjectListClass: 'lur',
        subjects: [
            { i18nKey: 'education-master-3d' },
            { i18nKey: 'education-master-alg' },
            { i18nKey: 'education-master-prog' },
            { i18nKey: 'education-master-mr' },
            { i18nKey: 'education-master-visu' },
            { i18nKey: 'education-master-ivra' },
            { i18nKey: 'education-master-cry' },
            { i18nKey: 'education-master-oagr' },
            { i18nKey: 'education-master-team', isHtml: true },
            { i18nKey: 'education-master-th', isHtml: true }
        ]
    }
];
