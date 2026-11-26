# Sabrina Yokoyama — Portfolio V2

Portfólio profissional bilíngue de Sabrina Yokoyama, Analista de Dados. Apresenta competências, trajetória no setor financeiro, três cases profissionais anonimizados, formação e dois projetos acadêmicos/pessoais. O tema padrão é escuro e o idioma padrão é português.

## Tecnologias

Next.js (App Router), React, TypeScript, CSS com tokens de design, Framer Motion, Lucide React, Playwright, ESLint e Prettier. A aplicação usa rotas estáticas e não depende de APIs pagas, banco de dados, autenticação ou backend próprio. Imagens são servidas pelo componente `next/image`.

## Começar

É necessário Node.js 22 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para gerar e servir a versão de produção:

```bash
npm run build
npm run start
```

Para validar:

```bash
npm run lint
npm run typecheck
npm run build
npm run test
```

`npm run test` inicia o servidor de produção na porta 4175 e usa o Chromium instalado em `/usr/bin/chromium`. Em outro sistema, ajuste `executablePath` em `playwright.config.ts` ou instale o navegador com `npx playwright install chromium` e remova a configuração de caminho fixo.

## Organização

- `src/app/`: rotas, metadados, sitemap, robots e estilos globais.
- `src/components/Site.tsx`: estrutura compartilhada e componentes das páginas.
- `src/content/data.ts`: informações profissionais, cases, cursos, projetos, imagens e links externos.
- `src/content/ui.ts`: textos de interface em português e inglês.
- `src/content/seo.ts`: títulos, descrições, URLs canônicas e Open Graph.
- `public/images/`: fotos de perfil e eventos.
- `tests/portfolio.spec.ts`: navegação, alternância de tema e idioma, cards, links e responsividade.

## Atualizar o conteúdo

Edite `src/content/data.ts` para alterar experiências, projetos, cursos ou cases. Cada item tem textos `pt` e `en`; complete ambos. As páginas são geradas a partir das listas, portanto um novo projeto ou curso aparece sem alterar o layout. Para um novo case, adicione um objeto a `cases` com um `slug` único; as rotas PT e EN são geradas automaticamente.

Os links de contato e o endereço do LinkedIn estão no objeto `links` do mesmo arquivo. Os cursos levam à seção de certificados do LinkedIn, sem números ou URLs individuais inventados. O repositório de Indicadores Financeiros é `project_advanced_sql`; o link com sufixo `0` no briefing não existe.

Para trocar uma foto, substitua o arquivo correspondente em `public/images/` e mantenha o caminho indicado em `data.ts`. As imagens originais enviadas foram preservadas fora do repositório, em `/workspace/backups/user-photos/`. Não adicione currículos, o PDF de especificação ou documentos internos ao repositório público.

Edite `src/content/ui.ts` para alterar textos da interface e `src/content/seo.ts` para metadados. Cores, bordas e sombras ficam nas variáveis `:root` e `:root[data-theme='light']` de `src/app/globals.css`.

## Publicar na Vercel

1. Conecte o repositório `portfolio-v2` ao projeto Vercel existente que controla `sabrina-yokoyama.vercel.app`.
2. Confirme que o framework detectado é **Next.js**, que a pasta raiz é o próprio repositório e que o comando de build é `npm run build`.
3. Gere um deploy de preview e valide as rotas, imagens, contatos e alternâncias de tema e idioma.
4. Promova a versão validada para produção, mantendo o domínio `sabrina-yokoyama.vercel.app` no projeto. Guarde o deployment anterior para rollback.

A implantação deve ocorrer somente após os testes técnicos passarem. Os repositórios antigos de portfólio devem permanecer disponíveis até a confirmação do novo site em produção e de um backup recuperável.

## Dados e privacidade

Os cases usam descrições anonimizadas. Indicadores estimados e a projeção anual estão identificados. Nenhum dado de cliente, SQL proprietário, token, chave de API ou documento privado deve ser incluído no código público. O Cognitive AI é apresentado como protótipo; respostas por GPT dependem de uma chave e podem gerar custos.
