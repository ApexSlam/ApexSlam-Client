export interface Tileset {
    key: string;
    path: string;
}

export const toTileset = (key: string, path: string): Tileset => ({
    key,
    path,
});
