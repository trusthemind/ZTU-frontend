const books = document.querySelectorAll(".book");

books.forEach((book) => {
  book.addEventListener("click", () => {
    const isGreen = book.style.backgroundColor === "#a7c957";

    books.forEach((otherBook) => {
      otherBook.style.backgroundColor = "#FFFFFF";
    });

    book.style.backgroundColor = isGreen ? "#FFFFFF" : "#a7c957";
  });
});