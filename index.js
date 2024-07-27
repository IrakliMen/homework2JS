// task1
for (let i = 2; i < 21; i+=2){
    console.log(i);
}

// task2
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < array.length; i++){
    if(array[i] > 5){
        break
    }else{
        console.log(array[i]);
    }
}

// task3
for (i = 0; i < array.length; i++){
    if(array[i] > 5){
        continue
    }else{
        console.log(array[i]);
    }
}

// task4
let num = -3;
if (num > 0){
    console.log("დადებითია");
}else if( num == 0){
    console.log("ნულია");
}else{
    console.log("უარყოფითია");
}

// task5
const books = [
    {title: "Titanic", author: "Diane Hoh"},
    {title: "Fight Club", author: "Chuck Palahniuk"},
    {title: "Harry Potter", author: "J. K. Rowling"},
    {title: "Lord Of The Rings", author: "J.R.R. Tolkien"},
    {title: "Hobbit", author: "J.R.R. Tolkien"},
    {title: "Animal Farm", author: "George Orwell"}
];
for (let i = 0; i < books.length; i++){
    console.log(books[i].title);
}

//task6
let string = "Javascript";
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.substring(0, 4));