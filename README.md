# GigaMoz Agency - Website Completo

Sistema completo de website com painel administrativo e analytics integrado.

## 📁 Estrutura de Arquivos

```
gigamoz-agency/
├── index.html          # Página principal
├── admin.html          # Painel administrativo
├── style.css           # Estilos CSS
├── analytics.js        # Sistema de rastreamento
├── track.php           # Tracking servidor (opcional)
├── logo.png            # Logo da empresa (adicionar)
└── README.md           # Este arquivo
```

## 🚀 Instalação

### 1. Upload dos Arquivos

Faça upload de todos os arquivos para seu servidor web:
- `index.html`
- `admin.html`
- `style.css`
- `analytics.js`
- `track.php` (opcional)
- `logo.png` (seu logo)

### 2. Configuração do Logo

Adicione sua logo como `logo.png` na raiz do projeto. Se não tiver logo, o sistema mostrará automaticamente as iniciais "GM".

### 3. Acesso ao Painel Admin

**URL:** `https://seusite.com/admin.html`

**Credenciais:**
- Email: `edsontondondo8@gmail.com`
- Senha: `gigamoz2004`

⚠️ **IMPORTANTE:** Altere estas credenciais no arquivo `admin.html` após a primeira instalação para maior segurança.

## 🎯 Funcionalidades

### Site Principal (index.html)
- ✅ Hero section com animações suaves
- ✅ 9 serviços detalhados
- ✅ Seção sobre a empresa
- ✅ Portfólio de projetos
- ✅ Depoimentos de clientes
- ✅ Formulário de contato integrado com WhatsApp
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Background preto fixo sem animações pesadas
- ✅ Tracking automático de visitantes

### Painel Administrativo (admin.html)
- ✅ Login seguro
- ✅ Dashboard com estatísticas em tempo real
- ✅ Total de visitantes
- ✅ Tempo médio no site
- ✅ Total de pedidos de serviços
- ✅ Visitantes do dia
- ✅ Listagem de visitantes recentes com detalhes
- ✅ Histórico de pedidos de serviços
- ✅ Rastreamento de tempo de permanência
- ✅ Informações de dispositivo e navegador
- ✅ Opções para limpar dados

### Sistema de Analytics (analytics.js)
- ✅ Rastreamento automático de visitantes
- ✅ Cálculo de tempo de permanência
- ✅ Detecção de dispositivo (Desktop/Mobile/Tablet)
- ✅ Detecção de navegador
- ✅ Tracking de pedidos de serviços
- ✅ Armazenamento em localStorage
- ✅ Atualização em tempo real

## 📊 Como Funciona o Tracking

### Dados Coletados Automaticamente:
1. **Visitantes:**
   - ID único do visitante
   - Data e hora da visita
   - Tempo de permanência no site
   - Número de páginas visitadas
   - Tipo de dispositivo
   - Navegador utilizado

2. **Pedidos de Serviços:**
   - Serviço solicitado
   - Data e hora do pedido
   - Página de origem

### Visualização no Admin:
- Acesse `admin.html`
- Faça login
- Visualize todas as estatísticas em tempo real
- Veja visitantes recentes com todos os detalhes
- Confira pedidos de serviços realizados

## 🔒 Segurança

### Alterando as Credenciais de Admin:

1. Abra o arquivo `admin.html`
2. Localize as linhas:
```javascript
```
3. Altere para suas credenciais
4. Salve o arquivo

### Proteção Adicional (Recomendado):
- Use HTTPS no seu site
- Configure .htaccess para proteger admin.html
- Implemente autenticação de 2 fatores se possível

## 🎨 Personalização

### Cores e Estilos:
Edite as variáveis CSS no topo do `style.css`:
```css
:root {
    --primary-dark: #0a0a0a;
    --accent-blue: #3b82f6;
    --light-blue: #60a5fa;
    /* ... */
}
```

### Conteúdo:
- Edite textos diretamente no `index.html`
- Atualize links de WhatsApp e email
- Modifique estatísticas na seção "Sobre"

### Serviços:
- Adicione ou remova serviços no `index.html`
- Cada serviço tem estrutura padronizada
- Mantenha o tracking `onclick="trackRequest('Nome do Serviço')"`

## 📱 Contatos Configurados

- **WhatsApp:** +258 84 720 6883
- **Email:** gigamozagency@gmail.com
- **Facebook:** [Perfil Configurado]
- **Admin:** edsontondondo8@gmail.com

## 🌐 Compatibilidade

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers

## 💾 Backup de Dados

Os dados de analytics são armazenados no **localStorage** do navegador.

### Para fazer backup:
1. Acesse o painel admin
2. Abra o console do navegador (F12)
3. Execute:
```javascript
console.log(localStorage.getItem('visitors'));
console.log(localStorage.getItem('serviceRequests'));
```
4. Copie e salve os dados

### Para restaurar:
```javascript
localStorage.setItem('visitors', 'SEU_BACKUP_AQUI');
localStorage.setItem('serviceRequests', 'SEU_BACKUP_AQUI');
```

## 🔧 Solução de Problemas

### O tracking não está funcionando:
- Verifique se `analytics.js` está carregado
- Confira o console do navegador por erros
- Certifique-se que JavaScript está habilitado

### Não consigo fazer login no admin:
- Verifique se digitou as credenciais corretamente
- Limpe o cache do navegador
- Tente em modo anônimo

### As estatísticas não aparecem:
- Visite a página principal primeiro
- Aguarde alguns segundos
- Recarregue o painel admin

## 📈 Melhorias Futuras Sugeridas

1. Integração com banco de dados MySQL
2. Sistema de notificações por email
3. Exportação de relatórios em PDF
4. Gráficos de análise avançados
5. Sistema de backup automático

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: gigamozagency@gmail.com
- WhatsApp: +258 84 720 6883

---

**GigaMoz Agency** - Transformando Visões em Resultados Digitais
© 2023 Todos os direitos reservados.
