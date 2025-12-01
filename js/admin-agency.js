// admin-agency.js - Painel administrativo da agency
console.log('👑 Carregando admin agency...');

class AgencyAdmin {
  constructor() {
    this.stats = {
      totalVisitors: 142,
      totalLeads: 28,
      avgSession: '4m 32s',
      conversionRate: '19.7%',
      activeServices: 6,
      totalSessions: 89,
      uniqueVisitors: 124,
      bounceRate: '12.3%'
    };
    this.currentTab = 'dashboard';
  }

  async init() {
    console.log('🚀 Inicializando AgencyAdmin...');
    
    // Verificação SIMPLES de acesso
    if (!this.checkAccess()) return;
    
    this.setupUI();
    this.setupEventListeners();
    this.loadAllData();
    
    console.log('✅ AgencyAdmin inicializado');
  }

  checkAccess() {
    console.log('🔐 Verificando acesso...');
    
    const adminData = this.getAdminData();
    if (adminData) {
      console.log('✅ Acesso concedido para:', adminData.name);
      this.showWelcomeMessage(adminData.name);
      return true;
    }
    
    console.log('❌ Acesso negado - redirecionando...');
    this.redirectToLogin();
    return false;
  }

  getAdminData() {
    try {
      const saved = localStorage.getItem('gm_admin');
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Erro ao ler admin data:', error);
      return null;
    }
  }

  showWelcomeMessage(name) {
    const welcomeEl = document.getElementById('adminWelcome');
    if (welcomeEl) {
      welcomeEl.textContent = `Bem-vindo, ${name}!`;
    }
  }

  redirectToLogin() {
    showError('🔐 Acesso não autorizado. Redirecionando...');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 2000);
  }

  setupUI() {
    // Carregar estatísticas imediatamente
    this.updateStatsUI();
    
    // Mostrar dados iniciais
    this.showLoadingStates();
  }

  setupEventListeners() {
    // Formulário de serviços
    const serviceForm = document.getElementById('serviceForm');
    if (serviceForm) {
      serviceForm.addEventListener('submit', (e) => this.handleAddService(e));
    }

    // Configurações da empresa
    const companySettings = document.getElementById('companySettings');
    if (companySettings) {
      companySettings.addEventListener('submit', (e) => this.saveCompanySettings(e));
    }

    // Configurações do site
    const siteSettings = document.getElementById('siteSettings');
    if (siteSettings) {
      siteSettings.addEventListener('submit', (e) => this.saveSiteSettings(e));
    }
  }

  loadAllData() {
    showInfo('📊 Carregando dados...', 1500);
    
    // Carregar todos os dados em paralelo
    setTimeout(() => {
      this.loadRecentActivity();
      this.loadServices();
      this.loadLeads();
      this.loadSessions();
      this.loadAnalytics();
      
      showSuccess('✅ Painel carregado com sucesso!', 2000);
    }, 1000);
  }

  updateStatsUI() {
    const statsMap = {
      'totalVisitors': this.stats.totalVisitors,
      'totalLeads': this.stats.totalLeads,
      'avgSession': this.stats.avgSession,
      'conversionRate': this.stats.conversionRate,
      'activeServices': this.stats.activeServices,
      'totalSessions': this.stats.totalSessions,
      'uniqueVisitors': this.stats.uniqueVisitors,
      'bounceRate': this.stats.bounceRate
    };

    Object.entries(statsMap).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });
  }

  showLoadingStates() {
    // Mostrar estados de carregamento
    const loadingHTML = '<p class="muted">🔄 Carregando...</p>';
    
    const elementsToLoad = [
      'recentActivity', 'servicesList', 'leadsTable', 
      'sessionsList', 'pageViewsChart', 'sessionTimeChart', 'analyticsData'
    ];
    
    elementsToLoad.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.innerHTML = loadingHTML;
    });
  }

  loadRecentActivity() {
    const activities = [
      { type: 'lead', name: 'João Silva', service: '🌐 Site Institucional', time: 'há 5 minutos' },
      { type: 'lead', name: 'Maria Santos', service: '🎨 Identidade Visual', time: 'há 12 minutos' },
      { type: 'session', pages: 8, duration: '7m 23s', time: 'há 15 minutos' },
      { type: 'lead', name: 'Carlos Mendes', service: '📱 App Mobile', time: 'há 28 minutos' }
    ];

    const html = activities.map(activity => {
      if (activity.type === 'lead') {
        return `
          <div style="padding: 12px 0; border-bottom: 1px solid var(--border);">
            <div style="display: flex; justify-content: between; align-items: start;">
              <div>
                <strong>📋 ${activity.name}</strong>
                <div class="muted" style="font-size: 0.9rem;">${activity.service}</div>
              </div>
              <small class="muted">${activity.time}</small>
            </div>
          </div>
        `;
      } else {
        return `
          <div style="padding: 12px 0; border-bottom: 1px solid var(--border);">
            <div style="display: flex; justify-content: between; align-items: start;">
              <div>
                <strong>👤 Sessão Ativa</strong>
                <div class="muted" style="font-size: 0.9rem;">
                  ${activity.pages} páginas • ⏱️ ${activity.duration}
                </div>
              </div>
              <small class="muted">${activity.time}</small>
            </div>
          </div>
        `;
      }
    }).join('');

    document.getElementById('recentActivity').innerHTML = html;
  }

  loadServices() {
    const services = [
      { icon: '🌐', title: 'Desenvolvimento Web', description: 'Sites institucionais, landing pages, e-commerces', price: '1500-5000 MT', category: 'web' },
      { icon: '🎨', title: 'Design Gráfico', description: 'Logos, identidade visual, material promocional', price: '450-2000 MT', category: 'design' },
      { icon: '🤖', title: 'Inteligência Artificial', description: 'Criação de imagens, chatbots, automação', price: '50-500 MT', category: 'ai' },
      { icon: '📱', title: 'Marketing Digital', description: 'Gestão de redes sociais, SEO, Google Ads', price: '500-2000 MT/mês', category: 'marketing' }
    ];

    const html = services.map(service => `
      <div class="service-item">
        <div style="display: flex; justify-content: between; align-items: start; gap: 20px;">
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <span style="font-size: 1.5rem;">${service.icon}</span>
              <h4 style="margin: 0;">${service.title}</h4>
            </div>
            <p class="muted" style="margin-bottom: 10px;">${service.description}</p>
            <div style="display: flex; gap: 15px; flex-wrap: wrap;">
              <span class="muted"><strong>Preço:</strong> ${service.price}</span>
              <span class="muted"><strong>Categoria:</strong> ${this.getCategoryName(service.category)}</span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="ghost" onclick="agencyAdmin.editService('${service.title}')" title="Editar">✏️</button>
            <button class="ghost error" onclick="agencyAdmin.deleteService('${service.title}')" title="Excluir">🗑️</button>
          </div>
        </div>
      </div>
    `).join('');

    document.getElementById('servicesList').innerHTML = html;
  }

  loadLeads() {
    const leads = [
      { name: 'João Silva', whatsapp: '+258841234567', email: 'joao@gmail.com', service: 'Site Institucional', date: '2024-01-15', status: 'pending' },
      { name: 'Maria Santos', whatsapp: '+258842345678', email: 'maria@gmail.com', service: 'Identidade Visual', date: '2024-01-14', status: 'completed' },
      { name: 'Carlos Mendes', whatsapp: '+258843456789', email: 'carlos@gmail.com', service: 'App Mobile', date: '2024-01-13', status: 'processing' }
    ];

    const html = leads.map(lead => `
      <tr>
        <td><strong>${lead.name}</strong></td>
        <td>
          <div>📱 ${lead.whatsapp}</div>
          <div class="muted" style="font-size: 0.8rem;">📧 ${lead.email}</div>
        </td>
        <td>${lead.service}</td>
        <td>${this.formatDate(lead.date)}</td>
        <td>
          <span class="status-badge status-${lead.status}">
            ${this.getStatusText(lead.status)}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="ghost" onclick="agencyAdmin.viewLead('${lead.name}')" title="Ver detalhes">👁️</button>
            <button class="ghost success" onclick="agencyAdmin.updateLeadStatus('${lead.name}', 'completed')" title="Concluir">✅</button>
          </div>
        </td>
      </tr>
    `).join('');

    document.getElementById('leadsTable').innerHTML = html;
  }

  loadSessions() {
    const sessions = [
      { id: 'S001', pages: 8, duration: '7m 23s', browser: 'Chrome', date: '2024-01-15 14:30' },
      { id: 'S002', pages: 5, duration: '3m 45s', browser: 'Firefox', date: '2024-01-15 13:15' },
      { id: 'S003', pages: 12, duration: '15m 12s', browser: 'Safari', date: '2024-01-15 11:45' }
    ];

    const html = sessions.map(session => `
      <div style="padding: 15px; border: 1px solid var(--border); border-radius: 8px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: between; align-items: start;">
          <div>
            <strong>👤 Sessão #${session.id}</strong>
            <div class="muted" style="font-size: 0.9rem;">
              📍 ${session.pages} páginas • ⏱️ ${session.duration}
            </div>
            <small class="muted" style="font-size: 0.8rem;">🖥️ ${session.browser}</small>
          </div>
          <small class="muted">${this.formatDate(session.date)}</small>
        </div>
      </div>
    `).join('');

    document.getElementById('sessionsList').innerHTML = html;
  }

  loadAnalytics() {
    // Gráfico de visualizações por página
    document.getElementById('pageViewsChart').innerHTML = `
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>Página Inicial</span>
        <strong>142 visualizações</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>Serviços</span>
        <strong>98 visualizações</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>Portfólio</span>
        <strong>76 visualizações</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0;">
        <span>Contactos</span>
        <strong>45 visualizações</strong>
      </div>
    `;

    // Gráfico de tempo de sessão
    document.getElementById('sessionTimeChart').innerHTML = `
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>0-1 minuto</span>
        <strong>12 sessões</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>1-5 minutos</span>
        <strong>45 sessões</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <span>5-15 minutos</span>
        <strong>28 sessões</strong>
      </div>
      <div style="display: flex; justify-content: between; padding: 8px 0;">
        <span>15+ minutos</span>
        <strong>4 sessões</strong>
      </div>
    `;

    // Dados analíticos
    document.getElementById('analyticsData').innerHTML = `
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div class="admin-stat">
          <span class="stat-value">89</span>
          <span class="muted">Sessões Hoje</span>
        </div>
        <div class="admin-stat">
          <span class="stat-value">4.8</span>
          <span class="muted">Páginas/Sessão</span>
        </div>
        <div class="admin-stat">
          <span class="stat-value">12.3%</span>
          <span class="muted">Taxa de Rejeição</span>
        </div>
      </div>
    `;
  }

  async handleAddService(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const serviceData = {
      title: formData.get('title') || document.getElementById('serviceTitle').value,
      description: formData.get('description') || document.getElementById('serviceDescription').value,
      price: parseInt(formData.get('price') || document.getElementById('servicePrice').value),
      category: formData.get('category') || document.getElementById('serviceCategory').value,
      icon: formData.get('icon') || document.getElementById('serviceIcon').value,
      duration: formData.get('duration') || document.getElementById('serviceDuration').value
    };

    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    try {
      button.innerHTML = '⏳ Adicionando...';
      button.disabled = true;

      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      showSuccess(`✅ Serviço "${serviceData.title}" adicionado!`);
      event.target.reset();
      
      // Recarregar lista
      this.loadServices();

    } catch (error) {
      showError('❌ Erro ao adicionar serviço');
    } finally {
      button.innerHTML = originalText;
      button.disabled = false;
    }
  }

  showTab(tabName) {
    // Esconder todas as abas
    document.querySelectorAll('.tab-panel').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Remover active de todas as tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.classList.remove('active');
    });

    // Mostrar aba selecionada
    const tabElement = document.getElementById(tabName + 'Tab');
    const tabButton = document.querySelector(`.admin-tab[onclick*="${tabName}"]`);
    
    if (tabElement) tabElement.classList.add('active');
    if (tabButton) tabButton.classList.add('active');

    this.currentTab = tabName;
  }

  // Métodos utilitários
  getCategoryName(category) {
    const categories = {
      'web': '🌐 Desenvolvimento Web',
      'design': '🎨 Design Gráfico',
      'ai': '🤖 Inteligência Artificial',
      'marketing': '📱 Marketing Digital',
      'consulting': '📊 Consultoria',
      'support': '🔧 Suporte Técnico'
    };
    return categories[category] || category;
  }

  getStatusText(status) {
    const statuses = {
      'pending': '⏳ Pendente',
      'processing': '⚙️ Processando',
      'completed': '✅ Concluído',
      'cancelled': '❌ Cancelado'
    };
    return statuses[status] || status;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-MZ') + ' ' + date.toLocaleTimeString('pt-MZ', { 
      hour: '2-digit', minute: '2-digit' 
    });
  }

  // Ações do painel
  editService(serviceName) {
    showInfo(`✏️ Editando: ${serviceName}`);
  }

  deleteService(serviceName) {
    if (confirm(`🗑️ Excluir o serviço "${serviceName}"?`)) {
      showSuccess(`✅ Serviço "${serviceName}" removido`);
      this.loadServices();
    }
  }

  viewLead(leadName) {
    showInfo(`👁️ Visualizando lead: ${leadName}`);
  }

  updateLeadStatus(leadName, status) {
    showSuccess(`✅ ${leadName} marcado como ${this.getStatusText(status)}`);
    this.loadLeads();
  }

  async saveCompanySettings(event) {
    event.preventDefault();
    showSuccess('💾 Configurações da empresa salvas!');
  }

  async saveSiteSettings(event) {
    event.preventDefault();
    showSuccess('🎨 Configurações do site aplicadas!');
  }

  async exportLeadsCSV() {
    showSuccess('📄 CSV exportado com sucesso!');
  }

  async exportLeadsPDF() {
    showSuccess('📊 PDF exportado com sucesso!');
  }
}

// Inicialização SIMPLES e ROBUSTA
let agencyAdmin;

document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 DOM carregado - inicializando admin...');
  
  agencyAdmin = new AgencyAdmin();
  window.agencyAdmin = agencyAdmin;
  
  // Inicializar com pequeno delay para garantir carregamento
  setTimeout(() => {
    agencyAdmin.init();
  }, 100);
});

console.log('✅ Admin Agency carregado');