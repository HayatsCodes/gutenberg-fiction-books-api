# Gutenberg Fiction Books API

## Introduction
Welcome to the gutenberg-fiction-books API, an API for fiction book lover. The purpose of this API is to get 20000+ fiction books available on [Project Gutenberg's Website](https://www.gutenberg.org/). 

## Architecture and code
The API is written in JavaScript (NodeJS) and uses ExpressJS to resolve API routes. The book data is stored in a MongoDB database and uses pagination to resolve queries.
![Project Architecture](./images/gutenberg-api_architecture.png)

## Documentation
### Base URL
https://gutenberg-fiction-books-api.cyclic.app  - Does not accept requests

### Endpoints
#### Endpoint 1
`/books`
Due to pagination, this is the first 20 books, ordered by the order_id field.

##### Request
`GET /books`

##### Sample Request
`GET https://gutenberg-fiction-books-api.cyclic.app/books`

##### Response
Returns the books in JSON format

##### Sample Response

<details>
  <summary>Click to expand</summary>
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
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/27.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/27.html.images",
            "txt": "http://www.gutenberg.org/ebooks/27.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/27.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/27.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/27.kf8.images"
        },
        "gutenberg_id": "27",
        "authors": "Hardy, Thomas, 1840-1928",
        "book_url": "http://www.gutenberg.org/ebooks/27",
        "order_id": 6,
        "subjects": "Didactic fiction; Love stories; Triangles (Interpersonal relations) -- Fiction; Pastoral fiction; Farm life -- Fiction; Women farmers -- Fiction; Wessex (England) -- Fiction",
        "title": "Far from the Madding Crowd",
        "year": "1992-03-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/32.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/32.html.images",
            "txt": "http://www.gutenberg.org/ebooks/32.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/32.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/32.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/32.kf8.images"
        },
        "gutenberg_id": "32",
        "authors": "Gilman, Charlotte Perkins, 1860-1935",
        "book_url": "http://www.gutenberg.org/ebooks/32",
        "order_id": 7,
        "subjects": "Utopias -- Fiction; Women -- Fiction; Utopian fiction; Black humor",
        "title": "Herland",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/33.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/33.html.images",
            "txt": "http://www.gutenberg.org/ebooks/33.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/33.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/33.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/33.kf8.images"
        },
        "gutenberg_id": "33",
        "authors": "Hawthorne, Nathaniel, 1804-1864",
        "book_url": "http://www.gutenberg.org/ebooks/33",
        "order_id": 8,
        "subjects": "Adultery -- Fiction; Historical fiction; Revenge -- Fiction; Psychological fiction; Married women -- Fiction; Clergy -- Fiction; Triangles (Interpersonal relations) -- Fiction; Illegitimate children -- Fiction; Women immigrants -- Fiction; Puritans -- Fiction; Boston (Mass.) -- History -- Colonial period, ca. 1600-1775 -- Fiction",
        "title": "The Scarlet Letter",
        "year": "1992-06-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/35.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/35.html.images",
            "txt": "http://www.gutenberg.org/ebooks/35.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/35.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/35.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/35.kf8.images"
        },
        "gutenberg_id": "35",
        "authors": "Wells, H. G. (Herbert George), 1866-1946",
        "book_url": "http://www.gutenberg.org/ebooks/35",
        "order_id": 9,
        "subjects": "Science fiction; Time travel -- Fiction; Dystopias -- Fiction",
        "title": "The Time Machine",
        "year": "2004-10-02"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/36.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/36.html.images",
            "txt": "http://www.gutenberg.org/ebooks/36.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/36.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/36.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/36.kf8.images"
        },
        "gutenberg_id": "36",
        "authors": "Wells, H. G. (Herbert George), 1866-1946",
        "book_url": "http://www.gutenberg.org/ebooks/36",
        "order_id": 10,
        "subjects": "Science fiction; War stories; Martians -- Fiction; Mars (Planet) -- Fiction; Space warfare -- Fiction; Imaginary wars and battles -- Fiction; Life on other planets -- Fiction",
        "title": "The War of the Worlds",
        "year": "2004-10-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/41.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/41.html.images",
            "txt": "http://www.gutenberg.org/ebooks/41.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/41.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/41.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/41.kf8.images"
        },
        "gutenberg_id": "41",
        "authors": "Irving, Washington, 1783-1859",
        "book_url": "http://www.gutenberg.org/ebooks/41",
        "order_id": 11,
        "subjects": "Ghosts -- Fiction; New York (State) -- History -- 1775-1865 -- Fiction",
        "title": "The Legend of Sleepy Hollow",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/42.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/42.html.images",
            "txt": "http://www.gutenberg.org/ebooks/42.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/42.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/42.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/42.kf8.images"
        },
        "gutenberg_id": "42",
        "authors": "Stevenson, Robert Louis, 1850-1894",
        "book_url": "http://www.gutenberg.org/ebooks/42",
        "order_id": 12,
        "subjects": "Science fiction; Horror tales; London (England) -- Fiction; Physicians -- Fiction; Psychological fiction; Self-experimentation in medicine -- Fiction; Multiple personality -- Fiction",
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "year": "1992-10-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/43.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/43.html.images",
            "txt": "http://www.gutenberg.org/ebooks/43.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/43.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/43.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/43.kf8.images"
        },
        "gutenberg_id": "43",
        "authors": "Stevenson, Robert Louis, 1850-1894",
        "book_url": "http://www.gutenberg.org/ebooks/43",
        "order_id": 13,
        "subjects": "Science fiction; Horror tales; London (England) -- Fiction; Physicians -- Fiction; Psychological fiction; Self-experimentation in medicine -- Fiction; Multiple personality -- Fiction",
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/44.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/44.html.images",
            "txt": "http://www.gutenberg.org/ebooks/44.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/44.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/44.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/44.kf8.images"
        },
        "gutenberg_id": "44",
        "authors": "Cather, Willa, 1873-1947",
        "book_url": "http://www.gutenberg.org/ebooks/44",
        "order_id": 14,
        "subjects": "Musical fiction; Young women -- Fiction; Bildungsromans; Chicago (Ill.) -- Fiction; Swedish Americans -- Fiction; Colorado -- Fiction; Opera -- Fiction; Children of clergy -- Fiction; Women singers -- Fiction",
        "title": "The Song of the Lark",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/45.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/45.html.images",
            "txt": "http://www.gutenberg.org/ebooks/45.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/45.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/45.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/45.kf8.images"
        },
        "gutenberg_id": "45",
        "authors": "Montgomery, L. M. (Lucy Maud), 1874-1942",
        "book_url": "http://www.gutenberg.org/ebooks/45",
        "order_id": 15,
        "subjects": "Orphans -- Fiction; Islands -- Fiction; Friendship -- Fiction; Bildungsromans; Girls -- Fiction; Country life -- Prince Edward Island -- Fiction; Prince Edward Island -- History -- 20th century -- Fiction; Canada -- History -- 1867-1914 -- Fiction; Shirley, Anne (Fictitious character) -- Fiction",
        "title": "Anne of Green Gables",
        "year": "2008-06-27"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/46.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/46.html.images",
            "txt": "http://www.gutenberg.org/ebooks/46.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/46.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/46.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/46.kf8.images"
        },
        "gutenberg_id": "46",
        "authors": "Dickens, Charles, 1812-1870; Leech, John, 1817-1864 [Illustrator]",
        "book_url": "http://www.gutenberg.org/ebooks/46",
        "order_id": 16,
        "subjects": "Christmas stories; London (England) -- Fiction; Poor families -- Fiction; Ghost stories; Misers -- Fiction; Sick children -- Fiction; Scrooge, Ebenezer (Fictitious character) -- Fiction",
        "title": "A Christmas Carol in Prose; Being a Ghost Story of Christmas",
        "year": "2004-08-11"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/47.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/47.html.images",
            "txt": "http://www.gutenberg.org/ebooks/47.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/47.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/47.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/47.kf8.images"
        },
        "gutenberg_id": "47",
        "authors": "Montgomery, L. M. (Lucy Maud), 1874-1942",
        "book_url": "http://www.gutenberg.org/ebooks/47",
        "order_id": 17,
        "subjects": "Orphans -- Fiction; Islands -- Fiction; Teachers -- Fiction; Prince Edward Island -- History -- 20th century -- Fiction; Canada -- History -- 1914-1945 -- Fiction; Shirley, Anne (Fictitious character) -- Fiction",
        "title": "Anne of Avonlea",
        "year": "2006-03-08"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/51.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/51.html.images",
            "txt": "http://www.gutenberg.org/ebooks/51.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/51.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/51.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/51.kf8.images"
        },
        "gutenberg_id": "51",
        "authors": "Montgomery, L. M. (Lucy Maud), 1874-1942",
        "book_url": "http://www.gutenberg.org/ebooks/51",
        "order_id": 18,
        "subjects": "Orphans -- Fiction; Prince Edward Island -- History -- 20th century -- Fiction; Interpersonal relations -- Fiction; Canada -- History -- 1914-1945 -- Fiction; Self-perception -- Fiction; Universities and colleges -- Fiction; Nova Scotia -- History -- 20th century -- Fiction; Shirley, Anne (Fictitious character) -- Fiction",
        "title": "Anne of the Island",
        "year": "2006-03-08"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/54.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/54.html.images",
            "txt": "http://www.gutenberg.org/ebooks/54.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/54.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/54.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/54.kf8.images"
        },
        "gutenberg_id": "54",
        "authors": "Baum, L. Frank (Lyman Frank), 1856-1919",
        "book_url": "http://www.gutenberg.org/ebooks/54",
        "order_id": 19,
        "subjects": "Oz (Imaginary place) -- Juvenile fiction; Fantasy literature; Conduct of life -- Juvenile fiction; Friendship -- Juvenile fiction; Voyages and travels -- Juvenile fiction; Magic -- Juvenile fiction; Practical jokes -- Juvenile fiction; Youth -- Conduct of life -- Juvenile fiction; Queens -- Juvenile fiction; Kings and rulers -- Juvenile fiction; Witches -- Juvenile fiction; Women soldiers -- Juvenile fiction",
        "title": "The Marvelous Land of Oz",
        "year": "1993-02-01"
    },
    {
        "download_link": {
            "html": "http://www.gutenberg.org/ebooks/55.html.noimages",
            "html5": "http://www.gutenberg.org/ebooks/55.html.images",
            "txt": "http://www.gutenberg.org/ebooks/55.txt.utf-8",
            "epub": "http://www.gutenberg.org/ebooks/55.epub.noimages",
            "epub3": "http://www.gutenberg.org/ebooks/55.epub3.images",
            "kindle": "http://www.gutenberg.org/ebooks/55.kf8.images"
        },
        "gutenberg_id": "55",
        "authors": "Baum, L. Frank (Lyman Frank), 1856-1919",
        "book_url": "http://www.gutenberg.org/ebooks/55",
        "order_id": 20,
        "subjects": "Oz (Imaginary place) -- Juvenile fiction; Fantasy literature; Courage -- Juvenile fiction; Home -- Juvenile fiction; Good and evil -- Juvenile fiction; Dreams -- Juvenile fiction; Gale, Dorothy (Fictitious character) -- Juvenile fiction; Cowardly Lion (Fictitious character) -- Juvenile fiction; Cyclones -- Juvenile fiction; Scarecrow (Fictitious character from Baum) -- Juvenile fiction; Toto (Fictitious character) -- Juvenile fiction; Witches -- Juvenile fiction; Wizard of Oz (Fictitious character) -- Juvenile fiction; Tin Woodman (Fictitious character) -- Juvenile fiction",
        "title": "The Wonderful Wizard of Oz",
        "year": "1993-02-01"
    }
]
</details>

#### Endpoint 2



## AUTHOR
- [Hayatudeen Abdulrahman](https://github.com/HayatsCodes) - Passionate backend developer | Building meaningful solutions.
