let lang = prompt('Enter the desired language ("es", "de", "en", or "fr"): ')
console.log(lang)
if (lang !== 'es' && lang !== 'de' && lang !== 'fr') {
    console.log('"Hello World" translated to Enlgish is, well, "Hello World"!')
} else if (lang == 'es') {
    console.log('"Hello World" translated to Spanish is "Hola Mundo"!')
} else if (lang == 'de') {
    console.log('"Hello World" translated to German is "Hallo Welt"!')
} else {
    console.log('"Hello World" translated to French is "Bonjour le Monde"!')
}