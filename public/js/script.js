console.log("Its Working Fine");

let theme = localStorage.getItem('theme');

if(theme == null){
	setTheme('light');
}else{
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode;
		console.log('Option clicked:', mode);
		setTheme(mode);
	})
}

function setTheme(mode){

    if(mode == 'light'){
        document.getElementById('theme-style').href = 'styles/default.css';
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'styles/dark.css';
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'styles/blue.css';
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'styles/green.css';
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'styles/purple.css';
    }

    localStorage.setItem('theme', mode);
}