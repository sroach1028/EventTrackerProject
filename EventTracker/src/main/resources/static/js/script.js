window.addEventListener('load', function(e) {
	console.log("Document loaded");
	init();
});

function init() {
	  document.extForm.lookup.addEventListener('click', function(event) {
	    event.preventDefault();
	    var extId = document.extForm.extId.value;
	    if (!isNaN(extId) && extId > 0) {
	      getExt(extId);
	    }
	  })
	document.createForm.create.addEventListener('click', function(event) {
		event.preventDefault();
		addNewExtinction();
	});
	  document.searchAll.searchAll.addEventListener('click', function(event) {
		 event.preventDefault(); 
		 getAllExt();
	  });
	}

function getExt(extId) {
	   var xhr = new XMLHttpRequest();
	   xhr.open('GET', 'http://localhost:8084/api/extinctions/' + extId, true);
	   xhr.onreadystatechange = function() {
	      if (xhr.readyState === 4 && xhr.status < 400) {
	         var extinction = JSON.parse(xhr.responseText);
	         displayExt(extinction);
	      }
	      if (xhr.readyState === 4 && xhr.status >= 400) {
	         console.error(xhr.status + ': ' + xhr.responseText);
	         displayExt(null);
	      }
	   };
	   xhr.send(null);
}

function getAllExt(){
	   var xhr = new XMLHttpRequest();
	   xhr.open('GET', 'http://localhost:8084/api/extinctions/', true);
	   xhr.onreadystatechange = function() {
		      if (xhr.readyState === 4 && xhr.status < 400) {
		         var extinctions = JSON.parse(xhr.responseText);
		         displayAllExt(extinctions);
		      }
		      if (xhr.readyState === 4 && xhr.status >= 400) {
		         console.error(xhr.status + ': ' + xhr.responseText);
//		         displayExt(null);
		      }
		   };
		   xhr.send(null);
}

function displayExt(extinction) {
	  var dataDiv = document.getElementById('extData');
	  dataDiv.textContent = '';
	  let h1 = document.createElement('h1');
	  let block = document.createElement('blockquote');
	  let list = document.createElement('ul');
	  let animalClass = document.createElement('li');
	  let year = document.createElement('li');
	  let era = document.createElement('li');
	  let area = document.createElement('li');
	  
	  let editButton = document.createElement('button');
	  editButton.innerText = "Edit";
	  let deleteButton = document.createElement('button');
	  deleteButton.innerText = "DELETE";
	  
	  dataDiv.appendChild(h1);
	  dataDiv.appendChild(block);
	  dataDiv.appendChild(list);
	  
//	  list.appendChild(animalClass);
//	  list.appendChild(year);
//	  list.appendChild(era);
//	  list.appendChild(area);
		if (extinction == null){
			h1.textContent = "Extinction Not Found";
		}
		else {
			  list.appendChild(animalClass);
			  list.appendChild(year);
			  list.appendChild(era);
			  list.appendChild(area);
			h1.textContent = extinction.name;
			animalClass.textContent = extinction.animalClass;
			year.textContent = extinction.year;
			era.textContent = extinction.era;
			area.textContent = extinction.area;
		
		dataDiv.appendChild(editButton);
		dataDiv.appendChild(deleteButton);
		editButton.addEventListener('click', function(event) {
		    event.preventDefault();
		    var extId = extinction.id;
		    if (!isNaN(extId) && extId > 0) {
		      editExtinction(extinction);
		    }
		  })
		  
		  deleteButton.addEventListener('click', function(event) {
			  event.preventDefault();
			  var extId = extinction.id;
			  if (!isNaN(extId) && extId > 0) {
				  deleteExtinction(extId);
			  }
		  })
		}
	}

function deleteExtinction(extId){
	   var xhr = new XMLHttpRequest();
	   xhr.open('DELETE', 'http://localhost:8084/api/extinctions/' + extId, true);
	   xhr.onreadystatechange = function() {
		      if (xhr.readyState === 4 && xhr.status < 400) {
//		         var extinctions = JSON.parse(xhr.responseText);
		         getAllExt();
		      }
		      if (xhr.readyState === 4 && xhr.status >= 400) {
		         console.error(xhr.status + ': ' + xhr.responseText);
//		         displayExt(null);
		      }
		   };
		   xhr.send(null);
}

function displayAllExt(extinctions){
	var dataDiv = document.getElementById('extData');
	dataDiv.textContent = '';
	
	let h1 = document.createElement('h1');
	h1.textContent = 'All Extinctions';
	dataDiv.appendChild(h1);
	
	let table = document.createElement('table');
	dataDiv.appendChild(table);
	let headerRow = document.createElement('tr');
	let head1 = document.createElement('th');
	let head2 = document.createElement('th');
	let head3 = document.createElement('th');
	let head4 = document.createElement('th');
	let head5 = document.createElement('th');
	
	table.appendChild(headerRow);
	headerRow.appendChild(head1);
	headerRow.appendChild(head2);
	headerRow.appendChild(head3);
	headerRow.appendChild(head4);
	headerRow.appendChild(head5);
	head1.textContent = "Name";
	head2.textContent = "Class";
	head3.textContent = "Year";
	head4.textContent = "Era";
	head5.textContent = "Area";
	
	for(let i = 0; i<extinctions.length; i++){
		let row = document.createElement('tr');
		table.appendChild(row);
		let name = document.createElement('td');
		let animalClass = document.createElement('td');
		let year = document.createElement('td');
		let era = document.createElement('td');
		let area = document.createElement('td');
		
		row.appendChild(name);
		row.appendChild(animalClass);
		row.appendChild(year);
		row.appendChild(era);
		row.appendChild(area);
		
		name.textContent = extinctions[i].name;
		animalClass.textContent = extinctions[i].animalClass;
		year.textContent = extinctions[i].year;
		era.textContent = extinctions[i].era;
		area.textContent = extinctions[i].area;
		
		row.addEventListener('click', function(event) {
		    event.preventDefault();
		    var extId = extinctions[i].id;
		    if (!isNaN(extId) && extId > 0) {
		      getExt(extId);
		    }
		  })
	}
	getClassAvg("Mammal");
	getClassAvg("Bird");
	getClassAvg("Amphibian");
	getClassAvg("Reptile");
	
	//	Get AVerage Fxns
	function getClassAvg(className){
		let h4 = document.createElement('h4');
		dataDiv.appendChild(h4);
		h4.textContent = "Can't get there";
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:8084/api/extinctions/avg/' + className, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function() {
		      if (xhr.readyState === 4 && xhr.status < 400) {
			         var avg = JSON.parse(xhr.responseText);
		         h4.textContent = "Average that are " + className+ ": " + avg + "%";
		      }
		      if (xhr.readyState === 4 && xhr.status >= 400) {
		         console.error(xhr.status + ': ' + xhr.responseText);
		         h4.textContent = "No " + className + "'s Stored";
		      }
		   };
		   xhr.send(null);
	}
}


function addNewExtinction(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8084/api/extinctions/', true);
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		      if (xhr.readyState === 4 && xhr.status < 400) {
		         var extinction = JSON.parse(xhr.responseText);
		         getAllExt();
		      }
		      if (xhr.readyState === 4 && xhr.status >= 400) {
		         console.error(xhr.status + ': ' + xhr.responseText);
//		         displayExt(null);
		      }
		   };
	
let form = document.createForm;
var newExtObject = {
	name: form.name.value,
	animalClass: form.animalClass.value,
	year: form.year.value,
	era: form.era.value,
	area: form.area.value
};

var newFilmJsonString = JSON.stringify(newExtObject);
xhr.send(newFilmJsonString);
}

function editExtinction(extinction){
	let dataDiv = document.getElementById('extData');
	let editForm = document.createElement('form');
	dataDiv.appendChild(editForm);
	for (const property in extinction){
		let input = document.createElement('input');
		input.setAttribute("type", "text");
		input.setAttribute("name", `${property}`)
		input.setAttribute("value", `${extinction[property]}`);
		console.log(`${property}`)
		editForm.appendChild(input);
	}
	editForm.id.setAttribute("readonly", "readonly");
	let submitUpdate = document.createElement('button');
	submitUpdate.innerText = "UPDATE";
	editForm.appendChild(submitUpdate);
	submitUpdate.addEventListener('click', function(event) {
			 event.preventDefault();
			 submitEdits();
		  });
	
	function submitEdits(){ 
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'http://localhost:8084/api/extinctions/' + extinction.id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var extinction = JSON.parse(xhr.responseText);
			getAllExt();
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
//		         displayExt(null);
		}
	};
	
	var newExtObject = {
			name: editForm.name.value,
			animalClass: editForm.animalClass.value,
			year: editForm.year.value,
			era: editForm.era.value,
			area: editForm.area.value
	};
	console.log(newExtObject);
	var newFilmJsonString = JSON.stringify(newExtObject);
	xhr.send(newFilmJsonString);
	}
}