let interview_list = [];
let reject_list = [];

const noJobSection = document.getElementById('no-job');
let currentStatus;
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let jobCount = document.getElementById('job-count');

const filterSection = document.getElementById('filtered-section');
const mainContainer = document.getElementById('all-card');
const allcard = document.getElementById('all-card');

let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectBtn = document.getElementById('reject-btn');

function calculateCount() {
    total.innerText = mainContainer.children.length;
    interview.innerText = interview_list.length;
    rejected.innerText = reject_list.length;

     if (currentStatus === 'interview-btn') {
        jobCount.innerText = interview_list.length;
    } 
    else if (currentStatus === 'reject-btn') {
        jobCount.innerText = reject_list.length;
    } 
    else {
        jobCount.innerText = mainContainer.children.length;
    }
}
calculateCount();

function toggleStyle(id) {
    allBtn.classList.remove("active-btn");
    interviewBtn.classList.remove("active-btn");
    rejectBtn.classList.remove("active-btn");

    const selected = document.getElementById(id);
    currentStatus = id;

    if (id !== allBtn) {
        allBtn.classList.add("bg-white");
    }
    selected.classList.add("active-btn");

    if (id === 'all-btn') {
        allcard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if (id === 'interview-btn') {
        allcard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }else if (id === 'reject-btn') {
        allcard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
    }

    if (id === 'all-btn') {
    allcard.classList.remove('hidden');
    filterSection.classList.add('hidden');
    noJobSection.classList.add('hidden');
}

    calculateCount();
}

function updateStatusStyle(statusBtn, status) {
    statusBtn.classList.remove('interview-style', 'rejected-style');

    if (status === 'Interview') {
        statusBtn.classList.add('interview-style');
    }

    if (status === 'Rejected') {
        statusBtn.classList.add('rejected-style');
    }
}
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('green-btn') || event.target.classList.contains('red-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const jobDesk = parentNode.querySelector('.job-desk').innerText;
        const statusBtn = parentNode.querySelector('.toggle-btn');

        let status = '';

        if (event.target.classList.contains('green-btn')) {
            status = 'INTERVIEW';
            statusBtn.innerText = 'INTERVIEW';
            updateStatusStyle(statusBtn, 'Interview');
        }

        if (event.target.classList.contains('red-btn')) {
            status = 'REJECTED';
            statusBtn.innerText = 'REJECTED';
            updateStatusStyle(statusBtn, 'Rejected');
        }

        const cardInfo = {
            jobTitle,
            jobType,
            salary,
            jobDesk,
            status
        };

        if (status === 'INTERVIEW') {
            reject_list = reject_list.filter(item => item.jobTitle !== jobTitle);

            const exists = interview_list.find(item => item.jobTitle === jobTitle);
            if (!exists) {
                interview_list.push(cardInfo);
            } else {
                exists.status = status;
            }
        }

        if (status === 'REJECTED') {
            interview_list = interview_list.filter(item => item.jobTitle !== jobTitle);

            const exists = reject_list.find(item => item.jobTitle === jobTitle);
            if (!exists) {
                reject_list.push(cardInfo);
            } else {
                exists.status = status;
            }
        }

        calculateCount();

        if (currentStatus === 'interview-btn') {
            renderInterview();
        }

        if (currentStatus === 'reject-btn') {
            renderReject();
        }   
    }

    if (event.target.classList.contains('fa-trash-can')) {
    const parentNode = event.target.closest('.card');
    const jobTitle = parentNode.querySelector('.jobTitle').innerText;

    interview_list = interview_list.filter(item => item.jobTitle !== jobTitle);
    reject_list = reject_list.filter(item => item.jobTitle !== jobTitle);

    parentNode.remove();
    calculateCount();

    if (mainContainer.children.length === 0) {
        noJobSection.classList.remove('hidden');
    }
}

});
filterSection.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('green-btn')) {
        const parentNode = target.closest('.card');
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const statusBtn = parentNode.querySelector('.toggle-btn');

        statusBtn.innerText = 'INTERVIEW';
        updateStatusStyle(statusBtn, 'Interview');

        const cardInfo = {
            jobTitle,
            jobType: parentNode.querySelector('.job-type').innerText,
            salary: parentNode.querySelector('.salary').innerText,
            jobDesk: parentNode.querySelector('.job-desk').innerText,
            status: 'INTERVIEW'
        };

        reject_list = reject_list.filter(item => item.jobTitle !== jobTitle);

        const exists = interview_list.find(item => item.jobTitle === jobTitle);
        if (!exists) {
            interview_list.push(cardInfo);
        } else {
            exists.status = 'INTERVIEW';
        }

        calculateCount();
       // renderInterview();
       calculateCount();

if (currentStatus === 'interview-btn') {
    renderInterview();
} else if (currentStatus === 'reject-btn') {
    renderReject();
}
    }
    if (target.classList.contains('red-btn')) {
        const parentNode = target.closest('.card');
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const statusBtn = parentNode.querySelector('.toggle-btn');

        statusBtn.innerText = 'REJECTED';
        updateStatusStyle(statusBtn, 'Rejected');

        const cardInfo = {
            jobTitle,
            jobType: parentNode.querySelector('.job-type').innerText,
            salary: parentNode.querySelector('.salary').innerText,
            jobDesk: parentNode.querySelector('.job-desk').innerText,
            status: 'REJECTED'
        };

        interview_list = interview_list.filter(item => item.jobTitle !== jobTitle);

        const exists = reject_list.find(item => item.jobTitle === jobTitle);
        if (!exists) {
            reject_list.push(cardInfo);
        } else {
            exists.status = 'REJECTED';
        }
        calculateCount();

  if (currentStatus === 'interview-btn') {
    renderInterview();
} else if (currentStatus === 'reject-btn') {
    renderReject();
}

    }
    if (target.classList.contains('fa-trash-can')) {
        const parentNode = target.closest('.card');
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;

        interview_list = interview_list.filter(item => item.jobTitle !== jobTitle);
        reject_list = reject_list.filter(item => item.jobTitle !== jobTitle);

        parentNode.remove();
        calculateCount();

         if(interview_list.length === 0 || reject_list.length === 0) {
        noJobSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    }
});
function renderInterview() {
    filterSection.innerHTML = '';
     if (interview_list.length === 0) {
        noJobSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    } else {
        noJobSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    for (let req of interview_list) {
        let div = document.createElement('div');
        div.className = 'card bg-white px-6 py-4 mt-9';
        div.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h2 class="jobTitle font-semibold text-[#323B49] text-2xl">${req.jobTitle}</h2>
                <p class="job-type text-[#64748B]">${req.jobType}</p>
                <div class="mt-4 mb-4">
                    <p class="salary">${req.salary}</p>
                </div>
                <button class="toggle-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500 mb-2">${req.status}</button>
                <p class="job-desk text-[#64748B]">${req.jobDesk}</p>

                <div class="flex gap-3 mt-5">
                    <button class="green-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500">INTERVIEW</button>
                    <button class="red-btn border-2 border-red-500 px-4 py-1 font-semibold text-red-500">REJECTED</button>
                </div>
            </div>
            <div>
               <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `;

        const statusBtn = div.querySelector('.toggle-btn');
        updateStatusStyle(statusBtn, req.status);

        filterSection.appendChild(div);
    }
}

function renderReject() {
    filterSection.innerHTML = '';
    
    if (reject_list.length === 0) {
        noJobSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        return;
    } else {
        noJobSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    for (let req of reject_list) {
        let div = document.createElement('div');
        div.className = 'card bg-white px-6 py-4 mt-9';
        div.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h2 class="jobTitle font-semibold text-[#323B49] text-2xl">${req.jobTitle}</h2>
                <p class="job-type text-[#64748B]">${req.jobType}</p>
                <div class="mt-4 mb-4">
                    <p class="salary">${req.salary}</p>
                </div>
                <button class="toggle-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500 mb-2">${req.status}</button>
                <p class="job-desk text-[#64748B]">${req.jobDesk}</p>

                <div class="flex gap-3 mt-5">
                    <button class="green-btn border-2 border-green-500 px-4 py-1 font-semibold text-green-500">INTERVIEW</button>
                    <button class="red-btn border-2 border-red-500 px-4 py-1 font-semibold text-red-500">REJECTED</button>
                </div>
            </div>
            <div>
               <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `;

        const statusBtn = div.querySelector('.toggle-btn');
        updateStatusStyle(statusBtn, req.status);

        filterSection.appendChild(div);
    }
}
