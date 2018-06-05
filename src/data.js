//const timedelta = require('time-delta');
import timedelta from 'time-delta';

import { pt_br } from './pt_br';
timedelta.addLocale('pt_br', pt_br);

/*
timedelta.addLocale('pt_br', {
	"long": {
		"years": {
			"one": "{0} ano",
			"other": "{0} anos"
		},
		"months": {
			"one": "{0} mês",
			"other": "{0} meses"
		},
		"weeks": {
			"one": "{0} semana",
			"other": "{0} semanas"
		},
		"days": {
			"one": "{0} dia",
			"other": "{0} dias"
		},
		"hours": {
			"one": "{0} hora",
			"other": "{0} horas"
		},
		"minutes": {
			"one": "{0} minuto",
			"other": "{0} minutos"
		},
		"seconds": {
			"one": "{0} segundo",
			"other": "{0} segundos"
		}
	},
	"narrow": {
		"years": {
			"one": "{0} ano",
			"other": "{0} anos"
		},
		"months": {
			"one": "{0} mês",
			"other": "{0} meses"
		},
		"weeks": {
			"one": "{0} sem.",
			"other": "{0} sem."
		},
		"days": {
			"one": "{0} dia",
			"other": "{0} dias"
		},
		"hours": {
			"one": "{0} h",
			"other": "{0} h"
		},
		"minutes": {
			"one": "{0} min",
			"other": "{0} min"
		},
		"seconds": {
			"one": "{0} s",
			"other": "{0} s"
		}
	},
	"short": {
		"years": {
			"one": "{0} ano",
			"other": "{0} anos"
		},
		"months": {
			"one": "{0} mês",
			"other": "{0} meses"
		},
		"weeks": {
			"one": "{0} sem.",
			"other": "{0} sem."
		},
		"days": {
			"one": "{0} dia",
			"other": "{0} dias"
		},
		"hours": {
			"one": "{0} h",
			"other": "{0} h"
		},
		"minutes": {
			"one": "{0} min",
			"other": "{0} min"
		},
		"seconds": {
			"one": "{0} seg",
			"other": "{0} seg"
		}
	}
});
*/

var instance = timedelta.create({
	locale: 'pt_br', span: 5
});

var date1 = new Date('2018-02-26T00:00:00');
var date2 = new Date();

console.log(instance.format(date2, date1));

let array = [1, 2, 3, 4];
let [a, b, c, d] = array;
let obj = {e: 1, f: 2};
let {e, f} = obj;
console.log(a, b, c, d, e, f);

const delay = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));

async function something() {
    console.log("this might take some time....");
    const x = await delay(5000);
    console.log("done!", x);
}

something();
