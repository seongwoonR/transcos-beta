function Start(){

	$ = {};

	/////// SET UP SCENE ////////

	Show("background","main");
	Show("table","lab_table");
	Show("me","me");


	PlaySound("bg","laboratory",{loop:-1, volume:0.3});

	//////////////////////////////

	R("<b>Trans Coming Out Simulator 2018</b>");
	R("거짓과 진실이 함께 섞여 있는 게임.");
	R("안녕, 이 게임에 온 걸 환영해.");

	Choose({
		"게임 플레이!": Play,
		"넌 누구니? (크레딧)": function(){
			Credits("넌 누구니?");
		},
		"이건 왜 만든 거야? (게임에 대하여)": function(){
			About("이건 왜 만든 거야?");
		}
	});
}


function pencil(message){
	p(message);
	Show("me","me_write");
	PlaySound("sfx","pencil");
	Wait(2000);
	Show("me","me");
}


function Play(message){
	p(message);
	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		R("매우 성급하잖아?!");
		R("커밍아웃 시뮬레이터 2014랑은 다른 사람이 만들었고");
		R("다른 내용을 담고 있는데도 스킵하는 거야?");
		p("ㅎ...");
		R("그런 똥 씹은 표정이라니...");
		Wait(800);
		R("네가 스킵을 한다고 했지만! 소개하자면 나는 라울이고-");
		p("스킵! 스킵!");
		R("이 이야기는 Nicky Case의 커밍아웃 시뮬레이터 2014에 영감을 받아 만든-");
		p("스키이이입!");
		Wait(1000);
		R("우쒸...");
		R("알았어.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		R("좋아!");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		R("좋아, 그럼...");
	}
 Wait(500);
	R("실례가 아니라면");
	R("네 성별을 물어도 될까?");

	Choose({
		"남성": function boy(){
			$.gender = 1;

			p("남성이야.");
			Play_2();
		},
		"여성": function girl(){
			$.gender = 2;

			p("여성이야.");
			tw_play();
		},
		"이 중에 없어": function(message){
			$.gender = 3;
			p(message);
			R("앗, 논 바이너리야?");
			R("미안해,");
			R("능력이 부족해서 바이너리 트랜스젠더만 다루었어.");
			non_binary();
		}
	});
}

function non_binary(){
	Wait(1000);
	R("다시 질문할게.");
	R("누구의 이야기를 듣고 싶어?");
	Choose({
		"너의 이야기(남성)": function(){
			p("네 이야기를 들어볼래.");
			Play_2();
		},
		"네 친구의 이야기(여성)":  function(){
			p("네 친구의 이야기를 들어볼래.");
			tw_play();
		}
	});
}

function Play_2(){

	p("더 물어볼 건?");
	R("없어. 이거면 충분해.");
	R("내 세계에 온 걸 환영해, 친구.");
	Play_3();
}

function tw_play(){
	p("더 물어볼 건?");
	R("없어. 이거면 충분해.");

	if(!$.asked_about){
		R("이 게임을 왜 만들었는지도 좀 궁금해 해줘.");
		p("크흠흠.");
		if(!$.asked_credits){
			R("그리고 내가 누군지도.");
			p("크흐으음!");
		}
	}else	if(!$.asked_credits){
		R("내가 누군지도 궁금해 해줘.");
		p("크흠흠.");
	}
	Wait(1000);
	R("참, 시작하기 전에,");
	R("나는 플레이어를 고통스럽게 하려고 이 게임을 제작한 게 아니야.");
	p("엥... 뭐?");
	Wait(800);
	R("하지만 누군가는, 이 게임을 플레이하면서 힘들 수도 있겠다는 생각이 들어.");
	Wait(800);
	R("게임을 플레이하다 힘들면 내려놓고 쉬는 걸 추천해.");
	p("뭐야, 갑자기 무섭게.");
	R("그럼, <i>그 날</i>로 돌아가서...");
	p("그 날?");
	Wait(1000);
	R("이 게임은 고등학교 졸업 후");
	R("내 친구가 일하며 실제로 들었던 말들을 위주로 진행될 거야.");
	Wait(800);
	R("모든 선택지는 진실일 수도, 거짓일 수도 있어.");
	R("내 친구에겐 거짓이어도,");
	Wait(800);
	R("누군가에겐 진실일 수도, 그 반대일 수도 있지.");
	p("진지하면서 복잡한걸...");
	R("인생이라는 게 그런 거 아니겠어?");
				Choose({
			"이 게임에 진실과 거짓이 섞여 있다는 말이야?": function(message){
				p("이 게임에 진실과 거짓이<br>섞여 있다는 말이야?");
				R("맨 처음 말했듯, 그렇지.");
				R("벌써 몇 년이나 지난 일이야.");
				R("대화를 하나하나 다 기억해낼 수는 없다고.");
				p("사실 이전 게임 따라 한 거지?");
				R("쉬잇!");
				tw_play_2();
			},
			"왠지 우울하게 끝날 것 같은데...": function(message){
				p(message);
				R("꼭 그렇지만은 않을 거야.");
				p("아니면 모든 게 피로 끝난다거나...");
				R("그건 범죄잖아.");
				p("말이 그렇다는 거지...");
				tw_play_2();
			},
			"그래서 이게 무슨 의미가 있는데?": function(message){
				p(message);
				p("다 지난 일이라며?");
				R("글쎄, 우리에게는 의미가 있지.");
				if($.asked_credits){
					R("이 게임에 관해 물었을 때 한 말처럼");
					R("많은 사람이 알아줬으면 하니까.");
					R("자세한 건");
				}
				R("이 게임이 다 끝나고 나면,");
				R("내가 무슨 말을 하는지 알게 될 거야.");
				p("호오...");
				tw_play_2();
			}
		});
}

	function tw_play_2(){

		Wait(1000);
		queue(ClearDialogue,0);
		Wait(1000);

		R("이 게임에 모범답안이란 건 없어.");
		R("단지 선택에는 책임이 따를 뿐이지.");
		p("선택이 중요하다는 뜻이군.");
		Wait(1000);
		R("그리고 이건 개인의 이야기일 뿐이니");
		R("이 이야기가 모두를 대표하진 않는다는 걸 명심해줘.");
		R("그럼, 준비됐지?");
		Wait(1000);

		Clear();
		play_tw();
	}

function Play_3(){

	if(!$.asked_about){
		R("이 게임을 왜 만들었는지도 좀 궁금해 해줘.");
		p("크흠흠.");
		if(!$.asked_credits){
			R("그리고 내가 누군지도.");
			p("크흐으음!");
		}
	}else	if(!$.asked_credits){
		R("내가 누군지도 궁금해 해줘.");
		p("크흠흠.");
	}


	Wait(1000);
	R("참, 시작하기 전에,");
	R("나는 플레이어를 고통스럽게하려고 이 게임을 제작한 게 아니야.");
	p("엥... 뭐?");
	Wait(800);
	R("하지만 누군가는, 이 게임을 플레이하면서 힘들 수도 있겠다는 생각이 들어.");
	Wait(800);
	R("게임을 플레이하다 힘들면 내려놓고 쉬는 걸 추천해.");
	p("뭐야, 갑자기 무섭게.");
	R("그럼, <i>그 날</i>로 돌아가서...");
	p("그 날?");
	Wait(1000);
	R("이 게임은 고등학교의 내가 실제로 들었던 말들을 위주로 진행될 거야.");
	R("그리고 했어야 했던, 하지 말아야 했던 말들도 담고 있지.");
	Wait(800);
	R("하지만 이제와서 어쩌겠어.");
	R("이미 다 지나간 일인데.");

	Choose({
		"이 게임에 진실과 거짓이 섞여 있다는 말이야?": function(message){
			p(message);
			R("맨 처음 말했듯, 그렇지.");
			R("벌써 몇 년이나 지난 일이야.");
			R("대화를 하나하나 다 기억해낼수는 없다고.");
			p("사실 이전 게임 따라한 거지?");
			R("쉬잇!");
			main_last();
		},
		"왠지 우울하게 끝날 것 같은데...": function(message){
			p(message);
			R("꼭 그렇지만은 않을 거야.");
			p("아니면 모든 게 피로 끝난다거나...");
			R("그건 범죄잖아.");
			p("말이 그렇다는 거지...");
			main_last();
		},
		"그래서 이게 무슨 의미가 있는데?": function(message){
			p(message);
			p("다 지난 일이라며?");
			R("글쎄, 나에게는 의미가 있지.");
			if($.asked_credits){
				R("이 게임에  물었을 때 한 말처럼");
				R("많은 사람이 알아줬으면 하니까.");
				R("자세한 건");
			}
			R("이 게임이 다 끝나고 나면,");
			R("내가 무슨 말을 하는 지 알게될 거야.");
			p("호오...");
			main_last();
		}
	});
}

function main_last(){

	Wait(1000);
	queue(ClearDialogue,0);
    
    Show("me", "me_write");
    PlaySound("sfx", "pencil");
    Wait(2000);
    Show("me", "me");

	R("이 게임에 모범답안이란 건 없어.");
	R("단지 선택에는 책임이 따를 뿐이지.");
	p("선택이 중요하다는 뜻이군.");
	Wait(1000);
	R("그리고 난 나의 이야기를 할 뿐이니");
	R("내 이야기가 모두를 대표하진 않는다는 걸 명심해줘.");
	R("그럼, 준비됐지?");
	Wait(1000);

	Clear();
	Start_school();

}

function Credits(message){

	$.asked_credits = true;

	if($.asked_about){
 	p(message);
	}else{
		pencil(message);
	}

	R("아, 나를 먼저 설명할게.");
	R("안녕? 나는 라울이야.");
	R("보이는 바와 같이 나는 화학자라서,<br>프로그래밍은 영 엉망이거든.");
	R("양해 바랄게.");
	Wait(1000);
	p("게임은 어떻게 만들었대?");
	R("열정!");
	p("아,예...");
	Wait(1000);
	R("이 게임의 기본은 <b>Nicky Case의 커밍아웃 시뮬레이터 2014</b>야.");
	Wait(1000);
	R("만약 이 게임을 하고 느낀 점이 있");
	R("-든없든 저 게임을 플레이해보는 걸<br>추천할게.");
	R("저 게임이 더 재밌거든.");
	p("원래 1편이 제일 나은 법이지.");


	if($.asked_about){
		Choose({
			"이제 게임을 시작해볼까!": Play
		});
	}else{
		Choose({
			"됐고, 게임을 시작해볼까?": Play,
			"이건 왜 만들었어? (게임 크레딧)": function(){
				About("이건 왜 만들었어?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	if($.asked_credits){
		p(message);
		R("많은 사람이 알아줬으면 좋겠어서.");
		R("나의 이야기, 내 친구의 이야기...");
		p("네 친구의 이야기?");
		R("응, 전반적으로는 내 경험이지만,<br>친구의 경험도 있어야 했어.");
		Wait(800);
		R("내 경험으로는 하나의 스토리밖에 진행하지 못해.");
		p("무슨 캐릭터 선택창이라도 있는 건가...");
		R("하하, 나는 그렇게 고차원적인 게임은 못 만들어.");

		Choose({
			"좋아, 빨리 시작하자.": Play
		});

	}else{
			pencil(message);
		R("많은 사람이 알아줬으면 좋겠어서.");
		R("나의 이야기, 내 친구의 이야기...");
		p("네 친구의 이야기?");
		R("응, 전반적으로는 내 경험이지만,<br>친구의 경험도 있어야 했어.");
		Wait(800);
		R("내 경험으로는 하나의 스토리밖에 진행시키지 못해.");
		p("무슨 캐릭터 선택창이라도 있는 건가...");
		R("하하, 나는 그렇게 고차원적인 게임은 못 만들어.");


			Choose({
				"좋아, 빨리 시작하자.": Play,
				"넌 누구야? (크레딧)": function(){
					Credits("넌 누구야?");
				}
			});

	}
}
