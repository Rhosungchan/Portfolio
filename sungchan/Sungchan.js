// 현재 날짜와 시간을 가져오는 함수
function getCurrentDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    return `${year}년 ${month}월 ${day}일 (${hour}시  ${minute}분  ${second}초)`;
}

// 웹사이트에 접속한 시간을 HTML 태그에 출력하는 함수
function showAccessTime() {
    let accessTime = getCurrentDateTime();
    document.getElementById("enterTime").innerHTML = `${accessTime}`;
}

// 페이지가 로드될 때 showAccessTime 함수를 호출합니다.
window.addEventListener("load", showAccessTime);



/* 4.16 이후  */
const modalBtns = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal-close');

function toggleModal(index) {
    modals[index].style.display = modals[index].style.display === 'none' ? 'block' : 'none';
}

modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        toggleModal(index);
    });
});

modalCloses.forEach((close, index) => {
    close.addEventListener('click', () => {
        toggleModal(index);
    });
});

function toggleModal(index) {
    const modal = modals[index];
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

// 이미지 슬라이드로 넘기기
