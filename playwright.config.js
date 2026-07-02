const { defineConfig } = require('@playwright/test');
module.exports = defineConfig ({ testDir: './tests',
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },

});

