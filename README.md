# AllPet

## Como adicionar em projeto frontend ?

- Instalando biblioteca frontend:

```bash
$ npm i axios 
// Ou
$ yarn add axios
```

- Creie um arquivo chamado server e adicionar o código:

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://allpet-backend.herokuapp.com/'
});

export default api;
```

- Criar usuário: 


```ts
import app from '../../server/api';

//

async function handleCreate() {
  // Variavéis de exemplo, você deve usar suas variáveis que armazenam dados de nome, email, telefone e senha
  let nameUser = 'teste'
  let emailUser = 'teste'
  let cellphooneUser = 'teste'
  let passwordUser = 'teste'
  //
  
  // Aqui ele cria o response
  
  try {
      const response = await api.post('/users', {
        name: nameUser,
        email: emailUser,
        cellphone: cellphoneUser,
        password: passwordUser
      });
  } catch {
    // Aqui você retorna ao usuário que não foi possivel cadastrar
  }
  
}
```

- Fazendo Login:

```ts

async function handleLogin() {
  // Variavéis de exemplo, você deve usar suas variáveis que armazenam dados de nome, email, telefone e senha
  let emailUser = 'teste'
  let cellphooneUser = 'teste'
  let passwordUser = 'teste'
  //
  
  // Aqui ele cria o response
  
  try {
      const response = await api.post('/session', {
        name: nameUser,
        password: passwordUser
      });
      
      // Aqui adicionar o token
      api.defauls.headers.authorization = `Bearer ${response.data.token}`
  } catch {
    // Aqui você retorna ao usuário que não foi possivel logar
  }
}

//

```

- Criando Pet:

```ts

async function handleLogin() {
  // Variavéis de exemplo, você deve usar suas variáveis que armazenam dados de nome, email, telefone e senha
  let namePet = 'teste'
  let cellphonePet = 'teste'
  let descriptionPet = 'teste'
  //
  
  // Aqui ele cria o response
  
  try {
      const response = await api.post('/pets', {
        name: namePet,
        cellphone: cellphonePet,
        description: deacriptionPet
      });
      
  } catch {
    // Aqui você retorna ao usuário que não foi possivel cadastrar pet
  }
}

//

```

- Listando Pets:

```ts

async function handleLogin() {
  // Variavéis de exemplo, você deve usar suas variáveis que armazenam uma array de Pets;
  let listPets = [];
  //
  
  // Aqui ele cria o response
  try {
      const response = await api.get('/pets');
      
      listPets = response.data
   
  } catch {
    // Aqui você retorna ao usuário que não foi possivel
  }
}

//

```
