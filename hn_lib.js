/*20220934_이하늘_javascript_파일 hn_lib.js*/
//자바스크립트 개념 이해 & 적용

/*주석 설명 중 (.html N줄)은 해당 자바스크립트 코드의
관심사소개page[20220934-이하늘].html의 관련 코드가 N번째 줄임을 나타내는 약어 입니다!*/

let ahead ={ //객체 생성
	title :"<h5>소소한 잡담 공간",
	icon:"🌎🤍",
	word:"made by HTML & CSS & JS !</h5>"
};
document.write(ahead.title);  //속성에 접근   
document.write(ahead.icon);     
document.write(ahead.word); 

ahead.owner='<h5>hn';  //속성 추가
ahead.icon='✈️</h5>';  //속성 수정

document.write(ahead.owner);
document.write(ahead.icon);

//현재 시간 알려주기 (new키워드로 Date객체 생성)
let today = new Date(); 
document.write("<h5>현재 시간:"+today.toLocaleString()+"<br></h5>");

//간단한 메모 만들기 (new키워드로 string객체 생성)
let memo = new String("제가 좋아하는 것들을 소개합니다");
document.write("<h5>memo📃) "+memo+"</h5>");
console.log("memo의 길이:"+memo.length);

/*welcome to my place(html의 18줄)에 마우스 올리면 색깔, 폰트 색 변동
                                &마우스 내리면 다시 원래로 돌아옴.*/
let h;
function init(){       //문서가 완전히 로드되었을 때 호출
	h = document.getElementById("hi");         ////DOM의 개념 이해&적용
	h.addEventListener("mouseover",changeStyleT);  //이벤트 리스너 등록
  h.addEventListener("mouseover",revertO);       //이벤트 리스너 등록
  PL=document.getElementById("PostList");

  //목차에 마우스 올리면  텍스트 색 변하는 함수(익명함수 사용)
  PL.onmouseover = function(){
  	this.style.color="green";
  	this.style.fontSize="20px";
  };PL.addEventListener("mouseout",
  	function(){
  		this.style.color="black";
  		this.style.fontSize=""
  		 });
}
function changeStyleT(){
	let h=document.getElementById("hi");  //DOM객체 찾기
	h.style.color="green";            //글자색 green
	h.style.fontSize="25px";          //글자 크기는 25px
	h.style.display="block";          //블록박스로 변경
	h.style.width="20em";             //박스의 폭. 20글자 크기
	h.style.border="3px dotted lightblue";  //3픽셀 점선,lightblue 테두리
	h.style.margin="20px";             //상하좌우 여백 20px
}
function revertO(){
	h.style.color="black";   
	h.style.fontSize="";         //원래 값으로 복구
	h.style.display="";
	h.style.width="";
	h.style.border="";
	h.style.margin="";
}
window.onload= function() {  //익명함수
	init();  //페이지가 완전히 로드되면 init 함수를 호출. 
}


//환영인사 메세지 보이는 함수 만들기_html의 21줄(alert)
function welcomeMsg() {
	alert("저의 환영사가 있습니다(●'◡'●) 반갑습니다!오늘도 좋은 하루 되세요!");
}

/*(블로그로 이동할지 말지 물어보는 함수)
이벤트의 디폴트 행동 취소하는 이벤트 함수 (.html 53~57줄)*/
function query(){
	let ret =confirm("블로그로 이동하시겠습니까?");
	return ret; //confirm()의 리턴 값은 true OR false
}
function NoAction(e){
	e.preventDefault();  //이벤트의 디폴트 행동 강제취소
}


/*ondblclick 리스너를 사용하여 간단한 계산기 만들기(.html 97~103줄)
  calculate() 함수 만들어서 사용하기*/
function calculate(){
	let exp=document.getElementById("exp");
	let result = document.getElementById("result");
	result.value=eval(exp.value);
}

//select 객체에서 선택한 과일 이미지 출력하는 이벤트 함수(.html 106줄~116)
function fruitImage(){
	let sel=document.getElementById("fruit");
	let img=document.getElementById("fruite_img");

	img.src=sel.options[sel.selectedIndex].value; //이미지 소스 변경
	img.style.width="400px"; //가로 크기 설정
	img.style.height="400px";  //세로 크기 설정
}

/*선택된 음악 장르(라디오버튼)알아내는 함수
             (onclick리스너 사용)(.html 123줄~128)*/
function findChecked(){
	let found = null;
	let genre=document.getElementsByName("musicG");
	for(let i=0;i<genre.length; i++){
		if(genre[i].checked == true)
			found=genre[i];
	}
	  if (found != null)
		 alert(found.value + "을 좋아하시는군요! 아래의 저의 추천곡들도 구경해보세요!");
	  else 
	   alert("선택된 것이 없습니다");
  }
//new IMage()로 여행지 이미지 로딩하는 이벤트 함수 (.html 172줄~174)
let files = ["h.media/프라하.jpg", //미리 로딩해둘 이미지 이름 배열
	        "h.media/뉴욕.jpg",
	        "h.media/도쿄.jpg",
	        "h.media/하와이.jpg",
	        "h.media/니스.webp",
	        "h.media/코타키나발루.jpg",
	        "h.media/멕시코.jpg"];
let imgs = new Array();
for (let i =0;i<files.length;i++){
	imgs[i]=new Image(); //이미지 객체 생성
	imgs[i].src=files[i]; //이미지 로딩
} 
let next=0;     //다음 이미지 출력
function PicChange(img){
	img.src=imgs[next].src; //이미지 변경
	next++; //다음 이미지에 대한 인덱스
	next %= imgs.length; //개수를 넘으면 처음으로
}

//html 페이지의 <span>태그 찾아서 색깔, 폰트 크기 변경(.html의 149줄)
function spanChange(){
	let spanArr=document.getElementsByTagName("span");  //DOM객체 찾기
	for(let i=0;i<spanArr.length;i++){
		let span =spanArr[i];
		span.style.color="hotpink";
		span.style.fontSize="20px";
	}
	event.preventDefault();   //홈페이지 새로고침 방지
}

console.log($)  //jQuery 잘 작동되는지 확인

//jQuery 사용해서 사진,문구,글자 색 변경하는 함수 만들기(.html 26줄~27)
$(document).ready(function() {

  $('.test_img').attr('src', 'h.media/오사카.jpg'); // 이미지 소스 변경
  $('.test1').text('최근 다녀온 곳,오사카');  //텍스트 변경
  $('.test1').css('color', 'green'); // 텍스트 색상 변경
  $('.test1').css('font-size', '20px'); // 텍스트 글자 크기 변경

});


//Ajax 사용해서 네이버웹툰 페이지 열기(.html 93줄~95)
 $(document).ready(function() {
      $("#loadButton").click(function() {
        $.ajax({
          url: "https://comic.naver.com/webtoon/list?titleId=761722",
          type: "GET",
          success: function(response) {
            // 웹툰 데이터를 처리하는 코드 작성
            $("#webtoonList").html(response);
          },
          error: function() {
            alert("웹툰을 불러오는데 실패했습니다.(아마 네이버의 허가필요...)");
          }
        });
      });
    });
 