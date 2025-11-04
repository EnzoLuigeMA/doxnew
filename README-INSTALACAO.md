# DOX English EAD - Instruções de Instalação

## 📦 Conteúdo do Pacote

Este arquivo ZIP contém o código completo do site **Dox English EAD**, desenvolvido com as seguintes tecnologias:

- **React 19** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite 7** - Build tool ultra-rápido
- **Tailwind CSS 4** - Framework de estilos
- **Framer Motion** - Animações avançadas
- **Shadcn/ui** - Componentes UI modernos

---

## 🚀 Como Instalar e Executar

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** versão 18 ou superior ([Download aqui](https://nodejs.org/))
- **pnpm** (gerenciador de pacotes) - Instale com: `npm install -g pnpm`

### Passo 1: Extrair o arquivo ZIP

Extraia o conteúdo do arquivo `dox-english-ead-completo.zip` em uma pasta de sua preferência.

### Passo 2: Instalar dependências

Abra o terminal na pasta extraída e execute:

```bash
cd website_moderno
pnpm install
```

### Passo 3: Executar o projeto localmente

Após a instalação das dependências, execute:

```bash
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

### Passo 4: Build para produção

Para gerar os arquivos otimizados para produção:

```bash
pnpm build
```

Os arquivos gerados estarão na pasta `dist/` e podem ser hospedados em qualquer servidor web.

---

## 🌐 Opções de Hospedagem

### Opção 1: Publicar na Manus (Recomendado)
- Já está configurado e pronto
- Use o botão "Publish" na interface
- Configure domínio customizado se desejar

### Opção 2: Hospedagem Externa
Você pode hospedar os arquivos da pasta `dist/` em:
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Qualquer servidor com suporte a sites estáticos

---

## 📋 Estrutura do Projeto

```
website_moderno/
├── client/                  # Código do frontend
│   ├── public/             # Arquivos estáticos (imagens, logos)
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   │   ├── dox/       # Componentes específicos do Dox
│   │   │   └── ui/        # Componentes UI (Shadcn)
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── contexts/      # Contextos React (tema)
│   │   └── index.css      # Estilos globais
│   └── index.html         # HTML principal (com Meta Pixel)
├── package.json           # Dependências do projeto
└── vite.config.ts        # Configuração do Vite
```

---

## ✨ Funcionalidades Implementadas

✅ **Design Responsivo** - Perfeito em mobile, tablet e desktop
✅ **Animações Premium** - Framer Motion com efeitos 3D
✅ **Cronômetro de Urgência** - 5 minutos regressivo
✅ **Contagem Animada** - Números que contam até o valor
✅ **Meta Pixel Integrado** - ID: 1050949583737594
✅ **Botão de Compra** - Link direto para Kiwify
✅ **Tema Dark** - Paleta vermelha/preta
✅ **Smooth Scroll** - Navegação suave entre seções

---

## 🔧 Personalizações

### Alterar cores do tema
Edite o arquivo `client/src/index.css` nas variáveis CSS:

```css
--primary: 0 84% 60%;        /* Vermelho principal */
--primary-foreground: 0 0% 98%;
```

### Alterar textos
Os textos estão nos componentes dentro de `client/src/components/dox/`

### Alterar link de compra
Edite `client/src/components/dox/DoxOffer.tsx` na linha do botão:

```tsx
onClick={() => window.open('https://pay.kiwify.com.br/S2N3ibg', '_blank')}
```

### Alterar tempo do cronômetro
Edite `client/src/components/dox/DoxOffer.tsx`:

```tsx
<Countdown minutes={5} />  // Altere o número de minutos
```

---

## 📱 Meta Pixel (Facebook Pixel)

O Meta Pixel já está integrado no arquivo `client/index.html` com o ID **1050949583737594**.

Para rastrear eventos customizados, adicione no código:

```javascript
fbq('track', 'Purchase', {value: 297.00, currency: 'BRL'});
```

---

## 🆘 Suporte

Se tiver dúvidas sobre:
- **Instalação e execução**: Consulte a documentação do [Vite](https://vitejs.dev/)
- **Componentes UI**: Consulte [Shadcn/ui](https://ui.shadcn.com/)
- **Animações**: Consulte [Framer Motion](https://www.framer.com/motion/)

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para **Dox English EAD**.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
