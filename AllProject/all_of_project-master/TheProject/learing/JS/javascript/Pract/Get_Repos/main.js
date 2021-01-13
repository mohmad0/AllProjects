// Main Variables

let theInput = window.document.querySelector('.get-repos input');
let getButton = window.document.querySelector('.get-button');
let reposData = window.document.querySelector('.show-data');

getButton.onclick = function (){

	getRepos();
};

// Get Repos Function

function getRepos(){
	if (theInput.value == '') { // If Value Is Empty

		reposData.innerHTML = '<span>Please Write Github Username.</span>';

	}else{

		fetch(`https://api.github.com/users/${theInput.value}/repos`)
		// .then((response) => {
		// 	return response.json();
		// })

		// .then((data) => {
		// 	console.log(data);
		// });

		.then((response) => response.json()) // [ ES6 ]

		.then((repositories) => {

			// Empty The Container
			reposData.innerHTML = '';

			// Loop On Repositories
			repositories.forEach(repo => {

				// Create The Main Element
				let mainDiv = window.document.createElement('div'),

					// Create Repo Name Text
					repoName = window.document.createTextNode(repo.name);

				// Append The Text To Main Div
				mainDiv.appendChild(repoName);

				// Create Repo URL Anchor
				let theUrl = window.document.createElement('a'),

					// Create Repo URL Text
					theUrlText = window.document.createTextNode('Visit');

				// Append The Repo URL Text To Anchor Tag
				theUrl.appendChild(theUrlText);

				// Add href In Anchor
				theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

				// Set Attribute Blank
				theUrl.setAttribute('target' , '_blank');

				// Append URL Anchor To Main Div
				mainDiv.appendChild(theUrl);

				// Create Stars Count Span
				let starsSpan = window.document.createElement('span'),

				// Create The Stars Count Span Text
					starsText = window.document.createTextNode(`Stars ${repo.stargazers_count}`);

				// Append The Stars Text To The Stars Span
				starsSpan.appendChild(starsText);

				// Append The Stars Text To The Main Div
				mainDiv.appendChild(starsSpan);

				// Add Class On Main Div
				mainDiv.className = 'repo-box';

				// Append The Main Div To Container
				reposData.appendChild(mainDiv);


			});

		});

	}
}