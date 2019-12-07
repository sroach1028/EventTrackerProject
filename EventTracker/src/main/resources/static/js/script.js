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
	document.addExtForm.create.addEventListener('click', function(event) {
		event.preventDefault();
		addNewExt();
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
	  dataDiv.appendChild(h1);
	  dataDiv.appendChild(block);
	  dataDiv.appendChild(list);
	  list.appendChild(animalClass);
	  list.appendChild(year);
	  list.appendChild(era);
	  list.appendChild(area);
		if (extinction == null){
			h1.textContent = "Extinction Not Found";
		}
		else {
			h1.textContent = extinction.name;
			block.textContent = extinction.description;
			animalClass.textContent = extinction.animalClass;
			year.textContent = extinction.year;
			era.textContent = extinction.era;
			area.textContent = extinction.area;
		}
	}