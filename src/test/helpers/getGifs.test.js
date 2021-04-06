import { getGifs } from "../../helpers/getGifs";

describe('Tests on getGif Fetch', () => {
    test('Should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('Should return 0 elements', async () => {
        const gifs = await getGifs();
        expect(gifs.length).toBe(0);
    });
});