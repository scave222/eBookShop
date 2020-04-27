
// elibrary
const addBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('bookModal');
const cancelBtn = document.querySelector('#cancelBtn');
addBtn.addEventListener('click', showModal);
// bookModal.addEventListener('click', hideModal)
cancelBtn.addEventListener('click', hideModal);

function showModal() {
	bookModal.style.display = 'block';
}
function hideModal() {
	bookModal.style.display = 'none';
}
// const elibrary = (function (){
//     let library =[];
//     let bookRow = null;
//     function initialize(HTMLElement){
//         bookRow = document.getElementById(HTMLElement)
//     }
// })();
// get all element of interest
const newBookBtn = document.getElementById('newBookBtn');
const txtTitle = document.getElementById('txtTitle');
const txtPub = document.getElementById('txtPub');
const txtPubYear = document.getElementById('txtPubYear');
const txtPages = document.getElementById('txtPages');
const txtCoverURL = document.getElementById('txtCoverURL');
const bookRow = document.getElementById('bookRow');
newBookBtn.addEventListener('click', addToELibrary);
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
function render() {
	if (localStorage.getItem('books') != null) {
		let booksArray = JSON.parse(localStorage.getItem('books'));
		for (var i = 0; i < booksArray.length; i++) {
			bookRow.innerHTML += `<div class="col-md-4 mt-4 mb-2">
            <div class="card">
                <div class="book-cover">
                    <img src="${booksArray[i].coverImgURL}" class="card-img img-fluid">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${booksArray[i].title}</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates, culpa laborum!</p>
                    <span class="btn btn-primary">Details</span>
                    <span class="btn btn-primary" onclick="deleteBook(${i})" >Delete Book</span>
                </div>
            </div>
        </div>`;
		}
	} else {
		console.log('No books yet');
	}
}
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


// <!DOCTYPE HTML>
// <html>
// <head>
// <title>Rendering an array with EJS</title>
// <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Mini e-bookshop App</title>
//     <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
//     <link rel="stylesheet" type="text/css"  href="css/font-awesome.min.css">
//     <link rel="stylesheet" type="text/css"  href="css/style.css">
// </head>
// <body onload="render()">

//     <div class="pos-f-t">
//         <nav class="navbar navbar-dark bg-dark">
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span class="navbar-toggler-icon"></span>
//             </button>
//           </nav>
//         <div class="collapse" id="navbarToggleExternalContent">
//           <div class="bg-dark p-4">
//                 <ul class="nav text-center">
//                     <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
//                     <li class="nav-item"><a href="#" class="nav-link">About</a></li>
//                     <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
//                     <li class="nav-item"><a href="#" class="nav-link " id="addBtn">Add Book</a></li>
//                 </ul>       
//           </div>
//         </div>
//       </div>

//       <section class="my-services ">
//         <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//             <div class="card-deck container-fluid">
                
//                 <div class="card mt-4 mb-4 ">
//                   <img class="card-img-top" src="https://res.cloudinary.com/scave/image/upload/v1587936458/ebook%20library/1_i2hfgx.jpg" alt="Card image cap">
                  
//                 </div>
//                 <div class="card mt-4 mb-4 ">
//                   <img class="card-img-top" src="https://res.cloudinary.com/scave/image/upload/v1587936467/ebook%20library/2_j227jw.jpg" alt="Card image cap">
                  
//                 </div>
//                 <div class="card mt-4 mb-4 ">
//                   <img class="card-img-top" src="https://res.cloudinary.com/scave/image/upload/v1587936476/ebook%20library/3_zarlqa.jpg" alt="Card image cap">
                 
//                 </div>
//               </div>
//       </section>


//       <section id="bookModal" class="container-fluid">
//         <div class="row">
//             <div class="col-md-4 col-lg-3"></div>
//             <div class="col-md-4 col-lg-6">
//                 <form action="">
//                     <div class="form-group">
//                         <input type="text" class="form-control" placeholder="Book Title"  autofocus=""
//                         id="txtTitle">
//                     </div>
//                     <div class="form-group">
//                         <input type="text" class="form-control" placeholder="Book Publisher"
//                         id="txtPub">
//                     </div>
                    
//                     <div class="form-row">
//                         <div class="form-group col-md-6" >
//                             <input type="number" class="form-control" placeholder="pages"
//                             id="txtPages">  
//                         </div>
//                         <div class="form-group col-md-6" >
//                             <input type="number" class="form-control" placeholder="Year of Publishing"
//                             id="txtPubYear">  
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <input type="text" class="form-control" placeholder="Book Cover Image URL"
//                         id="txtCoverURL">
//                     </div>
//                     <div class="form-group">
//                       <input type="text" class="form-control" placeholder="Price"
//                       id="price">
//                   </div>
        
//                     <div class="form-group">
//                         <input type="button" class="form-control btn btn-primary btn-block" value="Add Book" 
//                         id="newBookBtn">
//                     </div>
//                     <div class="form-group">
//                         <input type="button" class="form-control btn btn-primary btn-block" value="Cancel" 
//                         id="cancelBtn">
//                      </div>
//                 </form>
//             </div>
//             <div class="col-md-4 col-lg-3"></div>
//         </div>
//     </section>


//       <section class="container-fluid pt-2 imgbg">
//         <h1 class="text-center">Available Books</h1>
//         <div class="row " id="bookRow" >
            
          
    
//         </div>
//     </section>


// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
// <script type="text/javascript" src="js/ejs_production.js"></script>
// <script type="text/javascript" src="js/example.js"></script>
// <!-- <script src="js/custom.js"></script> -->
// <script src="js/jquery.js"></script>
// <script src="js/bootstrap.min.js"></script>
// </body>
// </html>

