//친구랑 같이 집에 가는중~
//플레이어가 트랜스젠더라는 단어를 직접적으로 듣는 부분
//플레이어에게 커밍아웃하라고 이야기
//친구는 '답'에 대해 언급할것임


function Start_Going_home(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_2");
	Show("building","building");
	Show("friend","friend");
	PlaySound("bg","city",{loop:-1, volume:0.3});

	////////////////////////////
    
	a("<b>~하굣길~</b>");
	Wait(1000);
	f("유성아,");
	f("나 금요일에 커밍아웃했잖아,");
	f("엄마가 주말 동안 생각해보시더니");
	f("정신과 같이 가주신대!");
	y("오 진짜?");
  Wait(1000);
	y("뭐라셔?");
	f("'내가 대신 네 삶을 살아주는 것도 아닌데 네가 원하는 대로 해'");
	f("라고 하셨어.");
	f("완전 잘 됐지 않냐!");

	Choose({
		"개짱부럽네.": function(message){
			y(message);
			y("혹시 양자 두실 생각 없으신지...");
			f("뭐라는 거야.");
			f("우리 엄마거든?!");
			going_1();
		},
		"존나 좋겠다.": function(message){
			y(message);
			y("혹시 양자 두실 생각 없으신지...");
			f("뭐라는 거야.");
			f("우리 엄마거든?!");
			going_1();
		},
		"진짜 다행이네.": function(message){
			y(message);
			y("너 걱정 많이 했잖아.");
			f("그러니까 말이야.");
			going_1();
		}
	});
}
	function going_1(){
		Wait(500);
		f("진단서 받으면 호르몬 시작해야지!");
		f("수술받고, 빨리 정정하고 싶다.");
		f("정정하면 머리도 좀 길러보고 싶어.");
		Wait(800);
		f("지금은 머리 기르면 '역시 너도 여자였구나' 이딴 소리만 해대서.");
		y("아, 극혐.");
		Wait(1000);
		f("호르몬도, 수술도 안 한 상태에서는");
		f("하고 싶은 걸 해도 역시 여자라느니 그런 소리만 한다니까.");
		f("그것 때문에 더 스트레스야.");
		Wait(800);
		y("나도 오늘 반 애들 때문에 고통받았어.");
		y("내가 대학 가면 머리 기르고 꾸미고 다닐 것 같대.");
		Wait(800);
		f("사람 속사정을 모르니까 아무렇게나 뱉을 수 있는 거지.");
		f("그래서 뭐라 했는데?");

		Choose({
			"그냥 무시했지": ignore,
			"아주 욕 한 바가지를 퍼부었지.": ignore_2,
			"홧김에 커밍아웃했어.": ignore_3
		});
}
		function ignore(message){
		y(message);
		y("달리 할 말이 있겠냐.");
		y("한 귀로 듣고 한 귀로 흘렸어.");
		f("그래...");
		f("거기서 더 말 붙여봤자 너만 피곤해.");
		f("네 말도 잘 안 들어줄 거고.");
		 going_2();
	 }

	 function ignore_2(message){
		 y(message);
		 f("오...");
		 Wait(1000);
		 y("속으로...");
		 f("풉");
		 y("웃지 마.");
		 going_2();
	 }

	 function ignore_3(message){
		 y(message);
		 f("헹.");
		 f("뻥 치고 있네.");
		 f("공부 빼곤 다 재밌는 애들인데");
		 f("퀴어인거 알면 전교생한테 구경날걸.");
		 y("으으...생각만 해도 싫다.");
		 going_2();
	 }

	 function going_2(){
		 	Wait(1000);
		 y("어차피 외모 보고 판단하는 거라면...");
		 y("나를 여자라고 생각하는 게");
		 y("더 에너지가 소모될 텐데...");
		Wait(1000);
		 f("애초에 남자랑 여자를 다르게 대해야 한다는 생각이 있으니까");
		 f("트랜스젠더는 어떻게 대해야 하는 지 혼란스러운 걸 거야.");
		 f("그냥 <b>'사람'</b>으로 대하면 될 텐데 말이지.");
		 y("내 말이 그 말이야.");
		 Wait(1000);
		f("지금부터라도 준비 안 하면 대학 때 여자로 다녀야 해...");
		f("여대에 지원서 넣게 될 수도 있-");
		y("싫어어어어어어어!!")
		y("그럼 취직할 때도 여대로 적어야 하잖아!");
		y("여중으로 족하다고!");
		f("여대 나온 남ㅈ-");
		y("인생 꼬이는 얘기 흐즈므르...");
		Wait(1000);
		f("음...");
		f("너도 부모님께 한번 말해봐.");
		f("혹시 몰라, 이해해주실지.");

		Choose({
			"말도 안돼.": function(message){
				y(message);
				y("차라리 이해해줄 만한 친구를 찾는 게 더 빠를걸.");
				f("해보기 전엔 모르는 법이라니까!");
						Waiting_End();
			},
			"그랬으면 좋겠다.": function(message){
				y(message);
				y("그럼 나도 너처럼 병원 찾아보고 있을 텐데.");
				f("희망을 가져봐.");
				Waiting_End();
			},
			"음...": function(message){
				y(message);
				f("고민하는 걸 보니 커밍아웃할 생각은 있네!");
				f("야, 힘내라.");
						Waiting_End();
			}
		});
}

function Waiting_End(){
		Wait(1000);
	y("음...");
	y("커밍아웃 실패할 것 같은데...");
	f("커밍아웃에 실패가 어딨어?!");
	f("네 존재를 알린 것.");
	f("그리고 상대방이 그 사실을 안 것.");
	f("그럼 성공이지. 받아들이는 건 그 사람 몫이지 네 몫이 아니야.");

	Choose({
		"그런가...": accept,
		"그래도 가족이라 걱정할 텐데...": concern,
		"말이야 간단하지.":anger
		});
	}

function accept(message){
	y(message);
	f("자기소개하는 것도 정답이 있다고 생각해?");
	y("그건... 아니지...");
	f("그럼 뭘 그렇게 고민하고 있어.");
	f("이만 간다. 밤에 문자해!");
	going_home_End();
}

function concern(message){
	y(message);
	f("너도 부모님의 자식이야.");
	f("오히려 자식이 행복해지는 길인데 그걸 반대하실까.");
	y("으음...");
	f("이만 간다. 나중에 문자해!");
	going_home_End();
	}

function anger(message){
	Show("arm","city_arm");
	y(message);
	y("그리고 넌 엄마가 받아주셨으니 그런 말을 할 수 있지.");
	f("진정해,진정해.");
	Show("arm",null);
	f("너도 아직 말해보지 않았잖아?");
	f("나도 말하기 전엔 두려웠어.");
	f("희망을 가져봐.");
	Wait(1000);
	y("...노력해볼게.");
	f("그래, 밤에 문자해!");
	f("좋은 소식 들고 와!");
	going_home_End();
}

function going_home_End(){
		Show("friend",null);
		Show("raul","gohome_alone");
		queue(ClearDialogue,0);
		Wait(1000);
		y("엄마에게 말해야 할까...");
		Wait(500);
		y("분명 반대하실 것 같은데...");
		Wait(500);
		y("아빠에겐 어떻게 말해야 하지...");
		Wait(1000);
		Clear();
	Start_Dinner_2();
}
