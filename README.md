# CypressAvenueAPI

## Inicio

### 1 - Será necessario instalar o Node JS (Preferencia LTS 18.14)
```sh
https://nodejs.org/en/
```

### 2 - Na raiz do projeto instale o Cypress e Faker 
```sh
npm install --save-dev @faker-js/faker && cypress@12.0.2 cypress-plugin-api@2.6.1 -D
```
### 3 - Logo Após
```sh 
npx cypress open 
```

### Para execução Local do teste de API
- Crie uma conta no https://openweathermap.org/current
- Logo após pegue a sua 'APIKEY'
- Por Fim, crie um file "cypress.env.json" e cole na estrutura seguinte:
```sh
{
    "API_Key": "<SuaAPIKEY>"
}
```
### Pronto só executar!
