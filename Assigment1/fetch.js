// accesing the section using by event handler
let newSection = document.getElementById('fresh');
// Store the URL of a JSON file in a variable */
let requestURL = 'https://prabhnoor3017.github.io/List2/List.json';

// using Fetch Api  the fetch method will retrive the resopnse by sending a request

fetch(requestURL)
  .then((response) => {
    return response.json()
  })
  .then((newSection) => {
    
    console.log(newSection);
    dealInfo(newSection);
  })


/*  using function function display the top stores */
function dealInfo(jsonObj) {
  //  Bind the JSON stores object to a let
  let dealInfo = jsonObj['List'];
  //  Loop through the objects
  for (let i = 0; i < dealInfo.length; i++) {
    //  build HTML elements for the content
    let div = document.createElement('div');
    div.setAttribute('class', 'col-md-3');
    let description = document.createElement('h3');

    let image = document.createElement('img');

    //  Set the textContent property for each of the above elements (except the UL), based on the JSON content
    image.setAttribute('src', 'https://prabhnoor3017.github.io/List2/images/' + dealInfo[i].image);
    image.setAttribute('alt', dealInfo[i].Name);
    description.textContent = dealInfo[i].Name;

// appending things
    div.appendChild(description);
    div.appendChild(image);
    newSection.appendChild(div);
  }
}
