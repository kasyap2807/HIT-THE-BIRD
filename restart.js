var name1 = localStorage.getItem(1);//name of the player
    var name2 = localStorage.getItem(2);//score of player
    const name3 = parseInt(localStorage.getItem(3));//omly sec of player
    const record = parseInt(localStorage.getItem(4));//true if played atleast once
    //getting name from localstore shared in index page
    document.getElementById('name').innerHTML=name1+" you reached your goal";
    //if name3 i.e, current time scored is grater than record i.e, initial 0 and after that if else works to get lowest time
    if(name3<record){
        //overriding on h2 tag with innerhtml
        document.getElementById('name3').innerHTML="you beat the record time is "+name2+" sec";
        //updating record
        localStorage.setItem(4,name3);
        localStorage.setItem(5,name1);
    }
    else{
        //showing present score
        document.getElementById('name3').innerHTML="goal achived in "+name2+" sec";
        
    }
    //if game played at least one than 5 will be true and at index page else condition won't work
    // localStorage.setItem(5,true);
