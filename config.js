config = {
	personnummer: '19810618-3232', //needs to be with dash
	stad: 'Vänersborg', //Needs to be exact
	postnummer: '421 31', //postcode of the postoffice, not ur personal
	manuell: true, //set to false if you're doing automatic gearbox
	webhook: 'https://discord.com/api/webhooks/814846909356703774/iB2O3xI7iGZSB4NyQHawJoAAVTYjK67GJiNJHezzfljq1HP7o1KNm9PsbP3_ydmP5ri7',
	anvandpostnummer: false, //if theres more than one office in ur city set to true so it chooses the one u want
	delay: 3000, //in milliseconds
};

module.exports = config;
