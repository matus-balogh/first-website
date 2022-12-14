// The lies of code below is for me to check that I linked JS file correctly in my HTML file

console.log("okay, we're in");

// Element

const makeDark = document.getElementById("dark-button");
const makeLight = document.getElementById("light-button");

// Event

makeDark.addEventListener("click", turnDark);
makeLight.addEventListener("click", turnLight);

// Execution

function turnDark() {
  document.body.classList.add("dark-theme");
}

function turnLight() {
  document.body.classList.remove("dark-theme");
}
// -----------------------------------------------------------------------------
// Code to fetch the Guardian API

// When you click the "GetLatestHeadline" button, fetch the latest headline from the Guardian API.
// When you click the "ReadMore" button, the link behind the button will take you to the source article on the Guardian website to learn more.

// Element
// Event
// Execution

// The order of the 3Es seemed to be different when fetching data from API. Why?
// I'd like to have one, clear, pedestrian, logical, step by step method for calling APIs, catching errors, filering results and displaying them on my website.

// Constants

const apiKey = "3de54b58-84ac-4405-a006-649614850382";

// Code

const getLastestGuardianArticleButton =
  document.querySelector(".GetLatestHeadline");

const LatestGuardianHeadline = document.querySelector(".HeadlineFromGuardian");
const LatestGuardianHeadlineUrl = document.querySelector(".ReadMore");

const loadHeadline = async () => {
  try {
    const response = await fetch(
      "https://content.guardianapis.com/search?api-key=3de54b58-84ac-4405-a006-649614850382"
    );
    const data = await response.json();
    console.log(data); // This console logs the entire API output
    console.log(data.response.results[0].webTitle); // console logs the headline

    console.log(data.response.results[0].webUrl); //  console logs the URL of the headline

    LatestGuardianHeadline.innerText = data.response.results[0].webTitle; // This is how you inject the filtered API output from above to your HTML element, in this case a h2 with the class LatestGuardianHeadline
    // LatestGuardianHeadlineUrl.innerText = data.response.results[0].webUrl;

    LatestGuardianHeadlineUrl.classList.add("show");

    LatestGuardianHeadlineUrl.setAttribute(
      "href",
      data.response.results[0].webUrl
    );

    // .response.results[0].webTitle
  } catch (error) {
    LatestGuardianHeadline.innerText = "An error happened 😭"; //Display error to a user when loading of the API content fails
    console.error("Something is not working", error);
  }
};

// window.addEventListener('DOMContentLoaded', loadHeadline); // I NEED TO REPLACE THIS SO THAT THE API IS ONLY CALLED WHEN I HIT THE 'GET LATEST HEADLINE' BUTTON
getLastestGuardianArticleButton.addEventListener("click", loadHeadline);

// Don't know how to do this

// This reference might be helpful when trying to display the data from the API in my HTML (on my website)

// const countryHTML = `
//       <section>
//         <h2>${name}</h2>
//         <picture>
//           <img src="${flag}" alt="${name}" />
//         </picture>
//       </section>
//     `;

//     countriesHTML = countriesHTML + countryHTML;
//   });

//   countriesElement.innerHTML = countriesHTML;
// };
