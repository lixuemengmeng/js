(function(){
	var oLeft=id("left");
	var oRight=id("right");
	var oBigImg=id("big-img");
	var aImgs=tag("img",oBigImg);
	var oInfo=id("info");
	var oSmallImg=id("small-img");
	var smallAimgs=tag("img",oSmallImg);
	var oChangeNum=id("change-num");
	var nowIndex=0;
	var oContiner=id("continer");
	var zIndex=9;

	oLeft.onmouseover= oRight.onmouseover=function(){
		animate(this,{opacity:100});
		
	};
	oLeft.onmouseout= oRight.onmouseout=function(){
		animate(this,{opacity:0});

	};
	oLeft.onclick=oRight.onclick=function(){
		if(this==oRight){
			nowIndex++;
			if(nowIndex==aImgs.length){
				nowIndex=0;
			}
		}
		else {
			nowIndex--;
			if(nowIndex==-1){
				nowIndex=aImgs.length-1;
			}
		}
		changeImg(nowIndex);
	};

	
	for(var i=0;i<smallAimgs.length;i++){
		smallAimgs[i].index=i;
		smallAimgs[i].style.opacity = 0.3;
		smallAimgs[i].style.filter = 'alpha(opacity=30)';
		smallAimgs[i].onmouseover=function(){
		animate(this,{opacity:100});


		};
		smallAimgs[i].onmouseout=function(){
			if(this.index!=nowIndex){
		animate(this,{opacity:30})
			}
		// animate(this,{opacity:30});
		if(this.index==nowIndex){
		animate(this,{opacity:100});
			}

		};
		smallAimgs[i].onclick=function(){
			
			if(this.index==nowIndex){
				return;
			}
			for(var j=0;j<smallAimgs.length;j++){
				smallAimgs[j].style.opacity = 0.3;
				smallAimgs[j].style.filter = 'alpha(opacity=30)';
			}
		this.style.opacity=1;
		this.style.filter = 'alpha(opacity=100)';
		changeImg(this.index);
		};

	}
	//为了让第一次进来的时候第一张小图片变成透明度为100
	smallAimgs[nowIndex].style.opacity=1;
	smallAimgs[nowIndex].style.filter = 'alpha(opacity=100)';
	var timer=setInterval(function(){
		oRight.onclick();
	},1000);
	oContiner.onmouseover=function(){
			clearInterval(timer);
	};
	oContiner.onmouseout=function(){
			timer=setInterval(function(){
			oRight.onclick();
		},1000);
	};


 	function changeImg(idx){
 		console.log(nowIndex);
 			nowIndex=idx;
 		aImgs[nowIndex].style.opacity=0;
		aImgs[nowIndex].style.filter="alpha(opacity=0)";
 		aImgs[nowIndex].style.zIndex=zIndex++;
 		animate(aImgs[nowIndex],{opacity:100});
 		 oLeft.style.zIndex=zIndex++;
 		  oRight.style.zIndex=zIndex++;
 		  oInfo.style.zIndex=zIndex++;
 		  oChangeNum.innerHTML=nowIndex+1;
 		
 // 		
	 var aleft=0;
	 if(nowIndex==0||nowIndex==1){
	 		  	aleft=0;
	 		 } else if(nowIndex==6||nowIndex==7){
	 		  		aleft=smallAimgs.length/2;
	 		  }
	 	
	 	else{
	 		aleft=nowIndex-1;
	 	}
	 	
	 	
	 		animate(oSmallImg, {left: -aleft * smallAimgs[0].offsetWidth});
	 for(var i=0;i<smallAimgs.length;i++){
	 	smallAimgs[i].style.opacity = 0.3;
		smallAimgs[i].style.filter = 'alpha(opacity=30)';
	 }
	smallAimgs[nowIndex].style.opacity=1;
	smallAimgs[nowIndex].style.filter = 'alpha(opacity=100)';
}
})();