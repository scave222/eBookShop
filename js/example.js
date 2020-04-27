$("#addBtn").click(function (){
	$("#bookModal").show();
})
$("#cancelBtn").click(function (){
	$("#bookModal").hide();
})
$("#newBookBtn").click(function (){
	addToELibrary();
})


// const bookRow = document.getElementById('bookRow');
// newBookBtn.addEventListener('click', addToELibrary);
const elibrary = [];
function Book(title, pub, pages, yearPub, coverImgURL) {
	this.title = title;
	this.pub = pub;
	this.pages = pages;
    this.yearPub = yearPub;
    this.coverImgURL = coverImgURL;
    
	this.read = 0;
}

function addToELibrary() {
	if (validateInput()) {
		let title = txtTitle.value;
		let pub = txtPub.value;
		let pages = txtPages.value;
        let coverImgURL = txtCoverURL.value;
        
        let yearPub = txtPubYear.value;
        
		let book = new Book(title, pub, pages, yearPub, coverImgURL);
		// elibrary.push(book);
		saveBook(book);
		location.reload();
		bookRow.innerHTML += `<div class="col-md-4 mt-4">
        <div class="card">
            <div class="book-cover">
                <img src="${booksArray[i].coverImgURL}" class="card-img img-fluid">
            </div>
            <div class="card-body">
                <h3 class="card-title">${booksArray[i].title}</h3>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates, culpa laborum!</p>
                
                <span class="btn btn-primary">Read Book</span>
                <span class="btn btn-primary" onclick="deleteBook(${booksArray[i].pages})" >Delete Book</span>
            </div>
        </div>
    </div>`;
	} else {
		alert('Sorry, all fields are required');
	}
}
function validateInput() {
	if (txtTitle.value == '' || txtPub.value == '' || txtPubYear.value == '' || txtPages.value == '') {
		return false;
	}
	return true;
}

function showDetails(boo){
	if (localStorage.getItem('books') !== null){
		booksArray = JSON.parse(localStorage.getItem('books'))
		booksArray[boo];
		console.log(booksArray[boo]);
        document.getElementById("show").innerHTML=`
        <h5 class="clas6">Title: <span>${booksArray[boo].title}</span></h5>
		<h6 class="clas6">Publisher: <span>${booksArray[boo].pub}</span></h6>
		<p>Year Published: <span>${booksArray[boo].yearPub}</span></p>
		<p>Pages: <span>${booksArray[boo].pages}</span></p>
		
        <button class="btn btn2 btn-block btn-primary" id="btn" onClick="closeModalBox()">close</button>
	</div>
		`;
		console.log(booksArray[boo].bookextract)

		document.getElementById("show").style.display = 'block';
	}
}

function closeModalBox(){
    show.style.display = 'none';
}


// function render() {
// 	if (localStorage.getItem('books') != null) {
// 		let booksArray = JSON.parse(localStorage.getItem('books'));
// 		for (var i = 0; i < booksArray.length; i++) {

           
            
// 			bookRow.innerHTML += `<div class="col-md-4 mt-4 mb-2">
//             <div class="card">
//                 <div class="book-cover">
//                     <img src="${booksArray[i].coverImgURL}" class="card-img img-fluid">
//                 </div>
//                 <div class="card-body">
//                     <h3 class="card-title">${booksArray[i].title}</h3>
//                     <h4 class="card-title">${booksArray[i].yearPub}</h4>
//                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Voluptates, culpa laborum!</p>
                    
//                     <span class="btn btn-primary">Details</span>
//                     <span class="btn btn-primary" onclick="deleteBook(${i})" >Delete Book</span>
//                 </div>
//             </div>
//         </div>`;
// 		}
// 	} else {
// 		console.log('No books yet');
// 	}
// }
function saveBook(bookObj) {
	let booksArray = [];
	if (localStorage.getItem('books') == null) {
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary!');
	} else {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary');
	}
}

function deleteBook(bookID) {
	if (localStorage.getItem('books') !== null) {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.splice(bookID, 1);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('book deleted');
		location.reload();
	}
}


        $(function() {
            var template = new EJS({
                text: $('#template').html()
            });
            let booksArray = JSON.parse(localStorage.getItem('books'));
            console.log(booksArray);
            $('#bookRow').html(template.render({list:booksArray}));
        });
        
   