// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// cSpell:disable

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyASPb-lDDwrbNb-ZDSkM2pLavjQMLqLyRg',
        authDomain: 'actual-musketeer.firebaseapp.com',
        databaseURL: 'https://actual-musketeer.firebaseio.com',
        projectId: 'actual-musketeer',
        storageBucket: 'actual-musketeer.appspot.com',
        messagingSenderId: '585331149456',
    },
};
