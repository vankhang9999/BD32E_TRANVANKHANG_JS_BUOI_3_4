const getElement=(id)=>document.getElementById(id)


class StakList {
    stak='';
}



let stakList=[];
let stakListComplete=[];

getElement('addItem').onclick=()=>{
    const task=getElement('newTask').value;
    const staklist=new StakList();
    
    staklist.stak=task;
    stakList=[...stakList,staklist]
    rendertask();

}   
rendertask=()=>{
    const html=stakList.reduce((value,Task)=>{
        return value+=
            `
            <li>
                <div>${Task.stak}</div>
                <div>
                    <i class="fa-solid fa-trash-can" onclick="remove('${Task.stak}')"></i>
                    <i class="fa fa-check-circle" onclick="finish('${Task.stak}')"></i>
                </div>
            </li>

            `
    },'')
    getElement('todo').innerHTML=html;
}
remove=(taskClick)=>{
    stakList=stakList.filter((value)=>value.stak===taskClick?false:true)
    rendertask();
}

finish=(taskClick1)=>{
    //alert(taskClick1)
    stakListComplete=[...stakListComplete, taskClick1]
    console.log(stakListComplete)

    const html=stakListComplete.reduce((value,Task)=>{
        return value+=
            `
            <li>
                <span>${Task}</span>
                <div>
                    <i class="fa-solid fa-trash-can" onclick="remove('${Task}')"></i>
                    <i class="fa fa-check-circle" onclick="finish('${Task}')"></i>
                </div>
            </li>

            `
    },'')
    getElement('completed').innerHTML=html;
}
 filterUp=()=>{
    stakList=stakList.sort((a,b)=>{ 
        return a.stak>b.stak?1:-1

    })
    console.log(stakList)
    rendertask();
 }
 filterDow=()=>{
    stakList=stakList.sort((a,b)=>{ 
        return a.stak>b.stak?-1:1

    })
    console.log(stakList)
    rendertask();
 }