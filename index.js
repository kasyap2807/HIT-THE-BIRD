// localStorage.setItem(5,false);
alert("an project by #TEAM-3")
const z = localStorage.getItem(4)
const nameh = localStorage.getItem(5)
document.getElementById('chlenge').innerHTML='present challeng is name: '+nameh+' with time:  :'+z+'sec';
function testJS(){
    var x = document.querySelector('input').value;
    // const y = localStorage.getItem(5)
    localStorage.setItem(1, x);
    //in restart page y = true if ew record than else doesnt work
    // if(y){
    
        // }
        //if it is first gam than else work
        // else{
            //     const record=100;
            // localStorage.setItem(4,record)}
        }
function reset(){
    localStorage.setItem(5,'norecord')
    localStorage.setItem(4,100);
    location.replace("index.html");
}