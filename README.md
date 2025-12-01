# 📋 GigaMoz Agency - Site Oficial

Este é o site oficial da **GigaMoz Agency**, uma agência digital especializada em transformar visões em resultados digitais extraordinários. O site foi desenvolvido com foco em design moderno, responsividade e uma experiência de usuário premium.

## 🚀 Características Principais

### 🎨 Design & Interface
- **Paleta de Cores**: Azul escuro (#0a192f) e Preto com gradientes elegantes
- **Tipografia**: Combinação de Poppins (corpo) e Montserrat (títulos)
- **Layout**: Totalmente responsivo para todos os dispositivos
- **Animações**: Efeitos especiais suaves e profissionais

### ✨ Efeitos Especiais
- **Partículas Interativas**: Fundo dinâmico com particles.js
- **Animações CSS**: Fade-in, float, pulse, shine effects
- **Elementos Flutuantes**: Ícones animados na hero section
- **Contadores Animados**: Estatísticas que contam automaticamente
- **Hover Effects**: Interações sofisticadas em todos os elementos

### 📱 Seções do Site
1. **Hero Section** - Apresentação impactante com call-to-action
2. **Serviços** - 9 serviços especializados com descrições detalhadas
3. **Sobre** - Equipe especializada e estatísticas da agência
4. **Portfólio** - Projetos em desenvolvimento (com badges visuais)
5. **Depoimentos** - Feedback de clientes reais com avaliações
6. **Contato** - Múltiplas formas de entrar em contato

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados com variáveis CSS
- **JavaScript** - Interatividade e animações
- **Particles.js** - Efeitos de partículas no background

### Bibliotecas & Fontes
- **Font Awesome** - Ícones modernos
- **Google Fonts** - Tipografia personalizada
- **Unsplash** - Imagens de alta qualidade (placeholder)

## 📦 Instalação e Uso

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/gigamoz-agency.git
cd gigamoz-agency
```

### 2. Estrutura de Arquivos
```
gigamoz-agency/
│
├── index.html          # Arquivo principal HTML
├── style.css           # Arquivo de estilos CSS
├── logo.png            # Logo da agência (a ser adicionado)
│
└── README.md           # Este arquivo
```

### 3. Personalização
Para personalizar o site, edite os seguintes elementos:

#### A. Logo
- Substitua `logo.png` na raiz do projeto
- Dimensões recomendadas: 50x50px (PNG transparente)

#### B. Informações de Contato
No arquivo `index.html`, atualize:
```html
<!-- WhatsApp -->
<a href="https://wa.me/258847206883">...</a>

<!-- Email -->
<a href="mailto:gigamozagency@gmail.com">...</a>

<!-- Facebook -->
<a href="https://www.facebook.com/profile.php?id=61584146266908">...</a>
```

#### C. Links do Portfólio
Quando os projetos estiverem prontos, atualize:
```javascript
// No final do arquivo index.html
document.getElementById('portfolio-link-1').href = "URL_DO_PROJETO_1";
document.getElementById('portfolio-link-2').href = "URL_DO_PROJETO_2";
document.getElementById('portfolio-link-3').href = "URL_DO_PROJETO_3";
```

## 🎯 Serviços Oferecidos

A GigaMoz Agency oferece 9 serviços especializados:

1. **🎨 Criar Imagens para Clientes** (IA/Design Manual)
2. **📄 Criação de Currículos Profissionais**
3. **🌐 Criação de Sites Modernos**
4. **📚 Fazer Resumos Académicos**
5. **🖥️ Criação de Logos Profissionais**
6. **🤖 Assistente Virtual** (Tarefas Digitais)
7. **🛠️ Suporte Técnico Remoto**
8. **🛒 Revenda de Produtos** (Marketplace)
9. **🤖🌐 Criação de Sites com Inteligência Artificial**

## 📞 Informações de Contato

### 📱 Contato Direto
- **WhatsApp**: [+258 84 720 6883](https://wa.me/258847206883)
- **Email**: [gigamozagency@gmail.com](mailto:gigamozagency@gmail.com)
- **Facebook**: [GigaMoz Agency](https://www.facebook.com/profile.php?id=61584146266908)

### 👤 Responsável
- **Nome**: Edson Bernardo Tondondo
- **Localização**: Moçambique

## 🚀 Funcionalidades Técnicas

### Performance
- ✅ Otimizado para carregamento rápido
- ✅ Imagens comprimidas e otimizadas
- ✅ Animações CSS puro (sem jQuery)
- ✅ Código minificado e eficiente

### SEO & Acessibilidade
- ✅ Meta tags otimizadas
- ✅ HTML semântico
- ✅ Alt text em todas as imagens
- ✅ Navegação por teclado

### Compatibilidade
- ✅ Todos os navegadores modernos
- ✅ Dispositivos móveis (responsive)
- ✅ Tablets e desktops
- ✅ Diferentes resoluções de tela

## 🔧 Configurações Avançadas

### Personalização de Cores
As cores podem ser alteradas editando as variáveis CSS no início do `style.css`:
```css
:root {
    --primary-dark: #0a192f;
    --primary-blue: #1e3a8a;
    --accent-blue: #3b82f6;
    --light-blue: #60a5fa;
    /* ... outras cores */
}
```

### Configuração das Partículas
Para modificar o efeito de partículas, edite a configuração no `index.html`:
```javascript
particlesJS("particles-js", {
    particles: {
        number: { value: 80 }, // Quantidade de partículas
        color: { value: "#3b82f6" }, // Cor das partículas
        // ... outras configurações
    }
});
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints específicos:

| Dispositivo | Largura | Características |
|------------|---------|-----------------|
| Mobile | ≤ 576px | 1 coluna, menu hambúrguer |
| Tablet | 577px - 768px | 2 colunas, layout adaptado |
| Desktop | ≥ 769px | Layout completo, 3 colunas |

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Logo não aparece**
   - Verifique se o arquivo `logo.png` está na raiz
   - Confirme o caminho no atributo `src`

2. **Partículas não carregam**
   - Verifique conexão com internet
   - Confirme se o particles.js está carregando

3. **Links do WhatsApp não funcionam**
   - Verifique o número no formato internacional
   - Teste em dispositivo com WhatsApp instalado

### Debugging
Para depuração, abra o console do navegador (F12) e verifique:
- Erros no console
- Recursos não carregados
- Problemas de CORS

## 📄 Licença

© 2023 GigaMoz Agency. Todos os direitos reservados.

Este projeto é para uso da GigaMoz Agency. A redistribuição ou uso comercial sem autorização não é permitida.

## 🤝 Contribuições

Este é um projeto proprietário. Para sugestões ou relatórios de bugs, entre em contato através dos canais oficiais.

## 📈 Status do Projeto

✅ **Completo** - Site finalizado e pronto para produção  
✅ **Responsivo** - Testado em múltiplos dispositivos  
✅ **Otimizado** - Performance e SEO otimizados  
✅ **Documentado** - Código limpo e bem comentado  

## 🌟 Recursos Adicionais

### Para Desenvolvedores
- Código bem estruturado e comentado
- Classes CSS organizadas por seção
- JavaScript modular e eficiente
- Facilmente extensível

### Para Clientes
- Interface intuitiva e amigável
- Navegação simplificada
- Informações claras e acessíveis
- Múltiplos pontos de contato

---

**📞 Precisa de ajuda?** Entre em contato:
- WhatsApp: +258 84 720 6883
- Email: gigamozagency@gmail.com
- Facebook: GigaMoz Agency

---

Desenvolvido com ❤️ pela **GigaMoz Agency** - Transformando visões em resultados digitais extraordinários!
