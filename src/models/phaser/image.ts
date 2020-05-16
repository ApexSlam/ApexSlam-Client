export interface Image {
    key: string;
    path: string;
}

export const toImage = (key: string, path: string): Image => ({
    key,
    path,
});
