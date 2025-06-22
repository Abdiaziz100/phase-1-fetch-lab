function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);         // Optional: See the book data in the console
      renderBooks(data);         // Displays the books on the page
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}
