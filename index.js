let inputField = document.getElementById("inputField");
let addToDoButton = document.getElementById("addButton");
let taskContainer = document.getElementById("taskContainer");


addToDoButton.addEventListener("click", function () {

    let inputValue = inputField.value.trim();
    if(inputValue !== ""){

    
        //create division  
        let division = document.createElement("div");
        division.className = "division";

        //create paragraph
        let paragraph = document.createElement("p");
        paragraph.innerText = inputField.value;

        //create delete Button
        let btn = document.createElement("button");
        btn.className = "removeTask";
        btn.innerText = "🗑";

        //append tasks
        division.appendChild(paragraph);
        division.appendChild(btn);
        taskContainer.append(division);

        //clear input Field
        inputField.value = "";

        //cross done tasks
        paragraph.addEventListener("click", function(){
            paragraph.style.textDecoration="line-through"
        })

        //delete button function
        btn.addEventListener("click", function () {
            division.remove();
        });
    }
});

