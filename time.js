var dest = document.querySelector("#destination");
var pict = document.querySelector("#picture");
var text = document.querySelector("#text");
var spin = document.querySelector("#spinner");
const d = new Date();
var dates = [
	"",
	"1066",
	"1215",
	"1346",
	"1455",
	"1564",
	"1605",
	"1815",
	"1837",
	"1945",
	"1989",
	"2022"
];
var images = [
	"",
	// "https://drive.google.com/uc?id=187pWYqHowUBRHE_bSv75nQP0IVWF7W6F",
	"https://www.gstatic.com/webp/gallery/1.webp",
	"https://www.gstatic.com/webp/gallery/2.webp",
	"https://www.gstatic.com/webp/gallery/3.webp",
	"https://www.gstatic.com/webp/gallery/5.webp",
	"https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	"https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	"https://images.unsplash.com/photo-1598970829637-89b81d47ae27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
	"https://images.unsplash.com/photo-1589048996338-04c7910c7502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGpwZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
	"https://images.unsplash.com/photo-1485529910432-783b455774fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGpwZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
	"https://images.unsplash.com/photo-1640681858035-5e62f72d90a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGpwZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
	"https://images.unsplash.com/photo-1639241423587-a9802ac301bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpwZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
];
var posit = [
	"",
	"0",
	"0",
	"-90px",
	"0",
	"0",
	"0",
	"-90px",
	"0",
	"0",
	"-70px",
	"-90px"
];
var visited = [
	"",
	"Battle of Hastings",
	"Signing of the Magna Carte",
	"War of the roses",
	"The Black Plague",
	"Birth of William Shakespear",
	"The Gun Powder Plot",
	"Battle of Waterloo",
	"Victoria becomes Queen",
	"World War 2 ends",
	"Birth of the Internet",
	"Home"
];
window.onload = function () {
	dest.value = d.getFullYear();
};
finder.oninput = function () {
	dest.value = dates[finder.value];
	text.innerHTML = visited[finder.value];
};
engage.onclick = function () {
	spin.style.display = "block";
	spin.style.animationPlayState = "running";
	pict.src = images[finder.value];
	setTimeout(setAnimation, 2000);
};
function setAnimation() {
	spin.style.display = "none";
	spin.style.animationPlayState = "paused";
	setImagesDatesInfo();
}
function setImagesDatesInfo() {
	inc = dest.value;
	pict.style.top = posit[finder.value];
	spin.style.top = null;
}
