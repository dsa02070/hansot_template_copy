
// 테블릿, 모바일 gnb 조작 버튼
function gnbControl() {
    document.querySelector("#gnb_btn").addEventListener('click', function () {
        document.querySelector("#mgnb").style.left = "0%"
    })
    document.getElementById("mgnb_btn").addEventListener('click', function () {
        document.getElementById("mgnb").style.left = "-100%"
    })
}
gnbControl();//함수호출

