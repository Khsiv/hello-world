var arrayOfPeople = [
    {name: "Rick", age: 30, place: 1},
    {name: "Alan", age: 25, place: 2},
    {name: "Joe", age: 40, place: 4},
    {name: "Dave", age: 35, place: 3}
];


function bubbleSort(a, par)
{
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i][par] > a[i + 1][par]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


bubbleSort(arrayOfPeople, 'age');

for (i = 0; i < arrayOfPeople.length; i++) {
   console.log(arrayOfPeople[i]);
   console.log("Hi");
}