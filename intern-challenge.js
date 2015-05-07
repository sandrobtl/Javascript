var addOption = function() {
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	var label = document.createElement("label");
	var input = document.createElement("input");
	input.type = "checkbox";
	if (document.getElementById("text-input").value != ''){
		var text = document.getElementById("text-input").value;
		input.addEventListener("click", selectedItem, false);
		label.appendChild(input);
		label.insertAdjacentHTML('beforeend',text);	
		li.appendChild(label);
		ul.appendChild(li);
		document.getElementById("text-input").value = '';
	};
};	
function selectedItem() {
	if(document.activeElement.checked){
		document.activeElement.parentNode.style.textDecoration = "line-through";
	} else {
		document.activeElement.parentNode.style.textDecoration = "none";
	};
};