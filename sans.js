function pointUp(){
    var tempEle = document.createElement("div")
    document.getElementById("wa").append(tempEle)
    var byeansu1 = prompt("질문", "예상답변")
    tempEle.innerHTML = "답변 결과 : " + byeansu1
}
function YN(){
    var tempEle = document.createElement("div")
    document.getElementById("wa").append(tempEle)
    var byeansu2 = confirm("확인/취소 선택창")
    tempEle.innerHTML = "확인/취소 선택결과 : " + byeansu2
}
function rroad(){
    var rrroad = confirm('정말로 새로고침 하시겠습니까?')
    if(rrroad){
        location.reload()
    }
}
function tosite(){
    var url
    var byeansu3 = prompt("사이트 이동(구글/네이버)")
    switch(byeansu3){
        case "구글": url = "www.google.com"
        break
        case "네이버": url = "www.naver.com"
        break
        default: alert('없는 목록입니다. (알람 기능)')
        break
    }
    if(url){
        var q = confirm('새 탭으로 여시려면 확인, 해당 탭에서 이동하려면 취소를 누르세요')
        if(!q){
            location.href = "http://" + url//해당 사이트로 이동(이동(새로운 창 X))
        }else{
            open("http://" + url, "_blank")
        }
    }
}
function popup(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    open("https://www.naver.com", "와 네이버 아시는구나!(창 이름)","width=350, height=400, left=50,top=10, scrollbars=no") //창이름 적용 안됨
    //scrollbars = 스크롤 노출 여부 (다음과 같은 옵션은 yes, no로 설정)
    //location = URL입력란 노출 여부
    //status = 상태 표시줄 노출 여부
    //toolbars = 도구 상자영역 노출 여부
}
var test
function banbok(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    var count = 0
    var tt = prompt("몇초 간격으로 실행시킬건가요?", 1)
    if(tt){
        test = setInterval(function() {tempEle.innerHTML = "샌즈" + (++count)}, tt*1000) //책 119쪽 참고
    }                      //ㄴ function은 선택사항
}
    function cancelb(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    clearInterval(test)
}
var ttest
var dd = false
function stimeout(){
    dd = false
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    var tt = prompt("몇초 후에 실행시킬건가요?", 1)
    if(tt){
        dd = true
        ttest = setTimeout(function() {tempEle.innerHTML = tt+"초 후에 나온 텍스트"}, tt*1000)
    }
}
function ctimeout(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    if(dd === true){
        tempEle.innerHTML = "실행될 타임아웃을 종료시켰습니다."
        dd = false
    }else{
        tempEle.innerHTML = "종료시킬 타임아웃이 없습니다."
    }
}
document.write("<p class='blue'>파란글씨</p>")
document.write("<p class='red'>빨간글씨</p>")
document.write("<p class='yellow'>노란글씨?(html 파일에서 color을 선언해야함)</p>")