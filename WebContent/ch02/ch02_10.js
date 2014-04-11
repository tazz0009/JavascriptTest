var people = [{name:"Rick", age:30}, {name:"Jaka", age:24}];

var result = _.sortBy(people, function(p) {return p.age;});

console.log(result);	// [{name:"Jaka", age:24}, {name:"Rick", age:30}]


var albums = [
    {title: "Sabbath Bloody Sabbath", genre: "Metal"},
    {title: "Scientist", genre: "Dub"},
    {title: "Udertow", genre: "Metal"},
];

var result2 = _.groupBy(albums, function(a){return a.genre;});

console.log(result2);	// {Metal: [{title: "Sabbath Bloody Sabbath", genre: "Metal"}, 
						//          {title: "Udertow", genre: "Metal"}], 
						//   Dub: [{title: "Scientist", genre: "Dub"}]}

var result3 = _.countBy(albums, function(a){return a.genre;});

console.log(result3);	// {Metal: 2, Dub: 1} 