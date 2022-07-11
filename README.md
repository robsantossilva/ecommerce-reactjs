[](https://www.youtube.com/watch?v=SinonmkxRSI)

[](https://www.youtube.com/watch?v=6vu5SkEMG-w)

### SaaS = Software as a Service
- Cliente para pelo uso, não pelo software
- Ambiente e recursos podem ser compartilhados
- Uso da internet e cloud servers
- Exemplos... Netflix, Spotify, Paypal, Heroku, COnta Azul, etc...

### O que é multi-tenancy
- Tenancy-locação - Em TI=inquilino
- Vários clientes usam a mesma aplicação
- Aplicação-produto
- Compartilhamento de banco de dados, storage, servidores
- Definição do isolamento lógico das informações
- Evitar que falhas em um cliente afete outros

### Modelos de multi-tenancy
![](/.github/single-and-multi-tenant.png)

### Qual modelo usar?
- Não há verdades do universo
- Entender o contexto que será aplicado
- Quais personalizações serão aplicadas para os tenants?
- Riscos de segurança
- Número de usuários

### Vantagens

**Totalmente isolado: Servidor, hardware, banco de dados**
- Alto nivel de segurança
- Alto consumo de hardware
- Monitoramento individual
- Alto nivel de escalonamento

**Servidor compartilhado: Um banco de dados por tenant**
- Personalização por tenant
- Consistencia e segurança dos dados
- Escalonamento dos recursos
- Isolamento de falhas

**Tudo compartilhado: Servidor, Hardware, Banco de dados**
- Muitos tenants envolvidos
- Baixo escalonamento
- Fácil deploy da aplicação
- Menor custo

Considere usar **Docker e Kubernetes** para modelo compartilhado de recursos
