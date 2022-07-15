async function listUsers() {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    return fetch("user/", requestOptions)
    .then((response) => {
        if(response.status == 200) { 
            return response.json()
        } else {
            console.log(response)
        }
    })
    .catch(error => console.log('error', error));
}

async function createList () {
    const users = await listUsers();
    for(const user of users) {
        createCard(user)
    }

}

async function CreateUser(dados) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dados),
    redirect: "follow",
    };

    const request = await fetch("user/", requestOptions)
    return request
}

async function SubmeterDados(event) {
    event.preventDefault()
    const params = new URLSearchParams(window.location.search)
    let userId = null 
    if(params.has('id')) userId = params.get('id')

    const dados = {
        nome: document.forms['form-controll']['nome'].value,
        sobrenome: document.forms['form-controll']['sobrenome'].value,
        idade: Number(document.forms['form-controll']['idade'].value),
        telefone: Number(document.forms['form-controll']['telefone'].value),
        cep: Number(document.forms['form-controll']['cep'].value),
        endereco: document.forms['form-controll']['endereco'].value,
        numero: document.forms['form-controll']['numero'].value,
        cidade: document.forms['form-controll']['cidade'].value,
        cpf: Number(document.forms['form-controll']['cpf'].value),
        uf: document.forms['form-controll']['uf'].value,
    }

    if(userId){
        await updateUser(dados, userId).then(async res => {
            if (res.status !== 200 ) {
                const resultado = await res.json()
                console.log(resultado)
                return
            }
            console.log('Sucesso')
            console.log(res)
            document.location.href=`static/index.html`
            }).catch ( error => {
            console.error(error);
            })
    }
    
    else {

    await CreateUser(dados).then(async res => {
        if (res.status !== 201 ) {
            const resultado = await res.json()
            console.log(resultado)
            return
        }
        console.log('Sucesso')
        console.log(res)
        document.location.reload(true)
        }).catch ( error => {
        console.error(error);
        })
    }
}

function createCard(user) {
    const div = document.createElement('div')
    div.setAttribute('class', 'portfolio-container')

    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'portfolio-card')
    div.appendChild(divCard)
    const divIcone = document.createElement('div')

    divIcone.setAttribute('class', 'img-container')
    divCard.appendChild(divIcone)
    
    const divLine = document.createElement('div')
    divLine.setAttribute('class', 'line green')
    divIcone.appendChild(divLine)

    const elementImg = document.createElement('img')
    elementImg.setAttribute('src', 'images/paimon.jpg')
    elementImg.setAttribute('alt', 'imagem paimon genshin impact')
    divIcone.appendChild(elementImg)

    const infoUser = document.createElement('div')
    infoUser.setAttribute('class', 'language-container')
    divCard.appendChild(infoUser)

    const listUl = document.createElement('ul')
    infoUser.appendChild(listUl)

    const attributes = ['telefone', 'cidade']
    attributes.forEach(item=>{
        const listLi = document.createElement('li')
        const attr = document.createTextNode(user[item])
        listLi.appendChild(attr)
        listUl.appendChild(listLi)
    })

    const btnEdit = document.createElement('button')
    btnEdit.setAttribute('class', 'cadastro-edit cadastro-edit-txt cadastro-edit-button__position')
    div.appendChild(btnEdit)
    const txtEdit = document.createTextNode('Editar')
    btnEdit.appendChild(txtEdit)
    btnEdit.addEventListener('click', function(){document.location.href=`index.html?id=${user._id}`} )

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'cadastro-delete cadastro-delete-txt cadastro-delete-button__position')
    div.appendChild(btnDelete)
    const txtDelete = document.createTextNode('Delete')
    btnDelete.appendChild(txtDelete)
    btnDelete.addEventListener('click', async () => {await DeleteUser(user);document.location.reload()})

    const btnVisualizar = document.createElement('button')
    btnVisualizar.setAttribute('class', 'cadastro-visualizar cadastro-visualizar-txt cadastro-visualizar-button__position')
    div.appendChild(btnVisualizar)
    const txtVisualizar = document.createTextNode('Visualizar')
    btnVisualizar.appendChild(txtVisualizar)
    btnVisualizar.addEventListener('click', function(){document.location.href=`userCard.html?id=${user._id}`} )

    const cardTitleDescription = document.createElement('p')
    cardTitleDescription.innerHTML = user.nome

    const cardDescription = document.createElement('p')

    divCard.appendChild(cardTitleDescription)
    divCard.appendChild(cardDescription)

    const handler = document.getElementById('teste')
    handler.appendChild(div)
}

async function updateUser(user, id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(user),
    redirect: 'follow'
    };

    const request = await fetch(`user/${id}`, requestOptions)
    return request 
}

async function DeleteUser(user) {

    var requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    const request = await fetch(`user/${user._id}`, requestOptions);
    return request;
}

async function getUser(id) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const request = await fetch(`user/${id}`, requestOptions);
    return request;
}

async function carregarDados(user) {

    document.forms['form-controll']['nome'].value = user.nome
    document.forms['form-controll']['sobrenome'].value = user.sobrenome
    document.forms['form-controll']['idade'].value = user.idade
    document.forms['form-controll']['telefone'].value = user.telefone
    document.forms['form-controll']['cep'].value = user.cep
    document.forms['form-controll']['endereco'].value = user.endereco
    document.forms['form-controll']['numero'].value = user.numero
    document.forms['form-controll']['cidade'].value = user.cidade
    document.forms['form-controll']['cpf'].value = user.cpf
    document.forms['form-controll']['uf'].value = user.uf
}


async function preencherDados(user){

    document.getElementById('nome').innerHTML = user.nome
    document.getElementById('sobrenome').innerHTML = user.sobrenome
    const emote = document.createElement('i')
    emote.setAttribute('data-feather', "map-pin")
    const textCidade = document.createTextNode(user.cidade)
    const cidade = document.getElementById('cidade')
    cidade.appendChild(emote)
    cidade.appendChild(textCidade)
    document.getElementById('idade').innerHTML = user.idade
    document.getElementById('cep').innerHTML = user.cep
    document.getElementById('telefone').innerHTML = user.telefone
    document.getElementById('endereco').innerHTML = user.endereco
    document.getElementById('cpf').innerHTML = user.cpf
    document.getElementById('numero').innerHTML = user.numero
    document.getElementById('uf').innerHTML = user.uf
}