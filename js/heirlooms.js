

var heirlooms = new Array()


for(i=0;i<50;i++){
	heirlooms[i]=0;
}


function createheirloom(x){

	var rnd1=Math.random()*100
	var rnd2=Math.random()*100
	var rnd3=Math.random()*300
	var rnd4=Math.random()*1000

	var rarity=1;
	var value=1;
	var name="";
	var bns=""
	var power=1;
    var cns="";

	if(rnd1<10){
		name="破碎的 ";
		value=0.3;
		rarity=1;
		power=0.1;
	}
	else if(rnd1<20){
		name="二手的 ";
		value=1;
		power=0.5;
	}else if(rnd1>99){
		name="神秘的 ";
		value=5;
		rarity=5;
		power=3;
	}else if(rnd1>95){
		name="原始的 ";
		value=2.5;
		rarity=2;
		power=2;
	}else if(rnd1>85){
		name="未动过的 ";
		value=2;
		rarity=1.5;
		power=1.5;
	}else if(rnd1>75){
		name="新的 ";
		value=1.5;
		rarity=1.5;
		power=1.2;
	}


	if(rnd2<10){
		name+="斧 ";
		value*=0.4;
		rarity*=1;
		bns="wood";
		bnsd="木头生产: +"
		power*=0.1;
	}
	else if(rnd2<20){
		name+="镐斧 ";
		value*=0.5;
		rarity*=1;
		bns="mineral";
		bnsd="矿物生产: +"
		power*=0.1;
	}else if(rnd2<30){
		name+="权杖 ";
		value*=1.5;
		rarity*=1;
		bns="morale";
		bnsd="士气生产: +"
		power*=0.1;
	}else if(rnd2<40){
		name+="金币 ";
		value*=2;
		rarity*=1;
		bns="gold";
		bnsd="黄金生产: +"
		power*=0.05;
	}else if(rnd2<50){
		name+="剑 ";
		value*=1;
		rarity*=1;
		bns="power";
		bnsd="部队力量: +"
		power*=0.03;
	}else if(rnd2<55){
		name+="盾 ";
		value*=1;
		rarity*=2;
		bns="armor";
		bnsd="军队防御: +"
		power*=0.05;
	}else if(rnd2<60){
		name+="罐子 ";
		value*=1;
		rarity*=1;
		bns="healing";
		bnsd="治疗 : +"
		power*=0.06;
	}else if(rnd2<65){
		name+="衣服 ";
		value*=6;
		rarity*=2;
		bns="hp";
		bnsd="军队血量: +"
		power*=0.03;
	}else if(rnd2<70){
		name+="大炮 ";
		value*=1;
		rarity*=2;
		bns="shippower";
		bnsd="船攻击力: +"
		power*=0.025;
	}else if(rnd2<75){
		name+="书 ";
		value*=1;
		rarity*=2;
		bns="knowledge";
		bnsd="知识生产: +"
		power*=0.05;
	}else if(rnd2<80){
		name+="箱子 ";
		value*=2;
		rarity*=2;
		bns="shipcargo";
		bnsd="货舱容量: +"
		power*=0.15;
	}else if(rnd2<85){
		name+="锤子 ";
		value*=5;
		rarity*=2;
		bns="craft";
		bnsd="制作效率: +"
		power*=0.015;
	}else if(rnd2<90){
		name+="眼镜 ";
		value*=1;
		rarity*=2;
		bns="exprew";
		bnsd="探险的奖励: +"
		power*=0.025;
	}else if(rnd2<93){
		name+="化石 ";
		value*=9;
		rarity*=3;
		bns="legacy";
		bnsd="遗物获得: +"
		power*=0.01;
	}else if(rnd2<96){
		name+="王冠 ";
		value*=10;
		rarity*=3;
		bns="trade";
		bnsd="贸易比率: +"
		power*=0.025;
	}else if(rnd2<98){
		name+="箱子 ";
		value*=15;
		rarity*=4;
		bns="storage";
		bnsd="存储容量: +"
		power*=0.01;

	}else if(rnd2<99.5){
		name+="遗物 ";
		value*=20;
		rarity*=5;
		bns="global";
		bnsd="全局产量: +"
		power*=0.01;
	}
	else
	{
		name+="谜 ";
		value*=30;
		rarity*=15;
		bns="auto";
		bnsd="自动工艺效率: +"
		power*=0.01;
	}


	if(rnd3<15){
        cns="乞丐的";
		cns+=name;
		value*=0.5;
		rarity*=2;
		power*=0.5;
	}
	else if(rnd3<30){
        cns="强盗的";
		cns+=name;
		value*=1;
		rarity*=2;
		power*=1;
	}else if(rnd3<45){
        cns="战士的";
		cns+=name;
		value*=1.5;
		rarity*=2;
		power*=1.25;
	}else if(rnd3<55){
        cns="女士的";
		cns+=name;
		value*=1.5;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<65){
        cns="旅行者的";
		cns+=name;
		value*=1.5;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<75){
        cns="古老的";
		cns+=name;
		value*=2;
		rarity*=2.5;
		power*=1.5;
	}else if(rnd3<85){
        cns="贵族的";
		cns+=name;
		value*=2.5;
		rarity*=2.5;
		power*=2;
	}else if(rnd3<93){
		cns="王后的";
		cns+=name;
		value*=4;
		rarity*=6;
		power*=3;
	}else if(rnd3<99){
        cns="国王的";
		cns+=name;
		value*=5;
		rarity*=8;
		power*=4;
	}else if(rnd3<100){
		cns="太阳的";
		cns+=name;
		value*=15;
		rarity*=15;
		power*=10;
	}


	if(rnd3<150){
		if(rnd4<1){
			name+="上帝";
			value*=100;
			rarity*=100;
			power*=50;
		}
		else if(rnd4<10){
			name+="英雄";
			value*=35;
			rarity*=35;
			power*=20;
		}
		else if(rnd4<50){
			name+="主人";
			value*=20;
			rarity*=20;
			power*=5;
		}else if(rnd4<150){
			name+="老师";
			value*=10;
			rarity*=10;
			power*=2;
		}
	}
	value=Math.ceil(value)
	rarity=Math.ceil(rarity)


	if(heirlooms[1]>0)
	{
		prestige["shards"]+=heirlooms[1];
		$(".shardsnum").show();
		unlocked[".shardsnum"]=1;
	}

	heirlooms[0]=name;
	heirlooms[1]=value;
	heirlooms[2]=rarity;
	heirlooms[3]=power;
	heirlooms[10]=bns;
	heirlooms[11]=bnsd;
	heirlooms[12]=0;
	drawheirlooms();
	setHeirloomNotif();
}

function setHeirloomNotif() {
	$("#heirloomspane").html("<a data-toggle='tab' onclick='clearHeirloomNotif()' href='#heirlooms'><div style='color:orange'>Heirlooms(!)</div></a>");
}

function clearHeirloomNotif() {
	setTimeout(function(){$("#heirloomspane").html("<a data-toggle='tab' href='#heirlooms'>Heirlooms</a>");},20);
}


function getRarityColor(x){


	if(x<=3){
		return "white";
	}
	else if(x<=20){
		return "#1eff00";
	}
	else if(x<=75){
		return "#0070dd";
	}else if(x<=200){
		return "#a335ee";
	}else if(x<=400){
		return "#ff8000";
	}
	else
	{
		return "red ";	
	}



}


function drawheirlooms(){

	suffix=""
	suffix2=""
	if(heirlooms[12]>0){
	suffix=" +"+heirlooms[12]
	}
	if(heirlooms[13]>0){
	suffix2=" +"+heirlooms[13]
	}
	if(heirlooms[1]>0){
		$(".heirloomslog").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[2])+"' >"+heirlooms[0]+suffix+"</div> 价值: "+heirlooms[1]+" 稀有度: "+heirlooms[2]+"<br>"+heirlooms[11]+(heirlooms[3]*100).toFixed(2)+"%")
		$("#sellheirloombutton").text("出售 ("+heirlooms[1]+" 碎片)")
	}
	else
	{
		$(".heirloomslog").html(" ");
		$("#sellheirloombutton").text("出售")
	}
	if(heirlooms[5]>0){
		$(".heirloomslog2").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[6])+"' >"+heirlooms[4]+suffix2+"</div> 价值: "+heirlooms[5]+" 稀有度: "+heirlooms[6]+"<br>"+heirlooms[9]+(heirlooms[7]*100).toFixed(2)+"%")
		$("#upgradeheirloom").text("升级 ("+Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)+" 碎片)")
	}
	else
	{
		$("#upgradeheirloom").text("升级")
		$(".heirloomslog2").html(" ")
	}
	$(".heirloomlist").html("");
	if(heirlooms[14]>0){
	heirlist="<table>";
		for(i=0;i<heirlooms[14];i++){
		suffix3="";
		heir=heirlooms[20+i].split(";")
	
		if(heir[6]>0){
		suffix3=" +"+heir[6]
		}

		heirlist+=("<tr><td style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heir[2])+"' >"+heir[0]+suffix3+"</div></td><td><button onclick='storeheirlooms("+i+")'>选择</button></td></tr>")		
		}
heirlist+="<table>"
		$(".heirloomlist").html(heirlist)
	}

}

function storeheirlooms(x){

	heir=new Array()


		if(x==-1){
			if(parseFloat(heirlooms[4])==0){
				return;
			}
			x=heirlooms[14]
			if(heirlooms[14]>9){

				x=0;
			}
		}


	if(heirlooms[x+20]!=0){
	heir=heirlooms[x+20].split(";")
	
	if(parseFloat(heir[0])==0){
		heirlooms[14]++;
	}
	}
	else
	{
	heirlooms[14]++;
	heir=new Array()
	heir[0]=0
	heir[1]=0
	heir[2]=0
	heir[3]=0
	heir[4]=0
	heir[5]=0
	heir[6]=0
	}
	if(heir[3]>0){
	bonus[heir[5]]+=parseFloat(heir[3])
	}
	if(heirlooms[7]>0){
	bonus[heirlooms[8]]-=parseFloat(heirlooms[7])
	}
	swap1=heirlooms[4]
	swap2=heirlooms[5]
	swap3=heirlooms[6]
	swap4=heirlooms[7]
	swap5=heirlooms[9]
	swap6=heirlooms[8]
	swap7=heirlooms[13]

	heirlooms[4]=heir[0]
	heirlooms[5]=parseFloat(heir[1])
	heirlooms[6]=parseFloat(heir[2])
	heirlooms[7]=parseFloat(heir[3])
	heirlooms[9]=heir[4]
	heirlooms[8]=heir[5]
	heirlooms[13]=parseFloat(heir[6])


	heir[0]=swap1
	heir[1]=swap2
	heir[2]=swap3
	heir[3]=swap4
	heir[4]=swap5
	heir[5]=swap6
	heir[6]=swap7

	heirlooms[20+x]=heir[0]+";"+heir[1]+";"+heir[2]+";"+heir[3]+";"+heir[4]+";"+heir[5]+";"+heir[6]

	if(parseFloat(heir[0])==0){
		heirlooms[14]--
		for(i=20+x;i<30;i++){
			heirlooms[i]=heirlooms[i+1]
		}
	}

	drawheirlooms();
	

}

function swapheirlooms(){


	if(heirlooms[3]>0){
	bonus[heirlooms[10]]+=heirlooms[3]
	}
	if(heirlooms[7]>0){
	bonus[heirlooms[8]]-=heirlooms[7]
	}
	swap1=heirlooms[0]
	swap2=heirlooms[1]
	swap3=heirlooms[2]
	swap4=heirlooms[3]
	swap5=heirlooms[10]
	swap6=heirlooms[11]
	swap7=heirlooms[12]

	heirlooms[0]=heirlooms[4]
	heirlooms[1]=heirlooms[5]
	heirlooms[2]=heirlooms[6]
	heirlooms[3]=heirlooms[7]
	heirlooms[10]=heirlooms[8]
	heirlooms[11]=heirlooms[9]
	heirlooms[12]=heirlooms[13]

	heirlooms[4]=swap1
	heirlooms[5]=swap2
	heirlooms[6]=swap3
	heirlooms[7]=swap4
	heirlooms[8]=swap5
	heirlooms[9]=swap6
	heirlooms[13]=swap7

	drawheirlooms();
}

function sellheirloom(){

if(heirlooms[1]>0){
	prestige["shards"]+=heirlooms[1];
	heirlooms[0]=0;
	heirlooms[1]=0;
	heirlooms[2]=0;
	heirlooms[3]=0;
	heirlooms[10]=0
	heirlooms[11]=0
	heirlooms[12]=0

	$(".shardsnum").show();
	unlocked[".shardsnum"]=1;
	drawheirlooms();
}

}


function upgradeheirloom(){
if(heirlooms[5]>0){
if(prestige["shards"]>=Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)){

bonus[heirlooms[8]]-=heirlooms[7]
prestige["shards"]-=Math.ceil(Math.pow(1.5,(heirlooms[13]))*5)
heirlooms[13]++


heirlooms[5]+=Math.ceil(Math.pow(1.5,(heirlooms[13]))*2)
heirlooms[7]*=1.05




bonus[heirlooms[8]]+=heirlooms[7]

}
}

drawheirlooms()
}