
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


d1.set_content("보스턴 지역의 환경에 따른 하우스 가격 데이터로 예측값은 연속데이터로 출력")
d1.set_img(2,{imgtitle:"보스턴하우징샘플코드",imgurl:"https://drive.google.com/file/d/1TahlgtRpqtlfqHYCIKpYxJdvrvw_ua4u/view?usp=drive_link",imglog:"총 12개 유형의 데이터로 1인당 범죄율, 주거토지비율, 회사입지비율, 강의 경계여부, 일산화질소 농도, 방의 갯수등의 13개의 데이터를 분석하여 집가격을 예측하는 시나리오",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"1.데이터연관성 산정도분석코드",imgurl:"https://drive.google.com/file/d/1P4Ip9Hcatlml_N-YCvouFibzya_QitBZ/view?usp=drive_link",imglog:"데이터연관성 분석을 위해 데이터 항목별 산정도 시각화",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"2.산정도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1ALSaPXHVysUsz1ew1fYj2Lj6VWU2Sjp1/view?usp=drive_link",imglog:"분석결과 5번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"3.산정도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1ctKLyk90peCGKfEQVyfAHi2o7CS2wV3U/view?usp=drive_link",imglog:"분석결과 7번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련을 위한 데이터 선택",imgurl:"https://drive.google.com/file/d/1eKyqCNoRu3pSekgHacuZuP7naCUrP9g5/view?usp=drive_link",imglog:"5번 인덱스 데이터와 7번 인덱스 데이터의 선형성 확인결과로 훈련데이터로 추출후 선형성 재확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련데이터 전처리",imgurl:"https://drive.google.com/file/d/1ScQO_GysyJlwa7luWGYVb8JaHjBt2_uI/view?usp=drive_link",imglog:"훈련데이터의 수치 폭을 확인후 정규분포데이터로 표준화 실행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"모델 구성 및 훈련",imgurl:"https://drive.google.com/file/d/19kPt3bmNBC3UvBe9uAMPeG8x1wEqoL_n/view?usp=drive_link",imglog:"순차모델 구성과 입출력레이어 추가, MSE 손실함수 및 SGD 최적화 함수를 적용하여 컴파일, 10회 훈련 실시",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1h7au4XBgBVE4Xn-rP80PVvV6LwuVrVj6/view?usp=drive_link",imglog:"훈련결과 손실값을 시각화 그래프로 출력 후 결과 분석 및 확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트데이터 추출",imgurl:"https://drive.google.com/file/d/1UYmeMbfNojlb2UdpI8k7rwMe2KLQNwVd/view?usp=drive_link",imglog:"테스트 데이터 필드 추출 및 정규화 실행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트 결과 추출",imgurl:"https://drive.google.com/file/d/1bCQ-tIWiw1ER2ZS9-_Q-yfElTLYiu7Y1/view?usp=drive_link",imglog:"테스트 데이터 예측 오차 확률 23%",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀


d1.set_fill("선형 분석을 위한 데이터 표준화 및 훈련실행시 연관된 데이터 수집과 분석하여 데이터를 선택함이 중요하게 생각된다.")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
//https://github.com/dlwnsgod/Regression_250220/tree/main/binary_classification_Regression
let d2 = new DataSet("종양데이터 분석에 의한 음성과 양성 종양데이터 예측모델")//메인타이틀
d2.set_content("종양데이터 분석 및 결과.")//서브 타이틀
d2.set_img(0,{imgtitle:"데이터수집",imgurl:"https://drive.google.com/file/d/1M5l82dXr_3GWrJHN1QhjTuXCjQ3oBqfR/view?usp=drive_link",imglog:"sklearn에서 제공하는 중앙데이터 수신코드",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"수신데이터구성파악",imgurl:"https://drive.google.com/file/d/1wbY2jIsWdA69SaGnjy0-yjPmZBt2zAYp/view?usp=drive_link",imglog:"반지름,표면조직,둘레 등 10개의 특성 데이터 파악",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터값 수치분석",imgurl:"https://drive.google.com/file/d/1bgscjg8OGFTEtb8WDw2Ag9hLSnnA6tdn/view?usp=drive_link",imglog:"각 특성의 최대값과 표준편차 분석",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"훈련 및 테스트데이터 분리",imgurl:"https://drive.google.com/file/d/15MubHGZsEEio-bWzCtBTJ3loCaA5sOdd/view?usp=drive_link",imglog:"훈련데이터 80%, 검증데이터 10%, 테스트데이터 10% 각각 분리",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/1Gbca8LQd2un5GhQk9OBmtrXk7jGdIyOO/view?usp=drive_link",imglog:"데이터 표준분포값으로 변경 후 변경된 데이터 확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터최종확인",imgurl:"https://drive.google.com/file/d/1N8Ec8xRGK8t7r3DsSXHDgx1IirQJJ2R-/view?usp=drive_link",imglog:"훈련전 데이터 수정 및 차원과 값에 대한 최종확인",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"이진분류모델구성과훈련",imgurl:"https://drive.google.com/file/d/1Qc65WEeajHjiBU_JFN2GlV97v0bVwJvh/view?usp=drive_link",imglog:"이진분류모델 구성후 컴파일 및 훈련200회 실행",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"훈련결과시각화그래프",imgurl:"https://drive.google.com/file/d/1KRYr2oPssXNoidZiEZQYGR0R84dAEFRv/view?usp=drive_link",imglog:"이진분류모델의 훈련후 검증데이터와 훈련데이터의 정확도와 손실도 측정 데이터 그래프 시각화",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"이진분류모델평가",imgurl:"https://drive.google.com/file/d/1nfqVh4Y1CBOoSBuA9avzdpp4D-XG7s3V/view?usp=drive_link",imglog:"테스트 데이터와 테스트 정답을 입력하여 손실율과 정확률 측정",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"예측데이터 출력",imgurl:"https://drive.google.com/file/d/1TfH_ldMtyQFmssCbDdfcCF9BlVUDn5yQ/view?usp=drive_link",imglog:"테스트 데이터를 입력하여 예측값을 출력 후 실제정답과 비교",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"혼동행렬과시각화히트맵",imgurl:"https://drive.google.com/file/d/1C-bZO4TN2GrgOjDIV7peniiN9C8Cn3Vm/view?usp=drive_link",imglog:"혼동행렬을 출력하여 히트맵으로 실제정답과 예측정답의 예측된 횟수 시각화 실행하여 1종오류와 2종오류에 대한 추측",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀
d2.set_img(0,{imgtitle:"정밀도재현율측정",imgurl:"https://drive.google.com/file/d/16Vkn6fWGBbpJqkj54i7YXeXcAjxb1Z3e/view?usp=drive_link",imglog:"훈련결과 모델의 정밀도와 제현율 및 f1-score을 측정하여 수치 요약",sourceurl:"https://github.com/dlwnsgod/Regression_250220/blob/main/binary_classification_Regression/logistic_regression_cancer.py"})//이미지타이틀


d2.set_fill("악성종양과 양성 종양을 확률적으로 구분 할 수 있는 AI모델 구축")//사용자 에필로그
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
