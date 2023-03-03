# Gutenberg Fiction Books API

## Introduction
Welcome to the gutenberg-fiction-books API, an API for fiction book lover. The purpose of this API is to get 20000+ fiction books available on [Project Gutenberg's Website](https://www.gutenberg.org/). 

## Architecture and code
The API is written in JavaScript (NodeJS) and uses ExpressJS to resolve API routes. The book data is stored in a MongoDB database and uses pagination to resolve queries.
![Project Architecture](./images/gutenberg-api_architecture.png)

## Documentation
### Base URL
https://gutenberg-fiction-books.cyclic.app  - Does not accept requests

### Endpoints
#### Endpoint 1
`/books`
Due to pagination, this is the first 20 books, ordered by the order_id field.

##### Request
`GET /books`

##### Sample Request
`GET https://gutenberg-fiction-books.cyclic.app/books`

##### Response
Returns the books in JSON format

##### Sample Response

<div>
  <pre>
  <code>
[
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/11.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/11.html.images",
            "txt": "http://www.gutenberg.org/ebooks/11.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/11.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/11.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/11.kf8.images"
        },
        "gutenberg_id": "11",
        "authors": "Carroll, Lewis, 1832-1898",
        "book_url": "http://www.gutenberg.org/ebooks/11",
        "order_id": 1,
        "subjects": "Fantasy fiction; Children's stories; Imaginary places -- Juvenile fiction; Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "title": "Alice's Adventures in Wonderland",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/12.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/12.html.images",
            "txt": "http://www.gutenberg.org/ebooks/12.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/12.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/12.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/12.kf8.images"
        },
        "gutenberg_id": "12",
        "authors": "Carroll, Lewis, 1832-1898",
        "book_url": "http://www.gutenberg.org/ebooks/12",
        "order_id": 2,
        "subjects": "Fantasy fiction; Children's stories; Imaginary places -- Juvenile fiction; Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "title": "Through the Looking-Glass",
        "year": "2008-06-25"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/15.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/15.html.images",
            "txt": "http://www.gutenberg.org/ebooks/15.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/15.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/15.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/15.kf8.images"
        },
        "gutenberg_id": "15",
        "authors": "Melville, Herman, 1819-1891",
        "book_url": "http://www.gutenberg.org/ebooks/15",
        "order_id": 3,
        "subjects": "Whaling -- Fiction; Sea stories; Psychological fiction; Ship captains -- Fiction; Adventure stories; Mentally ill -- Fiction; Ahab, Captain (Fictitious character) -- Fiction; Whales -- Fiction; Whaling ships -- Fiction",
        "title": "Moby-Dick; or, The Whale",
        "year": "1991-05-01"
    },
    ...
]        
    </code>
  </pre>
</div>
Note that 20 books would be returned in the response while 3 is shown here.

##### Query Parameters

##### Page parameter
`/books?page=pageNumber` where pageNumber is the desired page number to request.

The page parameter defaults to 1 if not specified in the get request.
For example `GET https://gutenberg-fiction-books.cyclic.app/books` returns the first page of the book collection since the page parameter wasn't specified.

##### Request
`GET /books?page=pageNumber`

##### Sample Request
`GET https://gutenberg-fiction-books.cyclic.app/books?page=10`

##### Response
Return the book in JSON format

##### Sample Response
```
[
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/363.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/363.html.images",
            "txt": "http://www.gutenberg.org/ebooks/363.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/363.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/363.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/363.kf8.images"
        },
        "gutenberg_id": "363",
        "authors": "Burroughs, Edgar Rice, 1875-1950",
        "book_url": "http://www.gutenberg.org/ebooks/363",
        "order_id": 181,
        "subjects": "Adventure stories; Mystery fiction",
        "title": "The Oakdale Affair",
        "year": "2008-07-11"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/364.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/364.html.images",
            "txt": "http://www.gutenberg.org/ebooks/364.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/364.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/364.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/364.kf8.images"
        },
        "gutenberg_id": "364",
        "authors": "Burroughs, Edgar Rice, 1875-1950",
        "book_url": "http://www.gutenberg.org/ebooks/364",
        "order_id": 182,
        "subjects": "Fantasy fiction; Impostors and imposture -- Fiction; Adventure stories; Kings and rulers -- Fiction; Mistaken identity -- Fiction",
        "title": "The Mad King",
        "year": "1995-11-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/366.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/366.html.images",
            "txt": "http://www.gutenberg.org/ebooks/366.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/366.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/366.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/366.kf8.images"
        },
        "gutenberg_id": "366",
        "authors": "Rinehart, Mary Roberts, 1876-1958",
        "book_url": "http://www.gutenberg.org/ebooks/366",
        "order_id": 183,
        "subjects": "Debutantes -- Fiction",
        "title": "Bab: A Sub-Deb",
        "year": "2006-03-15"
    },
    ...
 ]
```

##### Limit parameter
`/books?limit=limitNumber` where limitNumber is the desired book limit per request.

The limit parameter defaults to 20 if not specified in the get request.
For example `GET https://gutenberg-fiction-books.cyclic.app/books?page=2` returns 20 books in the second page of the book collection since the limit parameter wasn't specified.

##### Request
`GET /books?limit=limitNumber`

##### Sample Request
`GET https://gutenberg-fiction-books.cyclic.app/books?limit=5`

##### Response
Return the book in JSON format

##### Sample Response
```
[
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/11.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/11.html.images",
            "txt": "http://www.gutenberg.org/ebooks/11.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/11.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/11.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/11.kf8.images"
        },
        "gutenberg_id": "11",
        "authors": "Carroll, Lewis, 1832-1898",
        "book_url": "http://www.gutenberg.org/ebooks/11",
        "order_id": 1,
        "subjects": "Fantasy fiction; Children's stories; Imaginary places -- Juvenile fiction; Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "title": "Alice's Adventures in Wonderland",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/12.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/12.html.images",
            "txt": "http://www.gutenberg.org/ebooks/12.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/12.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/12.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/12.kf8.images"
        },
        "gutenberg_id": "12",
        "authors": "Carroll, Lewis, 1832-1898",
        "book_url": "http://www.gutenberg.org/ebooks/12",
        "order_id": 2,
        "subjects": "Fantasy fiction; Children's stories; Imaginary places -- Juvenile fiction; Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "title": "Through the Looking-Glass",
        "year": "2008-06-25"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/15.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/15.html.images",
            "txt": "http://www.gutenberg.org/ebooks/15.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/15.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/15.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/15.kf8.images"
        },
        "gutenberg_id": "15",
        "authors": "Melville, Herman, 1819-1891",
        "book_url": "http://www.gutenberg.org/ebooks/15",
        "order_id": 3,
        "subjects": "Whaling -- Fiction; Sea stories; Psychological fiction; Ship captains -- Fiction; Adventure stories; Mentally ill -- Fiction; Ahab, Captain (Fictitious character) -- Fiction; Whales -- Fiction; Whaling ships -- Fiction",
        "title": "Moby-Dick; or, The Whale",
        "year": "1991-05-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/16.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/16.html.images",
            "txt": "http://www.gutenberg.org/ebooks/16.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/16.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/16.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/16.kf8.images"
        },
        "gutenberg_id": "16",
        "authors": "Barrie, J. M. (James Matthew), 1860-1937",
        "book_url": "http://www.gutenberg.org/ebooks/16",
        "order_id": 4,
        "subjects": "Fantasy literature; Peter Pan (Fictitious character) -- Fiction; Never-Never Land (Imaginary place) -- Fiction; Pirates -- Fiction; Fairies -- Fiction",
        "title": "Peter Pan",
        "year": "2008-06-25"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/24.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/24.html.images",
            "txt": "http://www.gutenberg.org/ebooks/24.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/24.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/24.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/24.kf8.images"
        },
        "gutenberg_id": "24",
        "authors": "Cather, Willa, 1873-1947",
        "book_url": "http://www.gutenberg.org/ebooks/24",
        "order_id": 5,
        "subjects": "Nebraska -- Fiction; Historical fiction; Frontier and pioneer life -- Nebraska -- Fiction; Domestic fiction; Siblings -- Fiction; Farm life -- Fiction; Women pioneers -- Fiction; Women farmers -- Fiction; Women immigrants -- Fiction; Swedish Americans -- Fiction",
        "title": "O Pioneers!",
        "year": "2008-06-27"
    }
]
```
The page and limit parameter can also be combined
`https://gutenberg-fiction-books.cyclic.app/books?page=100&limit=5`

#### order_id parameter
`/books?order_id=id`
Gets a particular book by the order_id field

##### Request
`GET /books?order_id=id`

##### Sample Request
`GET https://gutenberg-fiction-books.cyclic.app/books?order_id=20000`

##### Response
Return the book in JSON format

##### Sample Response
```
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/66581.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/66581.html.images",
            "txt": "http://www.gutenberg.org/ebooks/66581.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/66581.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/66581.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/66581.kf8.images"
        },
        "gutenberg_id": "66581",
        "authors": "Grant, James, 1822-1887",
        "book_url": "http://www.gutenberg.org/ebooks/66581",
        "order_id": 20000,
        "subjects": "Soldiers -- Fiction; British -- Afghanistan -- Fiction",
        "title": "Colville of the Guards, Volume 2 (of 3)",
        "year": "2021-10-20"
    }
```


#### Endpoint 2
`/books/:id`
Gets a particular book by the gutenberg_id field as assigned on the gutenberg's website

##### Request
`GET /books/:id`

##### Sample Request
`GET https://gutenberg-fiction-books.cyclic.app/books/:1345`

##### Response
Return the book in JSON format

##### Sample Response
```
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/1345.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/1345.html.images",
            "txt": "http://www.gutenberg.org/ebooks/1345.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/1345.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/1345.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/1345.kf8.images"
        },
        "gutenberg_id": "1345",
        "authors": "Balzac, Honoré de, 1799-1850; Wormeley, Katharine Prescott, 1830-1908 [Translator]",
        "book_url": "http://www.gutenberg.org/ebooks/1345",
        "order_id": 607,
        "subjects": "French fiction -- Translations into English",
        "title": "The Vicar of Tours",
        "year": "2005-08-10"
    }
```

## AUTHOR
- [Hayatudeen Abdulrahman](https://github.com/HayatsCodes) - Passionate backend developer | Building meaningful solutions.
