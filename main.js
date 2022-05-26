// 유저가 값을 입력한다.

// + 버튼을 클릭하면, 할일이 추가된다.

// delete버튼을 누르면 할일이 삭제된다.

// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.

// 진행중 끝남 탭을 누르면, 언더바가 이동한다.

// 끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만

// 전체탭을 누르면 다시 전체아이템으로 돌아온다.


let userList = document.getElementById("user-list");  // getEl는 아이디 값만 가져올 수 있다 (*중요)
// console.log(userList);


let plusButton = document.getElementById("plus-button");
let checkButton = document.getElementById("check-button");
let deleteButton = document.getElementById("delete-button");
let tackBoard = document.getElementById("task-board");
let taskList = []


plusButton.addEventListener("click",plus);  // ("이벤트",펑션)
checkButton.addEventListener("click",check);
deleteButton.addEventListener("click",dell);





function plus(){


    let userValue = userList.value
        taskList.push(userValue)    // 값이 리스크에 담긴다.
        console.log(taskList);
        render()
    
}


function render(){

    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++){    // for -> 무엇을 계속 반복할것인지 생각! 

        resultHTML +=   `<div class="task">
                            <div>${taskList[i]}</div>
                            <div>
                                <button id="check-button">Check</button>
                                <button id="delete-button">Delete</button>
                            </div>
                        </div>`;

    }

    tackBoard.innerHTML = resultHTML;     // .innerHtml : Element의 HTML XML을 읽어오거나 설정할 수 있다.
                                        // .textContent : 해상 노드가 가지고 있는 텍스트 값을 그대로 가져옴. 
}




function check(){

}


function dell(){
    
}