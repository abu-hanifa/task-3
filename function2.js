const link = () => {
const a = document.createElement('a')
a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'
a.textContent = 'ссылка'
return document.getElementById("main").append(a)
}
link()