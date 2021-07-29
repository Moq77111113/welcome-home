export interface Reference {
    kind: string;
    subtitle: string;
    title: string;
    content: string;
    image: { src: string; name: string };
    info?: ReferenceInfo
}

interface ReferenceInfo {
    address?: string;
    phone?: string;
    web?: string;
    socials?: Social[]
}
type SocialKind = 'instagram' | 'facebook' | 'twitter' | string
interface Social {
    kind: SocialKind
    link: string;
}