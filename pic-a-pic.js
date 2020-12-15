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
        // document.getElementById("photographer").reset();

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
        // document.getElementById("photographer").reset();

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
                randomImage2.src = objectURL;
        
                console.log("randomImage2.src:", randomImage.src);
        
         
            })

            //BLUR FETCH
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
                randomImage3.src = objectURL;
        
                console.log("randomImage3.src:", randomImage.src);
        
         
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
})};

    

    // response.url + '?grayscale'

//     fetch(rep)
//     .then(function(response) {
//         if(!response.ok) {
//             console.log(response);
//             return new Error(response);
//         }
//         console.log("Response:", response);
//         return response.json();
//     })
//     .then(function(repJson){
//         console.log("My Json:", repJson)
//         var objectURL = URL.createObjectURL(repJson);
//         console.log("Object URL:", objectURL);
//         randomImage.src = objectURL;

//         console.log("randomImage.src:", randomImage.src);
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// //     .then(function(response) {
//     console.log("bottom:",response);
//     return response.json();6
// })
// .then(function(json) {
//     let people = json.results;

//     for(p of people) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }

//  });
//     return response.blob();
// })
// .then(function(photoBlob){
//     console.log("My Blob:", photoBlob)
//     var objectURL = URL.createObjectURL(photoBlob);
//     console.log("Object URL:", objectURL);
//     randomImage.src = objectURL;

//     console.log("randomImage.src:", randomImage.src);
// })


// .catch(function(err){
//     console.log(err);
// });

// console.log("Response:", response);
//     console.log("Meep:", response.url);
// //    var deep = new URL(response.url);
// //    var deeper = (deep.pathname).split('/')
//    var deepest = new URL(response.url).pathname.split('/')
//    var id = deepest[2]
//     console.log("Deepest:", id);
//     var idUrl = 'https://picsum.photos/id/0/info'
//     var rep = idUrl.replace("0", id);
//     console.log("Replaced:", rep);

// fetch(rep)
// .then(function(response) {
//     console.log("bottom:",response.json);
//     return response.json();
// })
//  .then(function(json) {
//     let people = json.results;

//     for(p of people) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }

//  });

// console.log("Deep:",(deep.pathname.charAt(4,5,6)));

// var objectURL = URL.createObjectURL(photoBlob);
// .then(function(idNum){
//     var idNum = URL.location.pathname;
//     console.log("Meep:", idNum);
// })

// https://picsum.photos/id/0/info



//    var deep = new URL(response.url);
//    var deeper = (deep.pathname).split('/')


//BASIC CODE

// fetch('https://picsum.photos/450/350')
// .then(function(response) {
//     if(!response.ok) {
//         console.log(response);
//         return new Error(response);
//     }
//     console.log("Response:", response);
//     return response.blob();
// })
// .then(function(photoBlob){
//     console.log("My Blob:", photoBlob)
//     var objectURL = URL.createObjectURL(photoBlob);
//     console.log("Object URL:", objectURL);
//     randomImage.src = objectURL;

//     console.log("randomImage.src:", randomImage.src);
// })
// .catch(function(err){
//     console.log(err);
// });

//END BASIC CODE