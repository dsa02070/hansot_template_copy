
// 테블릿, 모바일 mgnb 조작 버튼
function gnbControl() {
    document.querySelector("#gnb_btn").addEventListener('click', function () {
        document.querySelector("#mgnb").style.left = "0%"
    });
    document.getElementById("mgnb_btn").addEventListener('click', function () {
        document.getElementById("mgnb").style.left = "-100%"
    });
};
gnbControl();//함수호출

// section #third, #fourth, #fifth 등장 효과
// 태그의 높이값 구하기
let thirdTop = document.querySelector('#third').getBoundingClientRect().top;
let fourthTop = document.querySelector('#fourth').getBoundingClientRect().top;
let fifthTop = document.querySelector('#fifth').getBoundingClientRect().top;

// 태그 선택 변수 처리하기
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');
let fifth = document.querySelector('#fifth');

//화면 내릴 때 하나씩 등장
function scrollEvent() {
    if (document.documentElement.scrollTop >= thirdTop - 600) {
        third.style.opacity = '100%';
        third.style.transform = 'translateY(0%)';
    };
    if (document.documentElement.scrollTop >= fourthTop - 600) {
        fourth.style.opacity = '100%';
        fourth.style.transform = 'translateY(0%)';
    };
    if (document.documentElement.scrollTop >= fifthTop - 600) {
        fifth.style.opacity = '100%';
        fifth.style.transform = 'translateY(0%)';
    };
};

// .top 버튼 누르면 상단으로
function goTop() {
    if (document.documentElement.scrollTop >= 50) { // 스크롤탑이 50 이상되면
        document.querySelector('.top').style.right = '15px' // right : 15px
    } else {
        document.querySelector('.top').style.right = '-50px' // 150 미만이라면 -50px
    };
    document.querySelector('.top').addEventListener('click', function () {
        window.scroll({ top: 0, behavior: 'smooth' }); // 버튼을 클릭하면 top 0으로 부드럽게 이동
    });
};
window.onscroll = function () { goTop(), scrollEvent() };