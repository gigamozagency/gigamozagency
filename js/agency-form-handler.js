// agency-form-handler.js - Handler específico para a agency
console.log('📝 Carregando handler da agency...');

class AgencyFormHandler {
  constructor() {
    this.form = null;
    this.init();
  }

  async init() {
    await window.waitForFirebase();
    this.setupForm();
  }

  setupForm() {
    this.form = document.getElementById('agencyForm');
    
    if (!this.form) {
      console.log('⚠️ Formulário da agency não encontrado');
      return;
    }

    console.log('✅ Formulário da agency encontrado');
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('📤 Enviando formulário da agency...');

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    // Coletar dados
    const formData = new FormData(form);
    const data = {
      customerName: formData.get('nome'),
      customerEmail: formData.get('email'),
      customerWhatsApp: formData.get('whatsapp'),
      service: formData.get('servico'),
      details: formData.get('detalhes'),
      type: 'agency_service',
      status: 'pending',
      source: 'agency_website',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    // UI Loading
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Enviando...';
    submitBtn.disabled = true;

    try {
      // Salvar no Firestore
      const docRef = await window.db.collection('agency_requests').add(data);
      console.log('✅ Solicitação salva com ID:', docRef.id);

      // Enviar email de confirmação
      await this.sendConfirmation(data);

      // Limpar formulário
      form.reset();

      // Mensagem de sucesso
      showSuccess('✅ Solicitação enviada! Entraremos em contacto em até 24h.');

      // Abrir WhatsApp
      setTimeout(() => {
        this.openWhatsApp(data);
      }, 2000);

    } catch (error) {
      console.error('❌ Erro:', error);
      showError('Erro ao enviar solicitação. Tente novamente.');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  async sendConfirmation(data) {
    // Implementar envio de email via Firebase Functions ou serviço externo
    console.log('📧 Email seria enviado para:', data.customerEmail);
  }

  openWhatsApp(data) {
    const phone = '258847206883';
    const message = encodeURIComponent(
      `Olá! Solicitei orçamento para "${data.service}" através do site.\n\n` +
      `Nome: ${data.customerName}\n` +
      `Email: ${data.customerEmail}\n` +
      `WhatsApp: ${data.customerWhatsApp}\n` +
      `Serviço: ${data.service}\n` +
      `Detalhes: ${data.details}\n\n` +
      `Aguardo contacto!`
    );
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}

// Inicializar
let agencyFormHandler;

document.addEventListener('DOMContentLoaded', function() {
  agencyFormHandler = new AgencyFormHandler();
});