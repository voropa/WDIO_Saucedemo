import { expect, browser, $ } from '@wdio/globals';
import * as fs from 'fs';
import * as path from 'path';
import { DOWNLOADS_DIR } from '../../wdio.conf';

describe('My Login application', () => {
    it('should login with valid credentials 1', async () => {
        await browser.url(`https://the-internet.herokuapp.com/download`)
        await $('a[href="downloads/rakib-passport.png"]').click();

        // Wait for file to download
        await browser.pause(1000);

        const filePath = path.resolve(process.cwd(), DOWNLOADS_DIR, 'rakib-passport.png');

        console.log(filePath);

        expect(fs.existsSync(filePath)).toBe(true);
    });
})

