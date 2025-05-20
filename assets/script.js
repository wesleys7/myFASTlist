//const

const menuOptions = document.querySelector('.menuOptions')
const menuListOptions = document.querySelector('.menuListOptions')
const btnCloseMenuListOptions = document.querySelector('.btn-closeMenuListOptions')
const overlayTransp = document.querySelector('.overlayTransp')
const overlay = document.querySelector('.overlay')
const theme = document.querySelector('.theme')
const themecolors = document.querySelector('.themecolors')
const body = document.querySelector('body')
const defaultColor = document.querySelector('.defaultColor')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const color4 = document.querySelector('.color4')
const color5 = document.querySelector('.color5')
const saveColor = document.querySelector('.saveColor')
const about = document.querySelector('.about')
const aboutinfo = document.querySelector('.aboutinfo')
const btnCloseAboutInfo = document.querySelector('.btn-closeAboutInfo')
const addNewListBtn = document.querySelector('.addNewList-btn')
const boxListOptions = document.querySelector('.boxListOptions')
const buttonAreaNewList = document.querySelector('.buttonAreaNewList')
const fastList = document.querySelector('.fastList')
const homepage = document.querySelector('.homepage')
const hInfos = document.querySelector('.hInfos')
const fastListPage = document.querySelector('.fastList-Page')
let addItens = document.querySelector('#addItens')
const btnHome = document.querySelectorAll('.btn-home')
const btnFavorite = document.querySelector('.btn-favorite')
const favoritesPage = document.querySelector('.favorites-page')
const btnAddItem = document.querySelector('.btn-addItem')
const listArea = document.querySelector('.listArea')
let arrayItens = []
let arrayItensCopy = []
let arrayItensChecked = []
const msgAlert = document.querySelector('.msgAlert')
let contFast = 0
let idFast = 0
const btnOrder = document.querySelector('.btn-order')
const btnRebuild = document.querySelector('.btn-rebuild')
let sortListOn = false
const listItem = document.querySelector('.listItem')




//EventListener

menuOptions.addEventListener('click', () => {
    menuListOptions.style.display = menuListOptions.style.display === 'flex' ? 'none':'flex'
    if(fastListPage.style.display == 'flex') {
        overlay.style.display = 'flex'
    } else {
        overlayTransp.style.display = 'flex'
    }
      
})
btnCloseMenuListOptions.addEventListener('click', () => {
    menuListOptions.style.display = menuListOptions.style.display === 'flex' ? 'none':'flex'
    overlayTransp.style.display = 'none'
    overlay.style.display = 'none'
    themecolors.style.display = 'none'
})

theme.addEventListener('click', () => {
    themecolors.style.display = themecolors.style.display === 'flex' ? 'none':'flex'
    aboutinfo.style.display = 'none'
})

defaultColor.addEventListener('click', () => {
    body.style.backgroundColor = '#7fb6ff'
})
color1.addEventListener('click', () => {
    body.style.backgroundColor = '#204c85'
})
color2.addEventListener('click', () => {
    body.style.backgroundColor = '#1d2e35'
})
color3.addEventListener('click', () => {
    body.style.backgroundColor = '#838567'
})
color4.addEventListener('click', () => {
    body.style.backgroundColor = '#b38bff'
})
color5.addEventListener('click', () => {
    body.style.backgroundColor = '#f6b2ff'
})

saveColor.addEventListener('click', () => {
    const bgSelected = getComputedStyle(body).backgroundColor
    body.style.backgroundColor = bgSelected
    localStorage.setItem('selectedColor', bgSelected)
    themecolors.style.display = 'none' 
})

about.addEventListener('click', () => {
    aboutinfo.style.display = aboutinfo.style.display === 'flex'? 'none' : 'flex'
    themecolors.style.display = 'none'
})

btnCloseAboutInfo.addEventListener('click', () => {
    aboutinfo.style.display = 'none'
})

overlay.addEventListener('click', () => {
    if (fastListPage.style.display == 'flex') {

    } else {
        boxListOptions.style.display = 'none'
        overlay.style.display = 'none'
        buttonAreaNewList.style.padding = '50px 50px 50px 50px'
        boxListOptions.style.transform = 'translateY(-8px)'
    }
    
  
})

addNewListBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
    buttonAreaNewList.style.padding = '50px 50px 0px 50px'
    boxListOptions.style.display = 'flex'
    setInterval(()=>{
        boxListOptions.style.transform = 'translateY(-8px)'
    }, 50)
})

fastList.addEventListener('click', () => {
    boxListOptions.style.display = 'none'
    buttonAreaNewList.style.padding = '50px 50px 50px 50px'
    overlay.style.display = 'none'
    homepage.style.display = 'none'
    hInfos.style.display = 'flex'
    fastListPage.style.display = 'flex'
    setTimeout(()=> {addItens.focus()}, 50)

})

btnHome.forEach (button => { button.addEventListener ('click', () => {
    fastListPage.style.display = 'none'
    favoritesPage.style.display = 'none'
    hInfos.style.display = 'none'
    homepage.style.display = 'flex'
})
})

btnFavorite.addEventListener('click', () =>{
    fastListPage.style.display = 'none'
    favoritesPage.style.display = 'flex'

})

btnAddItem.addEventListener('click', () => {
    addItemFast()
    renderListChecked()
})
addItens.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addItemFast()
        renderListChecked()
    }
})

btnOrder.addEventListener('click', sortList)

btnRebuild.addEventListener('click', rebuild)

listArea.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-checked')) {

        const div = e.target.closest('.boxListArea')
        const text = div.querySelector('.itemtxt').textContent.trim()
        const index = arrayItens.indexOf(text)
        arrayItensChecked.push(arrayItens[index])
        arrayItens.splice(index, 1)
        arrayItensCopy = [...arrayItens]
        listArea.innerHTML = ''
        renderList()
        renderListChecked()
        contFast--
        renderItensLength()
        console.log(arrayItens)

    }
})



//functions


function updateBackground () {
    const savedColor = localStorage.getItem('selectedColor')
    if(savedColor) {
        body.style.backgroundColor = savedColor
    }
}

updateBackground ()


function updateClock() {
    let now = new Date
    let h = now.getHours()
    let m = now.getMinutes()

    let daynames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado']
    let cutdaynames = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.']
    let monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let day = daynames[now.getDay()]
    let cutday = cutdaynames[now.getDay()]
    let date = now.getDate()
    let month = monthNames[now.getMonth()]
    let year = now.getFullYear()



    document.querySelector('.infoday').innerHTML = `${day}, dia ${date}`
    document.querySelector('.hour').innerHTML = h<10? '0'+h:h
    document.querySelector('.minutes').innerHTML = m<10? '0'+m:m
    document.querySelector('.infomonth').innerHTML = `${month}, ${year}`

    document.querySelector('.hclock').innerHTML = `${cutday}, ${date} de ${month} ${h<10? '0'+h:h}:${m<10? '0'+m:m}`

}

updateClock()
setInterval(updateClock, 1000)

setInterval(()=>{
    let points = document.querySelector('.points')
    points.style.visibility = (points.style.visibility ==='hidden' ? 'visible':'hidden')
}, 1000)


function addItemFast() {
    msgAlert.style.display = 'none'
    let txtValue = addItens.value.trim()
    if (txtValue !== '') {
        arrayItens.push(`${txtValue}`)
        arrayItensCopy = [...arrayItens]
        listArea.innerHTML = ''
        renderList()
        idFast++
        contFast++
        renderItensLength()
        
    } else {
        alert('digite um item antes de clicar em adicionar.')
    }
}

function renderItensLength() {
    let itensLength = document.querySelector('.itensLength')
    itensLength.innerHTML = `Itens na lista ${contFast}`  
}


function rebuild () {
   
}

function renderList () {
    addItens.value = ''
    addItens.focus()
    if(sortListOn == false) {
            listArea.innerHTML = ''
            arrayItens.forEach((itemvalue, i) => {
            const item = document.createElement('div')
            item.className = 'boxListArea'
            item.id = `item${i}`
            item.draggable = 'true'
            item.innerHTML = `
                <div class="listItem">
                                    <div class="section" title="mover item">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                    <div class="itemtxt">${itemvalue}</div>
                                    <div class="lIa1"><div class="btn-checked" title="ok">✔</div></div>
                                    <div class="lIa2"><div class="btn-alert" title="atenção">!</div></div>
                                    <div class="lIa3"><div class="btn-delete" title="deletar"><div class="midlebar"></div></div></div>
                                </div>
            `
            listArea.appendChild(item)
        })
        } else {
            const orderedItems = arrayItensCopy.sort()
            listArea.innerHTML = ''
            orderedItems.forEach((itemvalue, i) => {
                const item = document.createElement('div')
                item.className = 'boxListArea'
                item.id = `item${i}`
                item.draggable = 'true'
                item.innerHTML = `
                    <div class="listItem">
                                        <div class="section" title="mover item">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="itemtxt">${itemvalue}</div>
                                        <div class="lIa1"><div class="btn-checked" title="ok">✔</div></div>
                                        <div class="lIa2"><div class="btn-alert" title="atenção">!</div></div>
                                        <div class="lIa3"><div class="btn-delete" title="deletar"><div class="midlebar"></div></div></div>
                                    </div>
                `
                listArea.appendChild(item)
            })    
        }
}

function renderListChecked() {
    arrayItensChecked.forEach((itemvalue, i) => {
            const item = document.createElement('div')
            item.className = 'boxListArea'
            item.id = `item${i}`
            item.draggable = 'true'
            item.innerHTML = `
                <div class="listItemChecked">
                                    <div class="section" title="mover item">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                    <div class="itemtxt"><s><i> ${itemvalue} </i></s></div>
                                    <div class="lIa3"><div class="btn-reverse" title="refazer">↺</div></div>
                                </div>
            `
            listArea.appendChild(item)
            
        })
}

function sortList () {
    
    if(sortListOn == false) {
        if(arrayItens.length == 0) {
        alert('Ainda não há itens na lista para serem organizados')
        } else {
        sortListOn = true
        btnOrder.style.backgroundColor = '#71f550c0'
        btnOrder.style.color = '#fff'
        btnOrder.innerHTML = 'A-Z↓<span class = "sBtn-order">ON</span>'
        listArea.innerHTML = ''
        renderList()
        renderListChecked()
        
    }
    } else {
      if(arrayItens.length == 0) {
        alert('Ainda não há itens na lista para serem organizados')
        } else {
            sortListOn = false
            listArea.innerHTML = ''
            btnOrder.style.backgroundColor = '#ffffffc0'
            btnOrder.style.color = '#777777'
            btnOrder.innerHTML = 'A-Z↓'
            listArea.innerHTML = ''
            renderList()
            renderListChecked()
            
        }  
    }
}

/*const btnChecked = document.querySelectorAll('.btn-checked')

btnChecked.addEventListener('click', ()=> {
    /*document.querySelectorAll('.boxListArea').forEach(div => {
        const text = div.querySelector('.itemtxt').textContent.trim()
        const index = arrayItens.indexOf(text)
        arrayItensChecked.push(arrayItens[index])
        arrayItens.splice(index, 1)
        renderList()
    })*/
    /*alert('funcionou')
})*/