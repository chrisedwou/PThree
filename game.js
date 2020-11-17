console.log("Initialization check for JS");
let selected = 0;
let picks = [];
let points = 0;

$(".gameImg").on("click",function(){
    console.log($(this).attr("class"));
    if($(this).attr("class") == "gameImg" && selected <3)
    {
        ++selected
        console.log($(this).attr("id") + " Selected");
    }
    else if ($(this).attr("class") == "gameImg" && selected == 3) return;

    if($(this).attr("class") != "gameImg")
    {
        --selected
        console.log($(this).attr("id") + "  Unselected");
        
    }
    $(this).toggleClass("selected");
    console.log("Number Selected: " + selected);   
});

$("#endTurn").on("click",function(){
    if (selected == 3){
        let temp = $(".selected");
        console.log(temp);
        for (let i = 0; i < 3; ++i)
        {
            picks[i] = temp.eq(i).attr("id");
        }
        console.log(picks);
        let temp2 = new Array("a","b","c");
        compare = (a1, a2) => a1.filter(v => a2.includes(v)).length;
        points = picks.filter(v => temp2.includes(v)).length;
        console.log(points);
        points = 0;
    }
});