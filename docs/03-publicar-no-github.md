# Criar seu repositório no GitHub

## Dados sugeridos

| Campo | Conteúdo |
|---|---|
| Nome | metodo-farol |
| Descrição | Método interdisciplinar para planejar aulas e produzir materiais no Ensino Superior com IA, fontes verificáveis e NotebookLM. |
| Visibilidade | Escolha conforme o público desejado; para divulgação, use público |
| Website, se desejar | https://www.linkedin.com/in/alexsandfarias |

Sugestões de tópicos: `educacao`, `ensino-superior`, `notebooklm`, `inteligencia-artificial`, `planejamento-didatico`, `metodologias-ativas`, `instructional-design`.

## Pelo navegador

1. Baixe o pacote e extraia a pasta `metodo-farol` no computador.
2. Acesse https://github.com/new e confirme que está na sua conta.
3. Informe nome, descrição e visibilidade. Como os arquivos já estão preparados, deixe desmarcada a criação automática de README, .gitignore e licença.
4. Crie o repositório.
5. Na página inicial vazia, use o link para enviar arquivos existentes. Em repositórios com arquivos, use **Add file → Upload files**. Os rótulos podem aparecer traduzidos.
6. Abra a pasta extraída e arraste seu CONTEÚDO para a área de envio: README, demais arquivos e subpastas. Assim, o README fica na raiz do repositório. Não envie somente o ZIP ou a pasta externa de transporte.
7. Revise a lista de arquivos. Se o seletor não preservar as pastas, arraste as pastas diretamente ou use GitHub Desktop. Arquivos auxiliares de configuração que não aparecerem no gerenciador podem ser adicionados posteriormente; isso não impede a leitura do método.
8. Informe a mensagem `Adiciona estrutura inicial do Método FAROL` e confirme o envio pelo botão disponível.
9. Abra o README, siga links para prompts e módulos e confira os arquivos nas pastas.
10. Na área **About**, ajuste a descrição, o site e os tópicos.

O pacote foi organizado para ficar abaixo de 100 arquivos, sem arquivos grandes. A documentação consultada permite enviar até 100 arquivos por vez, com limite de 25 MiB por arquivo no navegador. Se necessário, envie em lotes sem alterar os caminhos das pastas.

## Alternativa com Git

Para repositório remoto recém-criado e vazio, abra um terminal DENTRO da pasta `metodo-farol` e execute, substituindo `SEU_USUARIO`:

```bash
git init
git add .
git commit -m "Adiciona estrutura inicial do Método FAROL"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/metodo-farol.git
git push -u origin main
```

Esses comandos exigem Git instalado e autenticação configurada. Se o repositório remoto já tiver arquivos, clone-o primeiro e copie o conteúdo para a pasta clonada; não force a substituição do histórico.

## Revisão antes da divulgação

Confira autoria, créditos, links e a seção de direitos. A licença MIT já está incluída no arquivo LICENSE; envie esse arquivo junto com os demais materiais. Não é necessário gerar outra licença na criação do repositório. Não envie livros de terceiros, fontes privadas, gabaritos restritos ou dados de estudantes.

Fontes oficiais consultadas em 09/11/2026:
- https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- https://docs.github.com/pt/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
