var randomImage = document.querySelector('.random-image');
let baseUrl = 'https://picsum.photos/450/350';

fetch(baseUrl)
.then(function (response) {
	if (response.ok) {
		return response.blob();
	} else {
		return Promise.reject(response);
	}
})

.then(function (photoBlob) {
console.log("My Blob:", photoBlob)
var objectURL = URL.createObjectURL(photoBlob);
console.log("Object URL:", objectURL);
randomImage.src = objectURL;

console.log("randomImage.src:", randomImage.src);
return fetch(response.url + '?grayscale');

})
//GRAYSCALE ATTEMPT


.then(function (response2) {
if (!response2.ok) {
console.log(response2);
return new Error(response2);
}
console.log("Response2:", response2);

console.log("Response URL2:", response2.url);
return response2.blob();
})

.then(function (photoBlob) {
console.log("My Blob2:", photoBlob)
var objectURL = URL.createObjectURL(photoBlob);
console.log("Object URL2:", objectURL);
randomImage.src = objectURL;


console.log("randomImage.src2:", randomImage.src);
})

//END GRAYSCALE ATTEMPT
.catch(function (err) {
console.log(err);
});