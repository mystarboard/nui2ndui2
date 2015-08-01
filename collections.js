Posts = new Mongo.Collection('posts');
Likes = new Mongo.Collection('likes');

Gigs = new Mongo.Collection('gigs');
FavoriteGigs = new Mongo.Collection('favoriteGigs');

Friends = new Mongo.Collection('friends');


BuySellPosts = new Mongo.Collection('buySellPosts');

MusiciansWanted = new Mongo.Collection('musiciansWanted');
MusiciansAvailable = new Mongo.Collection('musiciansAvailable');


var BuySellPostsSeed = [
	{
		username: 'zoey',
		category: 'Guitars',
		title: 'WTB: Gibson custom shop Explorer',
		description: 'Looking for a Gibson custom shop Explorer, preferably in candy red'
	},
	{
		username: 'loius',
		category: 'Bass',
		title: 'WTS: MIJ Fender 98 Jazz bass - $1.5k',
		description: 'Selling vintage Fender 98 Jazz bass @ $1.5k, come over for viewing. PM for details.'
	},
	{
		username: 'stone',
		category: 'Drums',
		title: 'WTS: Chad Smith Signiture Snare - $3k',
		description: 'Selling Chad Smith Signiture Snare, a must have for all Chad Smith fans.'
	}
]

var MusiciansAvailableSeed = [
	{
		username: 'zoey',
		category: 'Guitarist',
		title: 'Looking to play lead guitars in a Punk band ',
		description: 'Looking for other musicinas to form a punk band. Influences are NOFX, NUFAN, Bad Religion, Me first. Jamming in the west!'
	},
	{
		username: 'loius',
		category: 'Bassist',
		title: 'Bassist available for metal band',
		description: 'Been playing bass for 10 years, looking for bandmates to form a Megadeth cover band!'
	},
	{
		username: 'stone',
		category: 'Drummer',
		title: 'Newbie drummer looking for bandmates',
		description: 'Newbie drummer looking for bandmates for casual jamming. 2 years experience at yamaha.'
	}
]

var gigsListSeed = [
	{
		title: 'Vent Box 2015 Age of Evolution', 
		organizer: 'Vent Box Productions',
		date: 'Sat Aug 1 2015, 4:00pm–10:00pm',
		location: 'The Substation Theatre, 45 Armenian Street, Singapore',
		description:'With a powerhouse lineup from Singapore, Malaysia, Indonesia and Hong Kong! Our main headliner for this event will be the legendary eastern black metal band, As Sahar!!! Sharing the stage will be Melodic Death Metal maestros from Penang, Malaysia, NonserviaM! Bamboo Star from Hong Kong who just showcase their style of classic metal hardrock at Music Matters Live 2014, our good friends from Solo, Indonesia will be back as well to co-headline once again!!! We welcome Down for Life! Many other great local bands like Margyyah, Thy Fallen Kingdom, Ossuary and etc... This is a must go event for all underground music enthusiasts. We promised you that you will never regret!'
	},
	{
		title: 'NecroWretch With Serpents Tour 2015 Singapore Invasion', 
		organizer: 'Vent Box Productions',
		date: 'Fri Aug 14 2015, 5:00pm–11:00pm',
		location: 'Aliwal Arts Centre, 28 Aliwal Street #03-03, Singapore',
		description: 'Vent Box Productions welcome you to join us in this unholy congregation on the 14th of August 2015 at Aliwal Arts Centre!!! NecroWretch With Serpents Tour Singapore Invasion MMXV! The tour support for NecroWretch (France Putrid Death Metal) will be our local abominations, Black/Death Metal band, Ilemauzar and Bestial Black/Death Metal band, Balberith. Black/Death Metal band, Infernal Execrator, Death Metal bands, Nympholepsy and Dispiteous will be joining in as local support for the Singapore ritual!'
	},
]