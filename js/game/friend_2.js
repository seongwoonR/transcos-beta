
function Start_friend_2(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_3");
    Show("friend","tw_friend");
    PlaySound("bg","bedroom_1",{loop:-1});

	////////////////////////////

	Wait(1000);
	PlaySound("sfx","cellphone");
	Wait(1500);
	f("유성! 어떻게 됐어?");

	if($.response==1){
		 y("네 말대로야. 전혀 모르시더라. 예상은 했지만.");
		 f("저런...");
	 }else if($.response==2){
		 y("음... 네 말대로야.");
		 y("엄마가 다 알고 계시더라.");
		 f("그렇구나...");
	}

	f("부모님은 뭐라고 하셔?");
	f("잘 풀렸어?");

	if($.result==1){
		y("...나...");
		y("집 나가야 될 것 같아.");
		f("뭐? 세상에... 너 괜찮아?");
		y("...아니, 별로 괜찮지 않은 것 같아.");
		friend_2_mid();
	}else if($.result==2){
		y("굉장히 싸웠어. 결론이 안 날 것 같아서...");
		y("아무리 말해도 이해 못하실 것 같아.");
		f("뭐? 세상에... 너 괜찮아?");
		y("...그냥 집 나가려고.");
		y("더는 다른 방법이 없을 것 같아.");
		friend_2_mid();
	}else if($.result==3){
		y("이미...많이 찾아보신 모양이더라고.");
		f("뭐? 세상에... 너 괜찮아?");
		y("음.. 그래. 그치만 지금까지랑은 많은 게 바뀔 것 같아.");
		y("내가 잘한 건지 모르겠다.");
		y("이걸로 괜찮은 걸까?");
		f("...");
		y("...");
		f("그래도.. 우려하던 일은 일어나지 않아서 다행이다.");
		f("분명 괜찮을 거야.");
		y("음.. 고마워.");
		y("미안, 조금 긴장이 풀려서. 이만 잘게.");
		end_friend_2();
	}
}
	function friend_2_mid(){
		f("내가 괜히 부추겼는지도 모르겠네...");
		Choose({
			"미안해하지마.": function(message){
				$.Dontbe = true;
				y(message);
				y("어차피 이미 엎질러진 물이고...");
				y("언젠간 일어날 일이었으니까.");
				f("내가 너무 막연하게 생각했나봐...");
				keep_talk();
			},
			"......": function(message){
				y(message);
				y("하아...");
				f("미안해, 입이 백개라도 할 말이 없다...");
				keep_talk();
			},
			"네 잘못 아니야.": function(message){
				y(message);
				y("어쩌면, 이렇게 태어난 내잘못일지도...");
				f("그런 생각 하지마...");
				f("나는... 네가 행복했으면 좋겠어.");
				keep_talk();
			}
		});
}
		function keep_talk(){
		y("내가 잘한 건지 모르겠다.");
		y("이걸로 괜찮은 걸까?");
		f("...");
		y(".......");
		f("정말 유감이야...");
		f("미안해.");
		y("아니야.");
		if($.Dontbe){
			y("미안해하지 않아도 돼.");
			y("너 오늘 미안하다는 말만 몇 번 하는 지 아니?");
			f("그것도 미안...");
		}
		y("나 조금 긴장이 풀렸나봐...");
		y("이만 잘게.");
		f("잘자.")
		end_friend_2();
	}

	function end_friend_2(){
		Clear();
		Start_Outro_tw();
	}