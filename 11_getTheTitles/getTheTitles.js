const getTheTitles = function(books) {
    // Given arry that stores two item arrays (book title and author), return array of titles.
    const titles = []

    for (let i = 0; i < books.length; i++) {
        titles[i] = books[i].title;
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
