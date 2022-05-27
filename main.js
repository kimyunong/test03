// 유저가 값을 입력한다.

// + 버튼을 클릭하면, 할일이 추가된다.

// delete버튼을 누르면 할일이 삭제된다.

// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 .true 를 false 로 바꿔준다.
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안끝난걸로 간주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다.

// 끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만

// 전체탭을 누르면 다시 전체아이템으로 돌아온다.


let userList = document.getElementById("user-list");  // getEl는 아이디 값만 가져올 수 있다 (*중요)
let tabs = document.querySelectorAll(".task-taps div");  // querySelectorAll : 조건이 충족되는 모든것을 가져옴
console.log(tabs);

let mode = ''

let plusButton = document.getElementById("plus-button");
let checkButton = document.getElementById("check-button");
let deleteButton = document.getElementById("delete-button");
let tackBoard = document.getElementById("task-board");
let taskList = []


plusButton.addEventListener("click",plus);  // ("이벤트",펑션)
// checkButton.addEventListener("click",check);
// deleteButton.addEventListener("click",dell);



for(let i=1; i<tabs.length; i++){

    tabs[i].addEventListener("click",function(event){
        filter(event);
    });

}

function filter(event){   // event : 클릭을 했을때 모든 상황을 알려준다.

    mode = event.target.id
    let filterList=[]
    
    console.log("filter클릭",event.target.id);  // event.target = 어떤걸 클릭했는지 알고 싶을때

    if(mode == "all"){
        render()
    }else if(mode == "ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i])
            }
        }

        console.log(filterList);
    // }else if(mode == "done"){

    // }else{

    }

}



function plus(){

    
    
    let task ={
        id : randomID(),
        taskContent : userList.value,
        isComplete:false
    }

        taskList.push(task);    // 값이 리스크에 담긴다.
        console.log(taskList);
        render()
    
}





function render(){

    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++){    // for -> 무엇을 계속 반복할것인지 생각! 
        
        if(taskList[i].isComplete == true){
            resultHTML += `<div class="task" style="background-color: antiquewhite;">
            <div class="task-don">${taskList[i].taskContent}</div>
                <div>
                    <button id="check-button" onclick="check('${taskList[i].id}')">Check</button>
                    <button id="delete-button" onclick="dell('${taskList[i].id}')">Delete</button>
                </div>
            </div>`;    
            
        }else{
            resultHTML +=   `<div class="task">
                                <div>${taskList[i].taskContent}</div>
                                <div>
                                    <button id="check-button" onclick="check('${taskList[i].id}')">Check</button>
                                    <button id="delete-button" onclick="dell('${taskList[i].id}')">Delete</button>
                                </div>
                            </div>`;
        }

    }

    tackBoard.innerHTML = resultHTML;     // .innerHtml : Element의 HTML XML을 읽어오거나 설정할 수 있다.
                                        // .textContent : 해상 노드가 가지고 있는 텍스트 값을 그대로 가져옴. 
}





function check(id){
    
    for (let i = 0; i < taskList.length; i++){ 
        if(taskList[i].id==id){
            taskList[i].isComplete = !taskList[i].isComplete //true
            break;
        }
    }
    render()
    console.log(taskList);
}





function dell(id){

    for (let i = 0; i < taskList.length; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)       // .splice() : 원하는 위치에 요소를 추가하거나 삭제할 수 있다.
            break;
        }
    }
    render()
    console.log(taskList);

}




function randomID(){
    return ('000000000' + Math.random().toString(36).substr(2, 9)).slice(-9);
}



