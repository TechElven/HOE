// let button = document.querySelectorAll('.btn-port');
// let storeImages = document.querySelectorAll('.column');
// console.log(button);

// for (let i = 0; i < button.lenght; i++) {
//     button[i].addEventListener ('click', function(){
//         for(let j = 0; j < button.lenght; j++) {
//             button[j].classList.remove('active');
//         }
//         this.classList.add('active');
//         // let current = document.getElementsByClassName("active");
//         // for(let j = 0; j < current.lenght; j++) {
//         //     current[0].className = current[0].className.replace(" active", "");
//         //     this.className += " active";
//         // }

//     });
// }


(function () {
    const buttons = document.querySelectorAll('.btn-port');
    const storeImages = document.querySelectorAll('.column');
    // const btnContainer = document.getElementById("myBtnContainer");


    //Now we have to find out which button was press in order to act according to the target.
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            //first we have to prevent the event default.
            e.preventDefault();

            const filter = e.target.dataset.filter;

            storeImages.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'none';
                    }
                }
            }) 
        })
    })
})();














// filterSelection("all") //Execute the funtion and show all colums
// function  filterSelection (c) {
//     let x, i;
//     x = document.getElementsByClassName("column");
//     if (c == "all") c = "";
    
    //Add the "show" class (display:block) to the filtered elements, and remove the""show" class from the elements that are not selected.

//     for(i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//     }
// }

// // Show filtered elements
// function addClass (element,name) {
//     let i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// //Hide elements that are not selected
// function removeClass (element, name) {
//     let i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.lenght; i++) {
//         while (arr1.indexof(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1)
//         }
//     }
//     element.className = arr1.join(" ");
// }

// Add active class to the current button (highlight it)
// let btns = btnContainer.getElementsByClassName("btn-port");
// for (let i = 0; i <btns.lenght; i++) {
//     btns[i].addEventListener ("click", function () {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }