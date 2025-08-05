// lets generate getColor() function
const getColor = () =>{
	// lets create a randomNumber which have hexa color code value
	const randomNumber = Math.floor(Math.random() * 16777215);
	const randomcode = "#" +randomNumber.toString(16);
	// with the help of randomcode we change the backgroundColor of webpage
	document.body.style.backgroundColor=randomcode;
	// to get the color code in <h2> we put randomcode value in <h2>
	document.getElementById("color-code").innerHTML=randomcode;
	// make a clipboard to copy the randomcode
	navigator.clipboard.writeText(randomcode)
}

// this is event call whenever click on the button this will call
document.getElementById("btn").addEventListener("click" , getColor)
// Initial call whenever webpage is loaded
getColor();