# Chat Drawer - Funcionalidade Implementada

## 📋 Resumo da Implementação

Implementei um chat drawer interativo na hero da home page que se comunica com o
webhook da deco.chat. A funcionalidade permite que os usuários digitiem uma
pergunta no input da hero e abram um chat em tempo real.

## 🏗️ Arquitetura

### Componentes Criados/Modificados

1. **`islands/ChatDrawer.tsx`** - Componente Island para interatividade
2. **`sections/new-home/NewHomeHero.tsx`** - Hero modificada para integrar o
   chat
3. **`.deco/blocks/pages-home-5afd25174424.json`** - Configuração atualizada

### Estados do Chat Drawer

- **Fechado**: Não visível na tela
- **Aberto**: Drawer completo com chat funcional
- **Minimizado**: Pequeno botão arredondado no canto inferior direito

## 🎨 Design & UX

### Layout Responsivo

- **Mobile**: Chat ocupa tela inteira quando aberto
- **Desktop**: Chat em drawer lateral (396px width)
- **Minimizado**: 320px x 64px no canto inferior direito

### Animações

- Transições suaves de 500ms com easing
- Backdrop blur quando aberto
- Indicador de digitação com pontos animados
- Scroll automático para novas mensagens

### Cores & Estilo

- Header com gradiente primary-light → primary-dark
- Mensagens do usuário em primary-dark
- Mensagens do agente em dc-100
- Timestamps em cada mensagem

## ⚙️ Funcionamento Técnico

### Fluxo de Interação

1. **Usuário digita no input da hero** → Pressiona Enter ou clica no botão
2. **Chat drawer abre automaticamente** → Input fica preenchido com a mensagem
3. **Usuário confirma/edita a mensagem** → Pressiona enviar
4. **Mensagem enviada via webhook** → Loading state ativado
5. **Resposta do agente recebida** → Exibida no chat com animação

### Webhook Integration

```typescript
// URL configurada no JSON block
const webhookUrl = "https://api.deco.chat/actors/Trigger/invoke/run?passphrase=undefined&deno_isolate_instance_id=/shared/deco.cx/Agents/a213785a-57b4-4800-a207-e408fb476841/triggers/632bce52-a316-43d0-a724-bd1de45d980b&output_tool=undefined"

// Formato da requisição
{
  "message": "Pergunta do usuário"
}

// Formato esperado da resposta
{
  "message": "Resposta do agente"
}
```

### Estados de Loading

- **isLoading**: Controla se pode enviar nova mensagem
- **isTyping**: Mostra indicador de digitação
- Timeout de 1 segundo para simular digitação natural

## 🔧 Controles Disponíveis

### Botões do Header

- **Minimizar** (`remove` icon): Minimiza o chat para o canto
- **Fechar** (`close` icon): Fecha completamente o chat

### Interações

- **Backdrop click**: Minimiza o chat (não fecha)
- **Chat minimizado click**: Reabre o chat
- **Enter no input**: Envia mensagem
- **Botão enviar**: Envia mensagem

## 🛠️ Implementação Técnica

### Server-Side (Section)

```tsx
// Hero renderiza o ChatDrawer e configura handlers
<ChatDrawer
  webhookUrl={chatWebhookUrl}
  placeholder={inputPlaceholder}
/>;

// Script para conectar input com chat
window.openChatDrawer = openChat;
```

### Client-Side (Island)

```tsx
// Gerencia estado e comunicação com webhook
const [isOpen, setIsOpen] = useState(false);
const [isMinimized, setIsMinimized] = useState(false);
const [messages, setMessages] = useState<Message[]>([]);

// Função exposta globalmente
useEffect(() => {
  (window as any).openChatDrawer = openChat;
}, []);
```

## 📱 Responsividade

### Breakpoints

- **Mobile** (< 640px): Chat full-screen
- **Tablet** (640px+): Chat em drawer
- **Desktop** (1024px+): Chat posicionado melhor

### Adaptações Mobile

- Chat ocupa `w-full h-full` em telas pequenas
- Botões maiores para touch
- Espaçamento otimizado

## 🎯 Próximos Passos

### Possíveis Melhorias

1. **Persistência**: Salvar mensagens no localStorage
2. **Notificações**: Badge de novas mensagens quando minimizado
3. **Emoji Picker**: Adicionar suporte a emojis
4. **File Upload**: Permitir envio de arquivos
5. **Voice Input**: Integração com Web Speech API

### Configurações Avançadas

1. **Custom Styling**: Permitir personalização de cores
2. **Multiple Agents**: Suporte a diferentes agentes/workflows
3. **Conversation History**: Histórico de conversas anteriores

## 🚀 Como Usar

1. **Digite uma pergunta** no input da hero
2. **Pressione Enter** ou clique no botão de enviar
3. **O chat abrirá** automaticamente com sua pergunta
4. **Confirme ou edite** a mensagem e pressione enviar
5. **Aguarde a resposta** do agente da deco.chat
6. **Continue a conversa** ou minimize/feche quando terminar

A funcionalidade está completamente implementada e pronta para uso! 🎉
