let people=["Grey","Mary","Devon","James"];
for( i=0;i<people.length;i++)
    console.log(people[i]);
    people.shift();
    people.pop();
    people.unshift("Matt");
    people.push("Karthikeyan");
    for(let i=0;i<2;i++)
    console.log(people[i]);
    let slicer=people.slicer(2);
    console.log(slicer);
    console.log(people.indexOf("Mary"));
    console.log(people.indexOf("foo"));
    people.splice(2,1,"elizabeth","artie");
    console.log(people);
    let withBob=people.concat("bob");
    console.log(withBob);