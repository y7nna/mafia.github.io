let players = document.querySelector(`.player`);;
let button = document.querySelector(`.button`);
let rand;
let mafs = 0;
let koms = 0;
let dons = 0;
let doks = 0;
let mans = 0;
let puts = 0;
let rol = 0;
let mafias = [];
let roleM = document.querySelector(`.roles-m`);
let roleK = document.querySelector(`.roles-k`);
let roleDon = document.querySelector(`.roles-don`);
let roleD = document.querySelector(`.roles-d`);
let roleMa = document.querySelector(`.roles-ma`);
let rolePu = document.querySelector(`.roles-pu`);
let timebut = document.querySelector('.timebut');
let timer = document.querySelector('.timer');
let timer2 = document.querySelector('.timer2');
let timerS;
let timerS2;
let timestop = document.querySelector('.timestop');
let timestop2 = document.querySelector('.timestop2');
let kolvosek = document.querySelector('.kolvosek');
let timebut2 = document.querySelector('.timebut2');
let diebut = document.querySelector('.diebut');
let dieclear = document.querySelector('.dieclear');
let dienum = document.querySelector('.dienum');
let die = document.querySelector('.die');
let dies = [];

let maf = document.querySelector(`.maf`);
let kom = document.querySelector(`.kom`);
let don = document.querySelector(`.don`);
let dok = document.querySelector(`.dok`);
let man = document.querySelector(`.man`);
let put = document.querySelector(`.put`);


button.onclick = () => {
	roleM.innerHTML = ``;
	roleK.innerHTML = ``;
	roleDon.innerHTML = ``;
	roleD.innerHTML = ``;
	roleMa.innerHTML = ``;
	rolePu.innerHTML = ``;
	if (maf.checked) {
	mafs = document.querySelector(`.mafs`);
	mafs = mafs.value;
	roleM.innerHTML = `Мафия:`;
	// console.log(mafs);
}
	if (kom.checked) {
	koms = 1;
	roleK.innerHTML = `Комиссар:`;
}	
	if (don.checked) {
	dons = 1;
	roleDon.innerHTML = `Дон Мафии:`;
}	
	if (dok.checked) {
	doks = 1;
	roleD.innerHTML = `Доктор:`;
}	

	// rol = Number(mafs) + Number(koms) + Number(doks) + Number(mans);
	// console.log(rol);
	// for (let i = rol; i > 0; i--) {
		
	// }

	for (let i = mafs; i > 0; i--) {
		rand = Math.floor(Math.random() * (players.value)) + 1;
		mafias.push(Number(rand));
	}
	for (let i = 0; i < 10; i++) {
	mafias = [...new Set(mafias)];
	if (mafias.length != mafs) {
		for (let i = mafs - mafias.length; i > 0; i--) {
		rand = Math.floor(Math.random() * (players.value)) + 1;
		mafias.push(Number(rand));
		}
	}
	}
	if (maf.checked) {
		for (let i = mafs; i > 0; i--) {
			roleM.innerHTML += mafias[i-1] + ` `;
		}
	}
	if (kom.checked) {
		koms = Math.floor(Math.random() * (players.value)) + 1;
		for (let i = mafs; i > 0; i--) {
			for (let j = mafs; j > 0; j--) {
				if (koms == mafias[j-1]) {
				koms = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		}
		roleK.innerHTML += koms;
	}
	if (don.checked) {
		dons = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (dons == mafias[j-1] || dons == koms) {
				dons = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleDon.innerHTML += dons;
	}
		if (dok.checked) {
		doks = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (doks == mafias[j-1] || doks == koms || doks == dons) {
				doks = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleD.innerHTML += doks;
	}
			if (man.checked) {
		mans = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (mans == mafias[j-1] || mans == koms || mans == dons || mans == doks) {
				mans = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleMa.innerHTML += mans;
	}
				if (put.checked) {
		puts = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (puts == mafias[j-1] || puts == koms || puts == dons || puts == doks || puts == mans) {
				puts = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		rolePu.innerHTML += puts;
	}




	mafias = [];
	mafs = 0;
	koms = 0;
	doks = 0;
}


players.oninput = () => {
	players = document.querySelector(`.player`);
	console.log(players.value)
}


// button.onclick = function getRandomInt() {
// 	rand = Math.floor(Math.random() * (players.value)) + 1;
// 	console.log(rand);
// }


timebut.onclick = () => {
	timebut.innerHTML = 'Начать заново';
	let sec = 60;
	clearInterval(timerS);
	timerS = setInterval(function Times() {
		timer.innerHTML = sec;
		sec = sec - 1;
		if (sec < 0) {
			clearInterval(timerS);
			timer.innerHTML = '';
		}
	}, 1000);

}


timestop.onclick = () => {
	clearInterval(timerS);
	timer.innerHTML = '';
}

timebut2.onclick = () => {
	sec = kolvosek.value;
	clearInterval(timerS2);
	timerS2 = setInterval(function Times2() {
	timer2.innerHTML = sec;
	sec = sec - 1;
	if (sec < 0) {
		clearInterval(timerS2);
		timer2.innerHTML = '';
	}
	}, 1000);
}

timestop2.onclick = () => {
	clearInterval(timerS2);
	timer2.innerHTML = '';
}

diebut.onclick = () => {
	dies.push(String(dienum.value));
	die.innerHTML = dies;
}

dieclear.onclick = () => {
	dies = [];
	die.innerHTML = '';
}
