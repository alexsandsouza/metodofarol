# Publicar e apresentar o repositório

[Central de documentação](README.md)

O repositório oficial já está publicado. Este guia diferencia a manutenção do FAROL de uma cópia independente.

## Apresentação do projeto oficial

| Campo da área About | Conteúdo |
|---|---|
| Repositório | `alexsandsouza/metodofarol` |
| Descrição | Método aberto para planejar aulas e criar materiais no Ensino Superior, em qualquer área, com NotebookLM, IA, fontes verificáveis, prompts, skills e revisão docente. Por Alexsand Farias. |
| Website | https://alexsandsouza.github.io/metodofarol/ |

Tópicos sugeridos: `educacao`, `ensino-superior`, `notebooklm`, `inteligencia-artificial`, `planejamento-didatico`, `metodologias-ativas`, `instructional-design`.

O texto acima é a referência para preencher a apresentação no GitHub. Editar este guia não altera automaticamente o campo About. A descrição deve refletir recursos existentes e não prometer validação universal.

## Contribuir com o projeto existente

1. Leia [CONTRIBUTING.md](../CONTRIBUTING.md), o [uso responsável](../USO_RESPONSAVEL.md) e o [roadmap](../ROADMAP.md).
2. Localize o arquivo pelo [índice dos guias](README.md) ou pelos índices das pastas.
3. Proponha uma alteração delimitada, preservando autoria, licença e caminhos existentes.
4. Quando alterar um caminho, atualize links e referências dependentes. Evite duplicar guias completos em arquivos diferentes.
5. Abra um pull request com o problema, a mudança e a forma de conferência. Uma melhoria de conteúdo não exige alterar o site.
6. Aguarde a revisão do mantenedor.

Para trabalhar localmente em uma cópia do repositório:

```bash
git clone https://github.com/alexsandsouza/metodofarol.git
cd metodofarol
git switch -c docs/minha-melhoria
```

Esses comandos pressupõem Git instalado e acesso ao remoto. Se trabalhar em um fork, use a URL do seu fork. Revise o diff antes de enviar e não force a substituição do histórico.

## Criar uma cópia independente

Use fork ou prepare um novo repositório com os materiais que pode redistribuir. Preserve a MIT e os avisos exigidos, identifique suas alterações e reconheça a origem. Atualize URLs, autoria da sua contribuição e configurações de publicação para não apresentar sua cópia como o repositório oficial.

Ao enviar pelo navegador, envie os arquivos e pastas com o README na raiz. O ZIP serve para transporte; não o publique como único conteúdo. Se houver muitos arquivos, use lotes, Git ou GitHub Desktop. Consulte os limites atuais da plataforma antes do envio; eles não são tratados como invariantes do projeto.

## Publicar ou manter o site

A página oficial utiliza GitHub Pages com workflow em `.github/workflows/pages.yml`. Consulte [identidade e página](08-identidade-e-pagina.md) para a configuração e [desenvolvimento SDD](09-desenvolvimento-sdd.md) para requisitos e verificações.

Antes de anunciar uma mudança do site, confira o workflow e a página pública. Não confunda commit enviado com publicação concluída.

## Revisão antes da divulgação

- Confira links, navegação, autoria e créditos.
- Preserve [LICENSE](../LICENSE) e [CITATION.cff](../CITATION.cff).
- Não envie fontes privadas, livros sem direito de distribuição, dados pessoais ou gabaritos restritos.
- Registre mudanças relevantes no [histórico](../CHANGELOG.md).
- Informe o estado real de validação, com limites e evidências.
