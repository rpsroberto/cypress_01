# 🧪 Testes de API com Cypress – Adopet

Este projeto contém testes automatizados utilizando **Cypress** para validar as rotas da API Adopet.

---

## 🚀 Tecnologias Utilizadas
- **Cypress** (Framework de testes)
- **Node.js**
- **Mocha** (estrutura de testes do Cypress)
- **Chai** (asserções)

---

## 📁 Estrutura do Projeto

```
project/
│
├── cypress/
│   ├── e2e/
│   │   └── api-adopet.cy.js
        └── cadastro-correto.cy.js
        └── cadastro-incorreto.cy.js
        └── cadastro-massaa.cy.js
        └── login-correto.cy.js
        └── login-incorreto.cy.js   
|   └── fixtures/
|       └── example.json
|       └── usuarios.json
│   └── support/
|       └── commands.js
|       └── e2e.js
|   └── videos/
|      
│
├── cypress.config.js
└── package.json
```

---

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/rpsroberto/curso_cypress
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o Cypress:
```bash
npx cypress open
```


---

## ⚠️ Erros comuns

### 🔐 **401 Unauthorized**
Se a API retornar:

```
JWT inválido
```

Verifique:
- se o token JWT não expirou.
- se o token foi copiado corretamente.
- se está usando `Bearer` antes do token.
- se o ID da mensagem existe.

---

## 📝 Notas

- Tokens JWT expiram, então sempre gere um novo quando necessário.
- Caso queira testar falhas, use:
```javascript
failOnStatusCode: false
```

---

## 📄 Licença
Projeto criado apenas para fins educacionais e de estudo sobre testes automatizados com Cypress.

