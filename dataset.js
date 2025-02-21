
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}


let d1 = new DataSet("선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("공부 시간과 성적과의 관련성의 선형성을 가진 연속적인 데이터를 활용하여 연속된 예상값을 추출하는 모델.")//서브 타이틀
d1.set_img(0,{imgtitle:"일부샘플코드",imgurl:"https://drive.google.com/file/d/1CbFOb-MPW0a3w9frOZbjbs18d2maDLqo/view?usp=drive_link",imglog:"시험성적 데이터를 임의로 만들어 선형회귀분석 코드",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"산정도데이터분석",imgurl:"https://drive.google.com/file/d/1KUKQ6fVlmKwy7cQWY1QvEe64eGN0sF5X/view?usp=drive_link",imglog:"문제데이터의 선형성 관계 파악을 위한 산정도 그래프 분석",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/12i6EmjYac1bvBVThHjX8D7u28j31QfYX/view?usp=drive_link",imglog:"훈련시 모델의 올바른 학습을 위해 데이터의 정규분포로 표준화 전처리 시행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"선형모델의 구성, 컴파일, 훈련",imgurl:"https://drive.google.com/file/d/1COZfXQrLL3jJtMUdFtxdpC-KmrGd52Ef/view?usp=drive_link",imglog:"Sequential모델 및 입력출력레이어 작성과 mse 오차손실함수 및 역전파시적용 될 SGD(경사하강법) 최적호함수 적용과 200회 훈련실행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1vCcdz5IGJ2QDbOozZn4amnckoXIrOlHt/view?usp=drive_link",imglog:"시각화 그래프 판단시 120회 훈련에서 훈련 조기종료를 검토할수도 있다.",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"모델의 예측",imgurl:"https://drive.google.com/file/d/12_g9Q2q9TadmPacSRY0b6uO4RGDTWBdD/view?usp=drive_link",imglog:"임의의 데이터를 생성하여 모델의 예측 결과를 표기",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/exam.lg.py"})//이미지타이틀

d1.set_content("당뇨환자에 대한 1년 상태 예측, 예측값은 연속데이터로 출력")
d1.set_img(1,{imgtitle:"샘플소스코드",imgurl:"https://drive.google.com/file/d/1Rf8hnzXoi1NWN0yFBx5HglT1JRKnO-tC/view?usp=drive_link",imglog:"당뇨환제에 대한 나이, 성별, bmi수치, bp 수치등 10개의 항목을 측정하여 1년후 당뇨수치에 대한 증가데이터",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"소스데이터수신 및 분석",imgurl:"https://drive.google.com/file/d/11Z9RcDYdL0amedjaSBsJJC9rPxVh0rgS/view?usp=drive_link",imglog:"sklearn의 diabets 데이터를 수신하여 항목별 분석과 수치값과 1년후 변화 질량에 대한 확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"연관성분석을 위한 산정도",imgurl:"https://drive.google.com/file/d/1--br-sLlNXagvmqWn1yz3XIPF1_OivEv/view?usp=drive_link",imglog:"1년후 질량과 측정된 수치의 연관성 분석을 위한 산정도 그래프 확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"1.선택데이터",imgurl:"https://drive.google.com/file/d/1omY-ecCAJ0PdftHO1sd9BXb5KleAI0ki/view?usp=drive_link",imglog:"bmi수치는 대각방향의 선형형태를 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"2.선택데이터",imgurl:"https://drive.google.com/file/d/16BzoxgozMVNQL-vtNp4V0rify3nlXxdK/view?usp=drive_link",imglog:"s5 수치는 대각방향의 선형성을 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"3.미선택데이터",imgurl:"https://drive.google.com/file/d/1NNKy_wYh1tUx3bwX5gy9gTTno04GnlUe/view?usp=drive_link",imglog:"성별데이터는 방향의 선형성이 없으므로 1년후 질량과 연관이 없음으로 판명되어 분석에서 제외",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터추출",imgurl:"https://drive.google.com/file/d/1LbfP12o7U1Qvq2YsFx50WMl6IYfPfluB/view?usp=drive_link",imglog:"선택된 2번 8번 인덱스 데이터 추출 및 데이터의 모양 확인후 문제데이터와 정답데이터 값 확인분석",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"모델구성과 훈련",imgurl:"https://drive.google.com/file/d/1StgkQimCfwWoYxRm0Al2fZfOlrmCWjxR/view?usp=drive_link",imglog:"순차모델구성과 입출력 레이 구성, MSE 손실함수와 SGD를 최적화함수에 사용하여 컴파일 및 훈련 13회 실행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"훈련결과시각화",imgurl:"https://drive.google.com/file/d/13YAyLh7Ytzmcx51oOeZ9NSNikwjki5r7/view?usp=drive_link",imglog:"100회 이상의 훈련후 시각그래프 판단하에 12회 훈련이 최적화로 판단되어 12회 훈련으로 조기종료함",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 예측",imgurl:"https://drive.google.com/file/d/121dffJdNDOTIv-mrOj-FKLo-pIqvGwKU/view?usp=drive_link",imglog:"테스트 데이터 10개를 일부 추출하여 예측 실행, 결과는 오차확률 4% 수치대로 접근",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/diabet.py"})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1mw6ZBtTbbZQYlfz1YQXCuTfoi-hnvfpg/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1vl3Ridea05eDn3Hx0cfIWzgkPi-vQX31/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1vlxyuzBmzaBk7B9VoycUH0mRBBxe4nTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1yLXiqHWblzxAnZXGZKvRcxU8HSgf3UqS/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
