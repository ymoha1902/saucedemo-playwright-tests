const { defineConfig } = require('@playwright/test');
module.exports = defineConfig ({ testDir: './tests',
    use: {
        headless: process.env.CI ? true : false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },

});

