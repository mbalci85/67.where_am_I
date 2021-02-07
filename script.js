const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const latitudeInput = document.querySelector('#latitude');
const longitudeInput = document.querySelector('#longitude');

const apiKey = '9dd68070-6918-11eb-8908-c96ffe52d8ae'; // take yours !!!

let url = 'https://app.geocodeapi.io/api/v1/reverse?apikey=';

const whereAmI = function (lat, lng) {
	fetch(url + apiKey + '&point.lat=' + lat + '&point.lon=' + lng)
		.then((response) => response.json())
		.then((data) =>
			console.log(
				`You are in ${data.features[0].properties.localadmin}, country of ${data.features[0].properties.country}`,
			),
		)
		.catch((err) => console.log(err));
};

btn.addEventListener('click', displayCountry);
