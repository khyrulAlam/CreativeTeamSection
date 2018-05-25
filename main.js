const video = document.querySelector('.views');
const btn = document.querySelectorAll('.button');


function btnOn(){
	btn.forEach((e)=>{
		e.disabled = false;
	})
	console.log('On...')
}
function btnOff(){
	btn.forEach((e)=>{
		e.disabled = true;
	})
	console.log('Of...')
}

btn.forEach((a)=>{
	a.addEventListener('click',(e)=>{
		const target = e.target.innerHTML;
		btnOff();
		if(target === 'All'){
			All();
		}
		if(target === 'Founder'){
			Founder();
		}
		if(target === 'Marketing'){
			Marketing();
		}
		if(target === 'Engineers'){
			Engineers();
		}
		if(target === 'Support'){
			Support();
		}
		if(target === 'Manager'){
			Manager();
		}
	})
})

function All(){
	if(video.currentTime === 0){
		console.log('you are in current state..')
		btnOn();
	}else{
		video.play();
		setTimeout(()=>{
			video.currentTime =0;
			video.pause();
			btnOn();
		},2000)
	}
}
function Founder(){
	//console.log(video.currentTime +"--"+'Founder');
	if(video.currentTime === 0){
		video.play();
		setTimeout(()=>{
			video.pause();
			btnOn();
		},1000*6.69)
	}else{
		video.play()
		setTimeout(()=>{
			video.currentTime =0;
		},2000)
		setTimeout(()=>{
			video.pause();
			btnOn();
		},1000*8)	
	}
}

function Marketing() {
	if(video.currentTime ===0){
		video.currentTime = 8;
		video.play();
		setTimeout(()=>{
			video.pause();
			btnOn()
		},1000*9)
	}else{
		video.play();
		setTimeout(()=>{
			video.currentTime =8.59;
		},2000)

		setTimeout(()=>{
			video.pause()
			btnOn()
		},1000*10.33)
	}
}
function Engineers() {
	if(video.currentTime ===0){
		video.currentTime = 19;
		video.play();
		setTimeout(()=>{
			video.pause();
			btnOn()
		},1000*12)
	}else{
		video.play();
		setTimeout(()=>{
			video.currentTime =18.88;
		},2000)
		setTimeout(()=>{
			video.pause()
			btnOn()
		},1000*13.6)
	}
}
function Support() {
	if(video.currentTime ===0){
		video.currentTime = 19;
		video.play();
		setTimeout(()=>{
			video.pause();
			btnOn()
		},1000*12)
	}else{
		video.play();
		setTimeout(()=>{
			video.currentTime =32.80;
		},2000)
		setTimeout(()=>{
			video.pause()
			btnOn()
		},1000*11.95)
	}
}
function Manager() {
	if(video.currentTime ===0){
		video.currentTime = 45.72;
		video.play();
		setTimeout(()=>{
			video.pause();
			video.currentTime =0;
			btnOn()
		},1000*9.40)
	}else{
		video.play();
		setTimeout(()=>{
			video.currentTime =45.72;
		},2000)
		setTimeout(()=>{
			video.pause()
			video.currentTime =0;
			btnOn()
		},1000*10.75)
	}
}


// video.addEventListener('timeupdate',(e)=>{
// 	console.log(video.currentTime)
// })