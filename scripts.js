var hres = 72
var vres = 20
var cellArray = []
var chosenOne

function setup() {
	//document.getElementById("table").style.display = "none"
	for (row = 0; row < vres; row++) {
		var tr = document.createElement("tr")
		for (col = 0; col < hres; col++) {
			var td = document.createElement("td")
			var hcell = Math.round(col/hres*360)
			//var scell = Math.round((100-(100*row/vres-50)*(100*row/vres-50)/25))
			var scell = Math.round(2*Math.sqrt(2500-(100*row/vres-50)*(100*row/vres-50)))
			var lcell = Math.round((100*row/vres))
			//td.style.backgroundColor = "hsl(" + col/hres*360 + ", " + (100 - 100*row/vres) + "%, " + (50 - (100*row/vres-50)^7/16000000000) + "%)";
			td.style.backgroundColor = "hsl(" + hcell + ", " + scell + "%, " + lcell + "%)";
			td.innerHTML = "&nbsp;&nbsp;"
			if (lcell < 24) {
				td.style.color = "#ffffff"
			}
			//td.innerHTML = hcell + "," + scell + "," + lcell
			tr.appendChild(td)
			cellArray.push([hcell, scell, lcell, row, col])
		}
		document.getElementById("table").appendChild(tr)
	}
	getNewColour()
}

function onNewWord() {
	word = document.getElementById("word").value
	document.getElementById("word").value = ""
	//alert("chosenOne = " + chosenOne + ", arr length = " + cellArray.length)
	document.getElementById("table").children[cellArray[chosenOne][3]].children[cellArray[chosenOne][4]].innerHTML = word
	/* if (cellArray[chosenOne] == undefined) { 
		alert("nooooooo")
		alert("chosenOne = " + chosenOne + ", arr length = " + cellArray.length)
	} */
	cellArray.splice(chosenOne, 1)
	if (cellArray.length == 0) {
		//alert("We've run out of colours! chosenOne = " + chosenOne + ", arr length = " + cellArray.length)
		done()
		return
	}
	getNewColour()
}

function getNewColour() {
	chosenOne = Math.floor(Math.random() * (cellArray.length))
	document.getElementById("colour").style.backgroundColor = "hsl(" + cellArray[chosenOne][0] + ", " + cellArray[chosenOne][1] + "%, " + cellArray[chosenOne][2] + "%)"
	//document.getElementById("colour").innerHTML = cellArray
}

function done() {
	document.getElementById("headline").remove()
	document.getElementById("word").remove()
	document.getElementById("colour").remove()
	//document.getElementById("table").style.display = "block"
}