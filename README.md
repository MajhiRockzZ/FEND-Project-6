<img src="src/icons/icon.png" align="right" />

# MyReads: A Book Lending App

MyReads project, is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is using React to build the application and using an API server and client library to persist information as you interact with the application.

## ⚡️ Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/) to install MyReads.

```bash
$ npm install
$ yarn start or npm start
```

## 🎯 Usage

- In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

  - Currently Reading
  - Want to Read
  - Read

- Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

- The main page also has a  + icon to /search, a search page that allows you to find books to add to your library.

- The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

- The search page also has a ⬅ icon to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## 🛠 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔑 License
[MIT](https://github.com/MajhiRockzZ/FEND-Project-6/blob/master/LICENSE)

## 🏆 Credits

[Sumesh Majhi](https://github.com/MajhiRockzZ)

## 💐 Acknowledgments

Special thanks to Udacity Team.