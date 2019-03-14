var arrayOfElements = document.getElementsByClassName('elementsHtml');
for (var htmlElement in arrayOfElements) {
	htmlElement.innerHTML = "Some phrase that you want.";
}