var randomImage = document.querySelector('#random-image');
var randomImage2 = document.querySelector('#random-image2');
var randomImage3 = document.querySelector('#random-image3');
let baseUrl = 'https://picsum.photos/450/350';

//STARTING IMAGE:

fetch(baseUrl)
    .then(function (response) {
        if (!response.ok) {
            console.log(response);
            return new Error(response);
        }
        console.log("Response:", response);

        console.log("Meep:", response.url);

        //GRAB PHOTOGRAPHER

        var deepest = new URL(response.url).pathname.split('/')
        var id = deepest[2]
        console.log("Deepest:", id);
        var idUrl = 'https://picsum.photos/id/0/info';
        var rep = idUrl.replace("0", id);
        console.log("Replaced:", rep);
        var grayscaleUrl = 'https://picsum.photos/id/0/450/350.jpg?grayscale';
        var repGrayscale = grayscaleUrl.replace("0", id);
        console.log("repGrayscale:", repGrayscale);
        var blurURL = 'https://picsum.photos/id/0/450/350.jpg?blur';
        var repBlur = blurURL.replace("0", id);
        console.log("repBlur:", repBlur);

        document.getElementById("photographer").innerHTML = ""
        const section = document.querySelector('#photographer');
        fetch(rep)
            .then(function (result) {
                console.log("photographer:", result)
                return result.json()
            })
            .then(function (json) {
                console.log("photographer:", json.author);
                displayResults(json.author);
            })

        function displayResults(json) {
            let photographer = json;
            let heading = document.createElement('h1');
            section.appendChild(heading);
            heading.textContent = photographer;
        }

        //END GRAB PHOTOGRAPHER 

        return response.blob();
    })

    .then(function (photoBlob) {
        console.log("My Blob:", photoBlob)
        var objectURL = URL.createObjectURL(photoBlob);
        console.log("Object URL:", objectURL);
        randomImage.src = objectURL;

        console.log("randomImage.src:", randomImage.src);
    })

    .catch(function (err) {
        console.log(err);
    });


//FUNCTION ON BUTTON CLICK:

function getPic() {
    fetch(baseUrl)
        .then(function (response) {
            if (!response.ok) {
                console.log(response);
                return new Error(response);
            }
            console.log("Response:", response);

            console.log("Meep:", response.url);

            //GRAB PHOTOGRAPHER

            var deepest = new URL(response.url).pathname.split('/')
            var id = deepest[2]
            console.log("Deepest:", id);
            var idUrl = 'https://picsum.photos/id/0/info';
            var rep = idUrl.replace("0", id);
            console.log("Replaced:", rep);
            var grayscaleUrl = 'https://picsum.photos/id/0/450/350.jpg?grayscale';
            var repGrayscale = grayscaleUrl.replace("0", id);
            console.log("repGrayscale:", repGrayscale);
            var blurURL = 'https://picsum.photos/id/0/450/350.jpg?blur';
            var repBlur = blurURL.replace("0", id);
            console.log("repBlur:", repBlur);

            document.getElementById("photographer").innerHTML = ""
            const section = document.querySelector('#photographer');
            fetch(rep)
                .then(function (result) {
                    console.log("photographer:", result)
                    return result.json()
                })
                .then(function (json) {
                    console.log("photographer:", json.author);
                    displayResults(json.author);
                })

            //GRAYSCALE FETCH

            document.getElementById('button2').addEventListener("click", function () {
                fetch(repGrayscale)
                    .then(function (response2) {
                        if (!response2.ok) {
                            console.log(response2);
                            return new Error(response2);
                        }
                        console.log("Response2:", response2);

                        console.log("Meep2:", response2.url);
                        return response2.blob();
                    })

                    .then(function (photoBlob) {
                        console.log("My Blob2:", photoBlob)
                        var objectURL = URL.createObjectURL(photoBlob);
                        console.log("Object URL2:", objectURL);
                        randomImage.src = objectURL;

                        console.log("randomImage2.src:", randomImage.src);


                    })
            })

            //BLUR FETCH
            document.getElementById('button3').addEventListener("click", function () {
                fetch(repBlur)
                    .then(function (response2) {
                        if (!response2.ok) {
                            console.log(response2);
                            return new Error(response2);
                        }
                        console.log("Response2:", response2);

                        console.log("Meep2:", response2.url);
                        return response2.blob();
                    })

                    .then(function (photoBlob) {
                        console.log("My Blob3:", photoBlob)
                        var objectURL = URL.createObjectURL(photoBlob);
                        console.log("Object URL3:", objectURL);
                        randomImage.src = objectURL;

                        console.log("randomImage3.src:", randomImage.src);

                    })
            })

            //END GRAYSCALE FETCH, BACK TO GRAB PHOTOGRAPHER


            function displayResults(json) {
                let photographer = json;
                let heading = document.createElement('h1');
                section.appendChild(heading);
                heading.textContent = photographer;
            }

            //END GRAB PHOTOGRAPHER 

            return response.blob();
        })

        .then(function (photoBlob) {
            console.log("My Blob:", photoBlob)
            var objectURL = URL.createObjectURL(photoBlob);
            console.log("Object URL:", objectURL);
            randomImage.src = objectURL;

            console.log("randomImage.src:", randomImage.src);

        })

        .catch(function (err) {
            console.log(err);
        })
};
