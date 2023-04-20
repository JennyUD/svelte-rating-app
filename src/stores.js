import {writable} from 'svelte/store'

export const feedbackStore=writable([
     {id: 1,
	rating:8,
	text: 'Microsoft Company Adverts skills'},
	{id: 2,
	rating:5,
	text: 'Google Company Adverts skills'},
	{id: 3,
	rating:9,
	text: 'Airtel Nigeria Company Adverts skills'},
	{id: 4,
	rating: 7,
	text: 'Apple Company Adverts skills'}]);