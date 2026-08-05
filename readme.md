# HLF Suplementos Premium — Microsite

Microsite estático de Distribuidor Independente Herbalife (Edu Sidegum).
Publicado via GitHub Pages em `https://edusidegum.github.io/HLFPremium/`.

## Stack

- HTML5 semântico, CSS3 (temas dark/white), JavaScript vanilla (mínimo)
- Schema.org (LocalBusiness, Product, WebPage) via JSON-LD
- `sitemap.xml` + `robots.txt` + `canonical` explícito
- Imagens WebP otimizadas; Core Web Vitals (INP < 200ms); `prefers-reduced-motion`
- Zero emojis no conteúdo; zero tracking desnecessário; sem llms.txt
- Semântica acessível (role, aria, landmarks)

## Estrutura

HLFPremium/
├── index.html                    Home (tema dark)
├── politica.html                 Política de Privacidade (LGPD, noindex)
├── robots.txt                    Bloqueia /DOC/ e /tabelas/; aponta sitemap
├── sitemap.xml                   URLs indexáveis (sem noindex)
├── google82b0e011e22c61ab.html   Verificação Google Search Console
├── BingSiteAuth.xml              Verificação Bing Webmaster Tools
├── cadastro/                     Funil único de conversão (CTA + SponsorId + vídeo)
├── ofertas/                      Programas 15/30d + kits + miniaturas (dark)
├── linha24/                      Nutrição esportiva / CR7 (dark)
├── hypedrink/                    Kit Hype Drink + preparo + investimento (white)
├── atendimento/                  Atendimento personalizado (white)
├── produtos-herbalife/           Vitrine de produtos (white)
├── categorias/                   5 subpáginas de categoria (white)
├── conteudo/                     Guias e artigos
├── novo-hamburgo/                SEO local (JSON-LD LocalBusiness + geo)
├── oportunidade/                 Oportunidade de negócio (disclaimer de renda)
├── tabelas/                      Consulta interna (noindex)
├── DOC/                          Registro: tabela oficial de preços (bloqueada)
└── assets/
    ├── css/                      style_dark.css | style_white.css
    ├── js/                       consentimento.js
    └── img/                      inventário de imagens (WebP)

## Deploy

1. Push para a branch `main`.
2. GitHub → Settings → Pages → Source: `main` / root.
3. Custom domain (se aplicável) e verificação de propriedade (Google/Bing) já presentes na raiz.
4. Conferir `canonical` e `sitemap.xml` se o domínio final mudar de `edusidegum.github.io/HLFPremium/`.

## Manutenção

- **Preços:** a fonte oficial é `DOC/tabelahlfpremium2026.html` (cópia da tabela Herbasis). Valores DE/POR nas páginas HTML são estáticos — atualizar em conjunto a cada reajuste.
- **Imagens:** inventário completo em `DOC/` e nomes de arquivo referenciados em `assets/img/`.
- **Cookies:** banner gerido por `assets/js/consentimento.js` (LGPD). Política com seção de cookies.
- **Vídeos:** embeds do YouTube no canal do consultor (cadastro: short `grVp3WsJunA` + tutoriais).
- **Sitemap:** atualizar `lastmod` a cada deploy.

## Conformidade

- Política de Privacidade (LGPD) — `politica.html` (noindex).
- Disclaimer de renda variável — `oportunidade/` e `hypedrink/investimento.html`.
- Linha Herbalife24 testada para ausência de substâncias proibidas.
- Marca Herbalife citada apenas como Distribuidor Independente autorizado.

## Licença

Todos os direitos reservados. Ver `LICENSE`.