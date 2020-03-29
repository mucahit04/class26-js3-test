// VERSION 2

/*
1.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM. 
- Creates an unordered list for each book

Use the following array of objects:
*/
const books = [{
		bookName: 'The Nature of Software Development',
		author: 'Ron Jeffries',
		coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
	},
	{
		bookName: 'Clean Code',
		author: 'Robert Cecil Martin',
		coverURL: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
	},
	{
		bookName: 'Refactoring',
		author: 'Kent Beck & Martin Fowler',
		coverUrl: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
	},
];

const body = document.body;

function myBooks(arr) {
	arr.forEach(book => {
		const ul = document.createElement('ul');
		for (let detail in book) {
			// console.log(book[detail]);
			const li = document.createElement('li');
			li.innerHTML = book[detail];
			ul.appendChild(li);
			body.appendChild(ul);
		}

	});

}
myBooks(books);


/*
2.
Write a function that:
- Makes an API call using the Fetch API.
- Uses the following URL: https://jsonplaceholder.typicode.com/users/1
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/
const link = 'https://jsonplaceholder.typicode.com/users/1';
getUsers(link);
async function getUsers(url) {

	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		const ul = document.createElement('ul');
		body.appendChild(ul);

		const liName = document.createElement('li');
		liName.innerHTML = data.name;
		ul.appendChild(liName);

		const liEmail = document.createElement('li');
		liEmail.innerHTML = data.email;
		ul.appendChild(liEmail);

		const liCity = document.createElement('li');
		liCity.innerHTML = data.address.city;
		ul.appendChild(liCity);

	} catch (error) {
		console.log(error);
	}


}




/*
3.
Write a JavaScript function that:
- Accepts a string of 4 words as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/

const string = 'the quick brown fox';
upperCase(string);

function upperCase(str) {
	str = str.split(" ");
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}

	return str.join(" ");
}