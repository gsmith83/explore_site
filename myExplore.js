var initialLinks=['conform.html', 'obey.html', 'same.html', 'music.html', 'test.html', 'recover.html', 'random.html'];

function randomLink(){
if (typeof(Storage)!=="undefined")
{
    if(!sessionStorage.count){
        sessionStorage.count=0;
    }
    if (sessionStorage.links)
    {
        if (sessionStorage.count<=6){
            var storedLinks = JSON.parse(sessionStorage.links);
            if (storedLinks.length==0) {
                storedLinks=initialLinks;
            }
            var arraylink = storedLinks[Math.floor(Math.random()*storedLinks.length)];

            var index = storedLinks.indexOf(arraylink);
            if (index > -1){
                storedLinks.splice(index, 1);
            }
            sessionStorage.links = JSON.stringify(storedLinks);
            //alert(sessionStorage.links);
            window.location = arraylink;
            sessionStorage.count += 1;
        }
        else
        {
            window.location = 'last.html';
            //alert(sessionStorage.links);
        }
    }
    else
    {
        sessionStorage.links = JSON.stringify(initialLinks);
        //alert("reading(1) "+sessionStorage.links);
        var storedLinks = JSON.parse(sessionStorage.links);
        var arraylink = storedLinks[Math.floor(Math.random()*storedLinks.length)];

        var index = storedLinks.indexOf(arraylink);
        if (index > -1){
            storedLinks.splice(index, 1);
        }
        sessionStorage.links = JSON.stringify(storedLinks);
        //alert("saved(2) "+sessionStorage.links);
        window.location = arraylink;
    }
}
else
{
    document.write("Sorry, your browser does not support web storage.");
}
}

function startTime(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
// add a zero in front of numbers < 10
m=checkTime(m);
s=checkTime(s);
var date_string = String(parseInt(d.getMonth()) + 1) + " / " + checkTime(d.getDate()) + " / " + d.getFullYear();
document.getElementById("text_time").innerHTML=date_string + " "+h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500); 
}

function checkTime(i){
if (i<10)
	{
		i="0" + i;
	}
return i;
}

function clickCounter()
{
}