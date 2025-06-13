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
let arrayItensBackup = []
let arrayItensCopy = []
let arrayItensChecked = []
let arrayItensProblem = []
let arrayItensProblemBackup = []
let arrayItensExcluded = []
let arrayAllItensExcluded = []
let arrayFavoriteItensFL = []

let dataFavoriteVer = JSON.parse(localStorage.getItem('savedDataF'))
let dataFavoriteItensFL = []

if(dataFavoriteVer == null) {
    dataFavoriteItensFL = []
} else {
    dataFavoriteItensFL = dataFavoriteVer
}

const msgAlert = document.querySelector('.msgAlert')
let contFast = 0
let idFast = 0
const btnOrder = document.querySelector('.btn-order')
const btnRebuild = document.querySelector('.btn-rebuild')
let sortListOn = false
const listItem = document.querySelector('.listItem')
const midlebar = document.querySelector('.midlebar')
let itensLength = document.querySelector('.itensLength')
const btnDeleteAll = document.querySelector('.btn-deleteAll')
const btnSave = document.querySelector('.btn-save')
const favorites = document.querySelector('.favorites')
const FavoriteArea = document.querySelector('.FavoriteArea')
const btnEndList = document.querySelector('.btn-endList')
const notifications = document.querySelector('.notifications')
const notificationPointNotifications = document.querySelector('.notificationPoint-notifications')
let notificationPointNotificationsTF = () => {
    const status = localStorage.getItem('notificationPointNotificationsTF')
    if (status === null) return true;
    return status === 'true'
}
const notificationPointAbout = document.querySelector('.notificationPoint-about')
let notificationPointAboutTF = () => { 
    const status = localStorage.getItem('notificationPointAboutTF')
    if (status === null) return true;
    return status === 'true'
}
const notificationPointMenu = document.querySelector('.notificationPoint-menu')
let notificationPointMenuTF = true

backupCheck()
updateNotifications()

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
    menuListOptions.style.display = 'none'
    overlayTransp.style.display = 'none'
    overlay.style.display = 'none'
})

about.addEventListener('click', () => {
    //aboutinfo.style.display = aboutinfo.style.display === 'flex'? 'none' : 'flex'
        const div = document.createElement('div')
        div.classList = 'alertModal'
        div.innerHTML = `
            <div class="boxDelete">
                <div class="txtModal">
                    <p style = "justify-content:end">
                    <br>
                        Esse projeto foi desenvolvido para fins de estudo, utilizando apenas HTML, 
                        CSS e JavaScript puro, com foco em praticar estrutura, estilo e interatividade sem frameworks.
                        <br>Encontrou um erro, um bug ou até mesmo uma sugestão... Entre em contato comigo!   
                        <p style="text-align:center"><i>Instagram:</i><strong> <a href="https://www.instagram.com/wesleys.7/" target="_blank" style="all: unset; cursor: pointer;">@wesleys.7</a></strong></p>
                    </p>
                </div>
                <div class="boxOptionsDelete" id="back">
                    <div class="back">voltar</div>
            </div>
        `
        body.appendChild(div)
        document.querySelector('#back').addEventListener('click', () => {
            div.remove()
            localStorage.setItem('notificationPointAboutTF', false)
            updateNotifications()
            
        })
    themecolors.style.display = 'none'
    

})

/*btnCloseAboutInfo.addEventListener('click', () => {
    aboutinfo.style.display = 'none'
    notificationPointAboutTF = false
    updateNotifications()
    menuListOptions.style.display = 'none'
    overlayTransp.style.display = 'none'
    overlay.style.display = 'none'
})*/


notifications.addEventListener('click', ()=> {

    if(notificationPointNotificationsTF() === true) {
        const div = document.createElement('div')
        div.classList = 'alertModal'
        div.innerHTML = `
            <div class="boxDelete">
                <div class="txtModal">
                    <p>🎉 <strong>Uhuu! Seja muito bem-vindo(a)!</strong></p>
                    <p style="text-align:center">
                        Você acaba de receber acesso antecipado a versão alfa do meu projeto, e é uma honra ter você por aqui! 👊💀
                        <br>    Obrigado de coração por estar testando a minha primeira aplicação web — Pode ter certeza que fiz tudo bem pensado e tudo com muito carinho para poder te ajudar nas suas organizações.
                        E olha... espero que esse objetivo seja alcançado! 🫡
                        <br>Se encontrar um bug, é só reportar!😎
                        <br>    Agora é com você: aproveite, explore, crie listas e conte sempre com a gente! 🚀✨<br>
                        <p><strong>Wesley Souza</strong><br><i style="font-size: 15px">developer</i></p>
                    </p>
                </div>
                <div class="boxOptionsDelete" id="back">
                    <div class="back">voltar</div>
            </div>
        `
        body.appendChild(div)
        document.querySelector('#back').addEventListener('click', () => {
            div.remove()
            localStorage.setItem('notificationPointNotificationsTF', false)
            updateNotifications()
            notificationPointNotifications.style.display = 'none'
            
        })
    } else {
        const div = document.createElement('div')
        div.classList = 'alertModal'
        div.innerHTML = `
            <div class="boxDelete">
                <div class="txtDelete">
                    <p style="opacity:0.5"><i>~notificação lida~</i></p>
                    <p>🎉 <strong>Uhuu! Seja muito bem-vindo(a)!</strong></p>
                    <p style="text-align:center">
                        Você acaba de receber acesso antecipado a versão alfa do meu projeto, e é uma honra ter você por aqui! 👊💀
                        <br>    Obrigado de coração por estar testando a minha primeira aplicação web — Pode ter certeza que fiz tudo bem pensado e tudo com muito carinho para poder te ajudar nas suas organizações.
                        E olha... espero que esse objetivo seja alcançado! 🫡
                        <br>Se encontrar um bug, é só reportar!😎
                        <br>    Agora é com você: aproveite, explore, crie listas e conte sempre com a gente! 🚀✨<br>
                        
                        <p><strong>Wesley Souza</strong><br><i style="font-size: 15px">developer</i></p>
                    </p>
                </div>
                <div class="boxOptionsDelete" id="back">
                    <div class="back">voltar</div>
            </div>
        `
        body.appendChild(div)
        document.querySelector('#back').addEventListener('click', () => {
            div.remove()
        })
    }
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
    
    if (arrayItens.length !== 0) {
        
        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>Deseja sair para a página ⌂ inicial ?<br/><strong>Se a lista não foi salva, todos os itens serão perdidos!</strong></p>
                    </div>
                    <div class="boxOptionsDelete">
                        <div class="deleteY">sair</div>
                        <div class="deleteN">voltar</div>
                </div>
            `
        listArea.appendChild(div)

        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.deleteY').addEventListener('click', () => {
                arrayItens = []
                arrayItensCopy = []
                arrayItensChecked = []
                arrayItensProblem = []
                arrayItensProblemBackup = []
                arrayItensExcluded = []
                arrayAllItensExcluded = []
                contFast = 0
                idFast = 0
                renderList()
                renderListChecked()
                renderListProblem()
                renderItensLength()
                fastListPage.style.display = 'none'
                favoritesPage.style.display = 'none'
                hInfos.style.display = 'none'
                homepage.style.display = 'flex'
                div.remove()
                localStorage.removeItem('securityBackup')
            })
    } else {

        fastListPage.style.display = 'none'
        favoritesPage.style.display = 'none'
        hInfos.style.display = 'none'
        homepage.style.display = 'flex'
    }
    
    
    })
})

btnFavorite.addEventListener('click', () =>{
    if (arrayItens.length !== 0) {
        
        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>Deseja sair para a página de ❤ favoritos ?<br/><strong>Se a lista não foi salva, todos os itens serão perdidos!</strong></p>
                    </div>
                    <div class="boxOptionsDelete">
                        <div class="deleteY">sair</div>
                        <div class="deleteN">voltar</div>
                </div>
            `
        listArea.appendChild(div)

        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.deleteY').addEventListener('click', () => {
                localStorage.removeItem('securityBackup')
                arrayItens = []
                arrayItensCopy = []
                arrayItensChecked = []
                arrayItensProblem = []
                arrayItensProblemBackup = []
                arrayItensExcluded = []
                arrayAllItensExcluded = []
                contFast = 0
                idFast = 0
                renderList()
                renderListChecked()
                renderListProblem()
                renderItensLength()
                fastListPage.style.display = 'none'
                favoritesPage.style.display = 'flex'
                div.remove()
                
            })

    } else {
        fastListPage.style.display = 'none'
        favoritesPage.style.display = 'flex'
    }  

})

btnAddItem.addEventListener('click', () => {
    localStorage.setItem('activeSession', 'true')
    let txtValue = addItens.value.toLowerCase().trim()
    let verif = arrayItens.some(item => item.toLowerCase() === txtValue.toLowerCase())

    if(verif) {
        const div = document.createElement('div')
        div.classList = 'alertModal'
        div.innerHTML = `
            <div class="boxDelete">
                <div class="txtDelete">
                    <p>opa... opa... Você já adicionou este item na lista 😅</p>
                    <div class="itemtxt">${txtValue}</div>
                </div>
                <div class="boxOptionsDelete" id="back">
                    <div class="back">voltar</div>
            </div>
        `
        listArea.appendChild(div)
        document.querySelector('#back').addEventListener('click', () => {
            setTimeout(()=> {addItens.focus(), addItens.value = ''}, 50)
            div.remove()
            
        })
         
    } else {
        addItemFast()
        renderListProblem()
        renderListChecked()
        arrayItensBackup = [...arrayItens]
    }
    setInterval(automaticSave,500)
})
addItens.addEventListener('keydown', (e) => {
    
    if (e.key === 'Enter') {
        localStorage.setItem('activeSession', 'true')
        let txtValue = addItens.value.toLowerCase().trim()
        let verif = arrayItens.some(item => item.toLowerCase() === txtValue.toLowerCase())

        if(verif) {
             const div = document.createElement('div')
            div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>opa... opa... Você já adicionou este item na lista 😅</p>
                        <div class="itemtxt">${txtValue}</div>
                    </div>
                    <div class="boxOptionsDelete" id="back">
                        <div class="back">voltar</div>
                </div>
            `
            listArea.appendChild(div)
            document.querySelector('#back').addEventListener('click', () => {
                setTimeout(()=> {addItens.focus(), addItens.value = ''}, 50)
                div.remove()
            })
        } else {
            addItemFast()
            renderListProblem()
            renderListChecked()
            arrayItensBackup = [...arrayItens]
        }
    }
    setInterval(automaticSave,500)
    
   
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
        renderListProblem()
        renderListChecked()
        contFast--
        renderItensLength()

    
    } else if (e.target.classList.contains('btn-delete') || e.target.classList.contains('midlebar')) {
        const item = e.target.closest('.boxListArea')
        const text = item.querySelector('.itemtxt').textContent.trim()
        const div = document.createElement('div')
        div.classList = 'alertModal'
        div.innerHTML = `
            <div class="boxDelete">
                <div class="txtDelete">
                    <p>Deseja realmente excluir esse item da lista?</p>
                    <div class="itemtxt">${text}</div>
                </div>
                <div class="boxOptionsDelete">
                    <div class="deleteY"><span class="material-symbols-outlined">
                        delete
                        </span>
                    </div>
                    <div class="deleteN">voltar</div>
            </div>
        `
        listArea.appendChild(div)
        document.querySelector('.deleteN').addEventListener('click', () => {
            div.remove()
        })
        document.querySelector('.deleteY').addEventListener('click', () => {
            
            if (arrayItens.includes(text)) {
                div.remove()
                const index = arrayItens.indexOf(text)
                arrayItensExcluded.push(text)
                arrayItens.splice(index,1)
                arrayItensCopy = [...arrayItens]
                listArea.innerHTML = ''
                renderList()
                renderListProblem()
                renderListChecked()
                contFast--
                renderItensLength()
            } else if (arrayItensProblem.includes(text)) {
                div.remove()
                const index = arrayItensProblem.indexOf(text)
                arrayItensExcluded.push(text)
                arrayItensProblem.splice(index,1)
                arrayItensProblemBackup = [...arrayItensProblem]
                listArea.innerHTML = ''
                renderList()
                renderListProblem()
                renderListChecked()
                contFast--
                renderItensLength()
            }
            
        })

    }   else if(e.target.classList.contains('btn-alert')) {

        const div = e.target.closest('.boxListArea')
        const text = div.querySelector('.itemtxt').textContent.trim()
        const index = arrayItens.indexOf(text)
        arrayItensProblem.push(arrayItens[index])
        arrayItensProblemBackup = [...arrayItensProblem]
        arrayItens.splice(index, 1)
        arrayItensCopy = [...arrayItens]
        listArea.innerHTML = ''
        renderList()
        renderListProblem()
        renderListChecked()

    } else if (e.target.classList.contains('btn-reverse')) {

            const div = e.target.closest('.boxListArea')
            const text = div.querySelector('.itemtxt').textContent.trim()
            const index = arrayItensChecked.indexOf(text)
            
            if (arrayItensProblemBackup.includes(text)) {
                
                arrayItensProblem.push(arrayItensChecked[index])
                arrayItensChecked.splice(index, 1)
                arrayItensCopy = [...arrayItens]
                listArea.innerHTML = ''
                renderList()
                renderListProblem()
                renderListChecked()
                contFast++
                renderItensLength()

            } else {
                arrayItens.push(arrayItensChecked[index])
                arrayItensChecked.splice(index, 1)
                arrayItensCopy = [...arrayItens]
                listArea.innerHTML = ''
                renderList()
                renderListProblem()
                renderListChecked()
                contFast++
                renderItensLength()
            }
            
            
    } else if (e.target.classList.contains('btn-checkedP')) {

        const div = e.target.closest('.boxListArea')
        const text = div.querySelector('.itemtxt').textContent.trim()
        const index = arrayItensProblem.indexOf(text)
        arrayItensChecked.push(arrayItensProblem[index])
        arrayItensProblem.splice(index, 1)
        arrayItensCopy = [...arrayItens]
        listArea.innerHTML = ''
        renderList()
        renderListProblem()
        renderListChecked()
        contFast--
        renderItensLength()

    } else if (e.target.classList.contains('btn-reverseP')) {

        const div = e.target.closest('.boxListArea')
        const text = div.querySelector('.itemtxt').textContent.trim()
        const index = arrayItensProblem.indexOf(text)
        arrayItens.push(arrayItensProblem[index])
        arrayItensProblem.splice(index, 1)
        arrayItensProblemBackup.splice(index, 1)
        arrayItensCopy = [...arrayItens]
        listArea.innerHTML = ''
        renderList()
        renderListProblem()
        renderListChecked()
    } 
})

btnDeleteAll.addEventListener('click', () => {
    if(contFast < 1 && arrayItensChecked.length == 0) {
        alert('A lista está vazia')
    } else {
        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>Deseja limpar e exluir todos os itens para começar uma nova lista?<br/><strong>Se a lista não foi salva, todos os itens serão perdidos!</strong></p>
                    </div>
                    <div class="boxOptionsDelete">
                        <div class="deleteY"><span class="material-symbols-outlined">
                            delete
                            </span>
                        </div>
                        <div class="deleteN">voltar</div>
                </div>
            `
        listArea.appendChild(div)

        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.deleteY').addEventListener('click', () => {
                arrayItens = []
                arrayItensCopy = []
                arrayItensChecked = []
                arrayItensProblem = []
                arrayItensProblemBackup = []
                arrayItensExcluded = []
                arrayAllItensExcluded = []
                contFast = 0
                idFast = 0
                renderList()
                renderListChecked()
                renderListProblem()
                renderItensLength()
                localStorage.removeItem('securityBackup')
            })
    }
    
})

btnSave.addEventListener('click', () => {
    if(contFast < 1 && arrayItensChecked.length == 0) {
        alert('Não há itens à serem salvos')
    } else {

        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                        <div class="txtDelete">
                            <p>Qual nome vamos dar à sua lista para poder salvar nos favoritos? =D</p>
                            <div class="inputSaveList"><input type="text" name="txtSaveList" id="txtSaveList" maxlength="25" placeholder="Digite aqui..." autofocus autocomplete="off"></div>
                        </div>
                        
                        <div class="boxOptionsDelete">
                            <div class="SaveY"><span class="material-symbols-outlined">
                                    save_as
                                </span>
                            </div>
                            <div class="deleteN">voltar</div>
                        </div>
                </div>
            `
        listArea.appendChild(div)
        let nameListInput = document.querySelector('#txtSaveList')
        nameListInput.focus()
        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.SaveY').addEventListener('click', () => {
                let nameList = document.querySelector('#txtSaveList').value.trim()
                let verif = dataFavoriteItensFL.some(item => item.name.toLowerCase() === nameList.toLowerCase())

                if(verif) {
                    alert('Uma lista com esse nome já foi salva nos favoritos. Por favor digite outro nome!')
                } else {
                    const arraytoSave = arrayItensBackup.filter(item => !arrayItensExcluded.includes(item))
                
                    localStorage.setItem(nameList, JSON.stringify(arraytoSave))
                    div.remove()
                    const item = document.createElement('div')
                    item.classList = 'alertModal'
                    item.innerHTML = `
                    <div class="boxDelete">
                            <div class="txtDelete">
                                </br>
                                <p>Tudo ok, salvo com sucesso!✅<br/><strong>Deseja continuar editando sua lista, ou criar uma nova?</strong></p>
                            <div class="boxOptionsDelete">
                                <div class="newListF">Nova Lista+
                                </div>
                                <div class="continueF">Continuar</div>
                            </div>
                
                    `
                    listArea.appendChild(item)
                    document.querySelector('.newListF').addEventListener('click', () => {
                        item.remove()
                        localStorage.removeItem('securityBackup')
                        arrayItens = []
                        arrayItensCopy = []
                        arrayItensChecked = []
                        arrayItensProblem = []
                        arrayItensProblemBackup = []
                        arrayItensExcluded = []
                        arrayAllItensExcluded = []
                        contFast = 0
                        idFast = 0
                        renderList()
                        renderListChecked()
                        renderListProblem()
                        renderItensLength()
                        
                    })
                    document.querySelector('.continueF').addEventListener('click', () => {
                        item.remove()
                    })

                    let now = new Date
                    let day = (now.getDay() +1)
                    let month = (now.getMonth() + 1)
                    let year = now.getFullYear()

                    let dataListSave = {
                        name: nameList,
                        day: day,
                        month: month,
                        year: year,
                    }

                    dataFavoriteItensFL.push(dataListSave)

                    localStorage.setItem('savedDataF', JSON.stringify(dataFavoriteItensFL))
                    

                    renderFavoriteList()
                    const listSaved = JSON.parse(localStorage.getItem(nameList))
                    }
            })
    }
})

btnEndList.addEventListener('click', () => {
    
    if(contFast < 1 && arrayItensChecked.length == 0) {
        alert('A lista está vazia')
    } else {
        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>Oba... lista concluída 🤓??? Deseja fechar e finalizar a lista?<br/><strong>Lembre-se!!! Se quiser sua lista nos favoritos, salve-a antes de finalizar!</strong></p>
                    </div>
                    <div class="boxOptionsDelete">
                        <div class="endList">finalizar
                        </div>
                        <div class="deleteN">voltar</div>
                </div>
            `
        listArea.appendChild(div)

        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.endList').addEventListener('click', () => {
                arrayItens = []
                arrayItensCopy = []
                arrayItensChecked = []
                arrayItensProblem = []
                arrayItensProblemBackup = []
                arrayItensExcluded = []
                arrayAllItensExcluded = []
                contFast = 0
                idFast = 0
                renderList()
                renderListChecked()
                renderListProblem()
                renderItensLength()
                localStorage.removeItem('securityBackup')
                localStorage.removeItem('activeSession')
                homepage.style.display = 'flex'
                hInfos.style.display = 'none'
                fastListPage.style.display = 'none'
            })
    }



})


favorites.addEventListener('click', () => {

    boxListOptions.style.display = 'none'
    buttonAreaNewList.style.padding = '50px 50px 50px 50px'
    overlay.style.display = 'none'
    homepage.style.display = 'none'
    hInfos.style.display = 'flex'
    favoritesPage.style.display = 'flex'
    renderFavoriteList()
    localStorage.removeItem('securityBackup')

})

FavoriteArea.addEventListener('click', (e) => {
    if (e.target.closest('.btn-FavDelete')) return
    
    if (e.target.closest('.FavoriteboxListArea')) {
        const item = e.target.closest('.FavoritelistItem')
        const key = item.querySelector('.FavItemtxt').textContent.trim()
        arrayItens = JSON.parse(localStorage.getItem(key))
        arrayItensCopy = [...arrayItens]
        renderList()
        contFast = arrayItens.length
        renderItensLength()
       

        const div = document.createElement('div')
            div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                        <div class="txtDelete">
                            </br>
                            </br>
                            <p>Carregando lista... 📝</p>
                </div>
            `
            FavoriteArea.appendChild(div)
            
        setTimeout(() => {
            div.remove()
            favoritesPage.style.display = 'none'
            fastListPage.style.display = 'flex' 
        },1000)

    }
    
})

FavoriteArea.addEventListener('click', (e) => {
    if (e.target.closest('.btn-FavDelete')) {
        const item = e.target.closest('.FavoritelistItem')
        const text = item.querySelector('.FavItemtxt').textContent.trim()
        const index = dataFavoriteItensFL.findIndex(item => item.name === text)
        
        let day = dataFavoriteItensFL[index].day
        let month = dataFavoriteItensFL[index].month
        let year = dataFavoriteItensFL[index].year
        
        const div = document.createElement('div')
        div.classList = 'alertModal'
            div.innerHTML = `
                <div class="boxDelete">
                    <div class="txtDelete">
                        <p>⚠️ Tem certeza que deseja remover esta lista dos favoritos?<br>Depois de excluída, ela não poderá ser acessada novamente.</p>
                        <div class="itemtxt">${text}📝
                        <div class="saveInfo"><i>Salvo em ${day<10? '0'+day:day}/${month<10? '0'+month:month}/${year} </i></div>
                        </div>
                    </div>
                    
                    <div class="boxOptionsDelete">
                        <div class="deleteY"><span class="material-symbols-outlined">
                            delete
                            </span>
                        </div>
                        <div class="deleteN">voltar</div>
                </div>
            `
        FavoriteArea.appendChild(div)

        document.querySelector('.deleteN').addEventListener('click', () => {
                div.remove()
            })
        document.querySelector('.deleteY').addEventListener('click', () => {
                
                

                if(index !== -1) {
                    dataFavoriteItensFL.splice(index,1)
                    localStorage.removeItem(text)
                    localStorage.setItem('savedDataF', JSON.stringify(dataFavoriteItensFL))
                    FavoriteArea.innerHTML = ''
                    renderFavoriteList()
                } 
            })
    }

})


//functions
setTimeout(() => {
    document.querySelector('.loadingContainer').style.display = 'none'
    document.querySelector('.container').style.display = 'flex'
}, 2450)

function updateBackground () {
    const savedColor = localStorage.getItem('selectedColor')
    if(savedColor) {
        body.style.backgroundColor = savedColor
    }
}

updateBackground()
renderFavoriteList()


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

function updateNotifications() {
    if(notificationPointAboutTF() === false && notificationPointNotificationsTF() === false) {
        notificationPointMenu.style.display = 'none'
    }

    if(notificationPointAboutTF() === false) {
        notificationPointAbout.style.display = 'none'
    }
    if(notificationPointNotificationsTF() === false) {
        notificationPointNotifications.style.display = 'none'
    }
}


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
    itensLength.innerHTML = `Itens na lista ${contFast}` 
    if (contFast < 1 && arrayItensChecked.length == 0) {
        const div = document.createElement('div')
        div.classList = 'msgAlert'
        div.innerHTML = `<p><i>Sua lista está vazia. 🫠</i></p>`
        listArea.appendChild(div)
    }
}


function rebuild () {
   
}

function renderList () {
    addItens.value = ''
    //addItens.focus()
    const reversedArrayItens = [...arrayItens].reverse()
    if(sortListOn == false) {
            listArea.innerHTML = ''
            reversedArrayItens.forEach((itemvalue, i) => {
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
    const reversedArrayItensChecked = [...arrayItensChecked].reverse()
    reversedArrayItensChecked.forEach((itemvalue, i) => {
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

function renderListProblem() {
    const reversedArrayItensProblem = [...arrayItensProblem].reverse()
    reversedArrayItensProblem.forEach((itemValue, i) => {
        const item = document.createElement('div')
        item.className = 'boxListArea'
        item.id = `item${i}`
        item.draggable = 'true'
        item.innerHTML = `
            <div class="listItemProblem">
                                <div class="section" title="mover item">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                <span>⚠️</span>
                                <div class="itemtxt">${itemValue}</div>
                                <div class="lIa1"><div class="btn-checkedP" title="ok">✔</div></div>
                                <div class="lIa3"><div class="btn-reverseP" title="refazer">↺</div></div>
                                <div class="lIa3"><div class="btn-delete" title="deletar"><div class="midlebar"></div></div></div>
                            </div>
        `
        listArea.appendChild(item)
            
        })
}


function sortList () {
    
    if(sortListOn == false) {
       
        sortListOn = true
        btnOrder.style.backgroundColor = '#71f550c0'
        btnOrder.style.color = '#fff'
        btnOrder.innerHTML = 'A-Z↓<span class = "sBtn-order">ON</span>'
        listArea.innerHTML = ''
        renderList()
        renderListProblem()
        renderListChecked()
        renderItensLength()
        
    } else {

        sortListOn = false
        listArea.innerHTML = ''
        btnOrder.style.backgroundColor = '#ffffffc0'
        btnOrder.style.color = '#777777'
        btnOrder.innerHTML = 'A-Z↓'
        listArea.innerHTML = ''
        renderList()
        renderListProblem()
        renderListChecked()
        renderItensLength()
            
    }  
    
}

function renderFavoriteList () {
    FavoriteArea.innerHTML = ''
    const savedInfo = JSON.parse(localStorage.getItem('savedDataF'))

    if (savedInfo == null || savedInfo.length == 0 ) {
        const div = document.createElement('div')
        div.classList = 'msgAlert'
        div.innerHTML = `<p><i>Nenhuma lista foi adicionada aos favoritos ainda!!  =D </i></p>`
        FavoriteArea.appendChild(div)
    } else {
        

        arrayFavoriteItensFL=[]
        

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            arrayFavoriteItensFL.push(key)
        } 

        if(arrayFavoriteItensFL.includes('selectedColor')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('selectedColor'),1)
        }
        
        if(arrayFavoriteItensFL.includes('savedDataF')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('savedDataF'),1)
        }

        if(arrayFavoriteItensFL.includes('securityBackup')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('securityBackup'),1)
        }

        if(arrayFavoriteItensFL.includes('activeSession')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('activeSession'),1)
        }
        
        if(arrayFavoriteItensFL.includes('notificationPointAboutTF')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('notificationPointAboutTF'),1)
        }
        
        if(arrayFavoriteItensFL.includes('notificationPointNotificationsTF')) {
            arrayFavoriteItensFL.splice(arrayFavoriteItensFL.indexOf('notificationPointNotificationsTF'),1)
        }

        arrayFavoriteItensFL.forEach((item, i) => {
            let day = savedInfo[i].day
            let month = savedInfo[i].month
            let year = savedInfo[i].year
            const div = document.createElement('div')
                div.classList = 'FavoriteboxListArea'
                div.innerHTML = `
                            <div class="FavoritelistItem">
                                <div class="FavItemContent">
                                    <div class="boxFavtxt">
                                        <div class="FavItemtxt">${item}</div>
                                        <div class="fastListIconSave"><span id="fastListIconSave"class="material-symbols-outlined">
                                            add_task
                                        </span></div>
                                    </div>
                                    <div class="saveInfo"><i>Salvo em ${day<10? '0'+day:day}/${month<10? '0'+month:month}/${year} </i></div>
                                </div>
                                <!--<div class="lIc1"><div class="btn-FavSelected" title="selecionar">✔</div></div>-->
                                <div class="lIc2"><div class="btn-FavDelete" title="remover"><span id="btn-FavDelete"class="material-symbols-outlined">
                                    delete
                                    </span></div></div>
                            </div>  
                `
        FavoriteArea.appendChild(div)
        })
        
    }
    
}

function automaticSave() {
    const listBackup = [
        ...arrayItens.map(item=> ({origin: 'arrayItens', value: item})),
        ...arrayItensBackup.map(item=> ({origin: 'arrayItensBackup', value: item})) ,
        ...arrayItensCopy.map(item=> ({origin: 'arrayItensCopy', value: item})) ,
        ...arrayItensChecked.map(item=> ({origin: 'arrayItensChecked', value: item})) ,
        ...arrayItensProblem.map(item=> ({origin: 'arrayItensProblem', value: item})) ,
        ...arrayItensProblemBackup.map(item=> ({origin: 'arrayItensProblemBackup', value: item})),
        ...arrayItensExcluded.map(item=> ({origin: 'arrayItensExcluded', value: item})) ,
        ...arrayAllItensExcluded.map(item=> ({origin: 'arrayAllItensExcluded', value: item}))
    ]


    localStorage.setItem('securityBackup', JSON.stringify(listBackup))
}



async function backupCheck() {
    const securityBackup = JSON.parse(localStorage.getItem('securityBackup'));


    if (securityBackup === null) {

    } else if (securityBackup.length != 0) {
        const item = document.createElement('div');
        item.classList = 'alertModal';
        item.innerHTML = `
            <div class="boxDelete">
                <div class="txtDelete">
                    <br/>
                    <p>⚠️Encontramos no sistema um backup de segurança<br/><strong>Deseja continuar de onde parou, ou criar uma nova lista?</strong></p>
                </div>
                <div class="boxOptionsDelete">
                    <div class="newListF">Nova Lista+</div>
                    <div class="continueF">Continuar</div>
                </div>
            </div>
        `;
        homepage.appendChild(item);

        document.querySelector('.newListF').addEventListener('click', () => {
            item.remove();
            localStorage.removeItem('securityBackup')
            arrayItens = []
            arrayItensCopy = []
            arrayItensChecked = []
            arrayItensProblem = []
            arrayItensProblemBackup = []
            arrayItensExcluded = []
            arrayAllItensExcluded = []
            contFast = 0
            idFast = 0
        });

        document.querySelector('.continueF').addEventListener('click', () => {
            item.remove();
            arrayItens = []
            arrayItensCopy = []
            arrayItensChecked = []
            arrayItensProblem = []
            arrayItensProblemBackup = []
            arrayItensExcluded = []
            arrayAllItensExcluded = []
            contFast = 0
            idFast = 0
            securityBackup.forEach(item => {
                
                if(item.origin === 'arrayItens') arrayItens.push(item.value);
                else if (item.origin === 'arrayItensBackup') arrayItensBackup.push(item.value);
                else if (item.origin === 'arrayItensCopy') arrayItensCopy.push(item.value);
                else if (item.origin === 'arrayItensChecked') arrayItensChecked.push(item.value);
                else if (item.origin === 'arrayItensProblem') arrayItensProblem.push(item.value);
                else if (item.origin === 'arrayItensProblemBackup') arrayItensProblemBackup.push(item.value);
                else if (item.origin === 'arrayItensExcluded') arrayItensExcluded.push(item.value);
                else if (item.origin === 'arrayAllItensExcluded') arrayAllItensExcluded.push(item.value);
        
            });
            contFast = arrayItens.length + arrayItensProblem.length;
            renderItensLength();
            renderList();
            renderListProblem();
            renderListChecked();
           

            boxListOptions.style.display = 'none'
            buttonAreaNewList.style.padding = '50px 50px 50px 50px'
            overlay.style.display = 'none'
            homepage.style.display = 'none'
            hInfos.style.display = 'flex'
            fastListPage.style.display = 'flex'
            setTimeout(()=> {addItens.focus()}, 50)
        });
    };
}