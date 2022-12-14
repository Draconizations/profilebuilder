import { writable } from "svelte/store";
import { browser } from "$app/environment";

import type Embed from '$lib/embed';
import { defaultEmbed } from '$lib/embed';

let storageName = "disc-embed"; 

let defaultValue = defaultEmbed;

const initialValue: any = browser ? window.localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)!): defaultValue : defaultValue;

const embed = writable<Embed>(initialValue);

embed.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(storageName, JSON.stringify(value));
    }
});

export default embed;