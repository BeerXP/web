const devConfig = {
	apiKey: 'AIzaSyCLI8L0uKKbMoz7BLFXIsU5YLxQFQv0l2s',
	authDomain: 'beerxp-dev.firebaseapp.com',
	databaseURL: 'https://beerxp-dev.firebaseio.com',
	projectId: 'beerxp-dev',
	storageBucket: 'beerxp-dev.appspot.com',
	messagingSenderId: '399026205463',
	appId: '1:399026205463:web:96ee702630dafcb53e3d52',
	measurementId: 'G-L1SFRG01MW'
};

const prodConfig = {
	apiKey: '***************',
	authDomain: '***************',
	databaseURL: '***************',
	projectId: '***************',
	storageBucket: '***************',
	messagingSenderId: '***************'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
