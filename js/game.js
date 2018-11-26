//1.创建游戏引擎主要部分
//把所有的js代码都放在这个自执行的函数中，从而防止变量泄露到全局范围
(function(){
	var ctx=null;
	window.requestAnimationFrame=(function(){
		return window.requestAnimationFrame||
		window.webkitRequestAnimationFrame||
		window.mozRequestAnimationFrame||
		window.oRequestAnimationFrame||
		window.msRequestAnimationFrame||
		function(callback){
			window.setTimeout(callback,1000/60);
		}
	})();
	var Game={
		canvas:document.getElementById("canvas"),
		setup:function(){

			if(this.canvas.getContext){
				ctx=this.canvas.getContext("2d");
				
				this.width=this.canvas.width;
				this.height=this.canvas.height;
				
				this.init();
				Ctrl.init();								
			}
		},
		animate:function(){
			//由于animate（）是个在Game对象之外触发的子引用函数，所以必须引用game对象，而非this
			//原因是requestAnimationFrame返回了一个window对象
			Game.play=requestAnimationFrame(Game.animate);
			Game.draw();
		},
		init:function(){
			Background.init();
			Ball.init();
			Paddle.init();
			Bricks.init();
            this.animate();


        },
		//draw 用来处理所有更新并绘制对象的逻辑
		draw:function(){
			//将canvans 绘图板清空，每次更新它时，之前绘制的图形就会被清除
			ctx.clearRect(0,0,this.width,this.height);
			Background.draw();
			Ball.draw();
			Paddle.draw();
			Bricks.draw();
		}
		
	};
	var Background={
		init:function(){
			this.ready=false;
			this.img=new Image();
			this.img.src="./img/background.jpg";
			
			this.img.onload=function(){
				Background.ready=true;
			}
		},
		draw:function(){
			if(this.ready){
				ctx.drawImage(this.img,0,0)
			}
		}
	};
	var Bricks={
		init:function(){},
		draw:function(){}
	};
	var Ball={
		init:function(){},
		draw:function(){}
	};
	var Paddle={
		init:function(){},
		draw:function(){}
	};
	var Ctrl={
		init:function(){}
	};
	window.onload=function(){
		Game.setup();
	}
})();





























