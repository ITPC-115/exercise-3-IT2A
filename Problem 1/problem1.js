/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

let People = {
    name: ['Tubol','Lubot','Bahu','Khaa','Hit Tlog','Sum','Ting','Low','Khryz','Kyle'],
    age: [24,12,33,23,65,34,4,6,34,21],
    sex: ['Male','Female','Male','Male','Female','Female','Male','Female','Male','Male']
}


for (let i=0 ; i < 10 ; i++){
    console.log(People.name[i],People.age[i],People.sex[i]);
}