let interview_list = [];
let reject_list = [];


let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allcard = document.getElementById('all-card')

let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectBtn = document.getElementById('reject-btn');

function calculateCount(){
    total.innerText = allcard.children.length;
    interview.innerText = interview_list.length;
    rejected.innerText = reject_list.length;
}
calculateCount()

function toggleStyle(id){

    allBtn.classList.remove("active-btn");
    interviewBtn.classList.remove("active-btn");
    rejectBtn.classList.remove("active-btn");

    const selected = document.getElementById(id);

    if(id !== allBtn){
        allBtn.classList.add("bg-white");
    }
    selected.classList.add("active-btn");
}