import Slugger from 'github-slugger';

const kebabCase = (str: string): string => Slugger.slug(str);

export default kebabCase;
