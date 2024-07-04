export type Song = {
    id: number;
    title: string;
    genre: string;
    // autorId: number;
    releaseDate: [number, number, number];
    imageUrl: string;
    videoUrl: string;
}

export type Musician = {
    id: number;
    name: string;
    country: string;
    debut: [number, number, number];
    imageUrl: string;
}

export type SongMusicianConnection = {
    songId: number;
    musicianId: number;
}