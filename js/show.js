d3.csv("https://raw.githubusercontent.com/naqushab/Leetcode_Companion/develop/data/leetcode.csv", function(d) {
  return {
    no : +d.No,
    id : +d.ID,
    title : d.Title,
    url : d.Link,
    difficulty : d.Difficulty
  };
}).then(function(data) {
  var random = d3.randomInt(data.length)()
  var container = d3.select("div")
                    .data(data.filter(function(d){ return d.no === random}))

  var title = container.select(".title")
                       .append("p")
                       .text(function(d){return d.id + ". " + d.title})

  var difficulty = container.select(".diff")
                            .text(function(d){return d.difficulty})

  var button = container.select("#doit")
                        .on("click", function(d){
                          window.open(d.url)
                        })
});
