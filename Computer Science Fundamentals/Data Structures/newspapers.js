//Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data


// input: Publisher name ('STRING'), publishing date ('YYYY-MM-DD')


class Periodicals {
    constructor() {
        this.size = 1000;
        this.data = {};
    }
    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result % this.size;
    }

    addPaper(paper) {
        let key = `${paper.ReleaseDate}+${paper.Publisher}`;
        this.data[this.hash(key)] = paper;
    }

    searchPeriodicals(date, pub) {
        let key = `${date}+${pub}`;
        let query = this.data[this.hash(key)];
        let result = "No results found.";
        if (query === undefined) { return result }
        if (`${query.ReleaseDate}+${query.Publisher}` === key) { result = query; }
        return result;
    }
}


let archive = new Periodicals()
archive.addPaper({
    Publisher: 'Providence Journal',
    ReleaseDate: '2019-01-22'
})
archive.addPaper({ReleaseDate: '1986-09-10', Publisher: 'El Vocero de Puerto Rico'})
archive.addPaper({ReleaseDate: '2018-05-01', Publisher: 'Attleboro Sun Chronicle'})
archive.data 
// should see --> 
// {
//     336: {Publisher: "Providence Journal", ReleaseDate: "2019-01-22"}
//     715: {ReleaseDate: "1986-09-10", Publisher: "El Vocero de Puerto Rico"}       
//     767: {ReleaseDate: "2018-05-01", Publisher: "Attleboro Sun Chronicle"}
// }

console.log(archive.searchPeriodicals('2019-01-22','Attleboro Sun Chronicle')) // No results found.
console.log(archive.searchPeriodicals('1986-09-10','El Vocero de Puerto Rico')) // should find index 715

