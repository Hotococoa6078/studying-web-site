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
        location.href = "http://" + url //해당 사이트로 이동(이동(새로운 창 X))
    }
}
document.write("<p class='blue'>파란글씨</p>")
document.write("<p class='red'>빨간글씨</p>")
document.write("<p class='yellow'>노란글씨?(html 파일에서 color을 선언해야함)</p>")