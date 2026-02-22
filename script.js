let interview_list = [];
let reject_list = [];


let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const filterSection = document.getElementById('filtered-section')
const mainContainer = document.getElementById('all-card');
// const allcard = document.getElementById('all-card')

let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectBtn = document.getElementById('reject-btn');


function calculateCount(){
    total.innerText = mainContainer.children.length;
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

function updateStatusStyle(statusBtn, status) {
    statusBtn.classList.remove('interview-style', 'rejected-style');

    if (status === 'Interview') {
        statusBtn.classList.add('interview-style');
    } else if (status === 'Rejected') {
        statusBtn.classList.add('rejected-style');
    }
}


mainContainer.addEventListener('click', function(event) {

    if (event.target.classList.contains('green-btn') || event.target.classList.contains('red-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const statusBtn = parentNode.querySelector('.toggle-btn');

        if (event.target.classList.contains('green-btn')) {
            statusBtn.innerText = 'INTERVIEW';
            updateStatusStyle(statusBtn, 'Interview');
        }

        if (event.target.classList.contains('red-btn')) {
            statusBtn.innerText = 'REJECTED';
            updateStatusStyle(statusBtn, 'Rejected');
        }
    }
});



const noJobSection = document.getElementById('no-job');
noJobSection.classList.add("hidden");

function renderInterview(){
    filterSection.innerHTML = '';

    for(let req of interview_list){
        console.log(req);
        let div = document.createElement('div');
        div.className = `flex justify-between`;
        div.innerHTML = `<div>
                <div>
                    <h2 class="jobTitle font-semibold text-[#323B49] text-2xl">Mobile First Corporation</h2>
                    <p class="job-type text-[#64748B]">React Native Developer</p>
                    <div class="mt-4 mb-4">
                        <p class="salary">Remote  •   Full-time  •  $130,000 - $175,000</p>
                    </div>
                    <button class="toggle-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500 mb-2">Not Applied</button>
                    <p class="job-desk text-[#64748B]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                <div class="flex gap-3 mt-5">
                    <button class="green-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500">INTERVIEW</button>
                    <button class="red-btn border-2 border-red-500 px-4 py-1 font-semibold text-red-500">REJECTED</button>
                </div>
                </div>
                <div>
                   <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        `
    }
}