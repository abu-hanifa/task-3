const word = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    console.log(li);
    return document.getElementById("list").append(li)

}

word('js')
