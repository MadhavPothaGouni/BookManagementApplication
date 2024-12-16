CREATE TABLE Authors (
  AuthorID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT NOT NULL
);

CREATE TABLE Genres (
  GenreID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT NOT NULL,
  Description TEXT
);

CREATE TABLE Books (
  BookID INTEGER PRIMARY KEY AUTOINCREMENT,
  Title TEXT NOT NULL,
  AuthorID INTEGER NOT NULL,
  GenreID INTEGER NOT NULL,
  Pages INTEGER NOT NULL,
  PublishedDate TEXT NOT NULL,
  FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID),
  FOREIGN KEY (GenreID) REFERENCES Genres(GenreID)
);