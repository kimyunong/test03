// 유저가 값을 입력한다.

// + 버튼을 클릭하면, 할일이 추가된다.

// delete버튼을 누르면 할일이 삭제된다.

// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.

// 진행중 끝남 탭을 누르면, 언더바가 이동한다.

// 끝남탭은, 끝난 아이텝만, 진행중탭은 진행중인 아이템만

// 전체탭을 누르면 다시 전체아이템으로 돌아온다.


let userList = document.getElementById("user-list");


let plusButton = document.getElementById("plus-button");
let checkButton = document.getElementById("check-button");
let deleteButton = document.getElementById("delete-button");


plusButton.addEventListener("click",plus)
checkButton.addEventListener("click",check)
deleteButton.addEventListener("click",dell)






function plus(){


    let userValue = userList.value

    for(let i= 1; i < 50; i++){

        if(userList == ""){
            document.write("<div class='task'></div>");
        }else{
            document.write("<div class='task'>"+userList+"</div>");
            console.log(userList);
        }

    }

    
}




function check(){

}


function dell(){
    
}