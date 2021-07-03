let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];



const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for (let itm of arr) {
        console.log(itm);
        if(subject in itm.results) {
            console.log(itm.results);
            allPoints += itm.results[subject];
            sum+=1;
            
        }
    }
    return allPoints / sum;
};

let result = averagePoints(students, 'art');
console.log(result);