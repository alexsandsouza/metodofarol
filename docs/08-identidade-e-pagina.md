# Identidade visual e página interativa

A apresentação usa azul profundo, turquesa e âmbar, com um farol geométrico como símbolo. O README usa Markdown, HTML compatível e uma capa vetorial nítida, com animação decorativa separada. A página complementar usa HTML, CSS e JavaScript sem dependências externas.

## O que está incluído

- Símbolo vetorial em `assets/brand/farol.svg`.
- Capa em `assets/brand/farol-hero.svg` e animação em `assets/brand/farol-motion.gif`.
- Página responsiva em `docs/site/`, com animações CSS e respeito à preferência de movimento reduzido.
- Etapas exploráveis por mouse e teclado, filtros, busca e gerador de prompt inicial.
- Formulários de contribuição em `.github/ISSUE_TEMPLATE/`.

O gerador monta um texto localmente. Ele não chama uma API de IA nem envia os campos a um serviço externo. A cópia automática depende das permissões do navegador; caso falhe, o texto é selecionado para cópia manual.

## Ativar o endereço público no GitHub Pages

A página está no repositório e o workflow está preparado. A configuração inicial requer acesso às configurações do repositório:

1. Abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Abra **Actions → Publicar página FAROL → Run workflow**, usando `main`.
4. Aguarde o workflow terminar e abra o endereço informado no job de publicação.
5. Quando o endereço estiver funcionando, adicione-o à área **About → Website** e, se desejar, à navegação do README.

Não anunciar a página como publicada apenas por existir o código: conferir a execução e o endereço retornado pelo GitHub Pages. A primeira execução do workflow pode falhar caso Pages ainda não tenha sido ativado.

## Configurar a área About

Descrição sugerida:

> Método interdisciplinar para planejar aulas e produzir materiais no Ensino Superior com IA, fontes verificáveis e NotebookLM. Por Alexsand Farias.

Tópicos sugeridos: `educacao`, `ensino-superior`, `notebooklm`, `inteligencia-artificial`, `planejamento-didatico`, `metodologias-ativas`, `instructional-design`.

## Manter o design

Edite o conteúdo do README e da página sem remover as informações de autoria, licença, limites de validação e créditos. Se alterar caminhos dos materiais, atualize também os links na página e nos formulários de contribuição. Os módulos e as referências internas da skill são cópias: sincronize mudanças relevantes de conteúdo entre as representações antes de publicar uma versão.

## Endereço público

O repositório usa o nome `metodofarol`. O endereço de publicação é `https://alexsandsouza.github.io/metodofarol/`. Todos os links explícitos deste pacote foram ajustados ao novo nome.

Após mudanças no site, o workflow de publicação deve terminar com sucesso antes de anunciar a versão como disponível. Endereços antigos de GitHub Pages não têm o mesmo redirecionamento automático dos links de repositório.
