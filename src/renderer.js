import timedelta from 'time-delta';

import { pt_br } from './pt_br';
timedelta.addLocale('pt_br', pt_br);

var instance = timedelta.create({
	locale: 'pt_br', span: 5
});


export function diff() {
	var date1 = new Date('2018-02-26T00:00:00');
	var date2 = new Date();
	return instance.format(date2, date1);
}
