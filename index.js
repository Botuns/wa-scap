const sender = require('./src/index');

(async () => {
    await sender.start({showBrowser: true}).then(async () => {
        const phones = '2349134516158';
        const message = 'Good Morning.';
        await sender.sendTo(phones, message);
        await sender.end();
    }).catch(err => console.log(err));

})();