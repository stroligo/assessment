# Assessment

## Objective

Create a small web application using JavaScript/TypeScript and any library/technology of your choice. The application will visualize a table populated with data and include a filtering section. The table should have collapsible/expandable hierarchical row and column headers.

## Requirements

### Core Functionality

1. **Data Visualization**:

   - Display a table with hierarchical column and row headers.
   - Headers should support collapsible/expandable functionality:
     - **Horizontally** for columns.
     - **Vertically** for rows.
   - Collapsed/Expanded states should be indicated using icons (arrows, plus/minus, etc.).
   - The table values should react dynamically when headers are collapsed/expanded. Values are pre-given and don’t require calculation.

2. **Multiple Headers** (Optional):
   - The table can include multiple row headers (e.g., articles, measure units).
   - Focus on the collapsibility task if multiple headers aren't implemented.

### Filtering Area

1. **Dropdown Filters**:
   - Implement dropdown filters for the columns/dimensions.
   - Filters should follow the structure: `Dimension Name` -> `Element Selection` (e.g., `"Version"` -> `"Actual"`).
   - Include at least **two selections per filter**.
   - On filter change, update the table values dynamically.
2. **Filter Interactivity**:
   - Dropdowns should reflect different visual states (e.g., clicked, highlighted).
   - Highlight the selected element with a distinct color or icon.

### Data Structure & Handling

1. **Data Input**:
   - Data should be supplied via JSON. The JSON should contain the table and filter content. For example:
     - Sections for rows, columns, and filter dimensions/elements.
     - A data section for values.
2. **Dimension & Hierarchy**:
   - Each dimension/element in the JSON should be tagged to indicate its position and hierarchy level.
3. **Mock Data Functions**:
   - The complete dataset should **not be preloaded**.
   - Implement a function `retrieveData(...)` to fetch hardcoded values from a mock function.
   - Use the function `filterChanged(...)` (or modify `retrieveData(...)`) to update data on filter changes.
   - Implement a function `collapseExpand(...)` (or modify `retrieveData(...)`) to update the table when an element is collapsed/expanded.

### Table Styles

1. **Styles**:
   - Implement **at least two table styles**:
     - Example 1: Zebra-striped rows (as shown in the image).
     - Example 2: Plain white background with black borders.
   - Include a button to switch between styles.

### Additional Features (Optional)

- Feel free to add extra visualizations like hover effects or custom icons.
- Customize the table and filters with your unique design choices.

## Example Data

The dataset might look like the following:

### Dimensions

- **Article**: {All Articles, Bikes, Motorbikes, ...}
- **Region**: {Europe, Great Britain, Germany, ...}
- **Legal Entity**: {11, 12, 13, All Entities}
- **Version**: {Actual, Budget}
- **Currency**: {LC, USD, EUR}
- **Measure**: {Units, Unit Price, Gross Revenue}

### Values

For each dimension, there are several possible elements. For example:

---

# Avaliação (PT_Br)

## Objetivo

Criar uma pequena aplicação web usando JavaScript/TypeScript e qualquer biblioteca/tecnologia de sua escolha. A aplicação visualizará uma tabela populada com dados e incluirá uma seção de filtragem. A tabela deve ter cabeçalhos de linha e coluna hierárquicos que possam ser recolhidos/ampliados.

## Requisitos

### Funcionalidade Principal

1. **Visualização de Dados**:

   - Exibir uma tabela com cabeçalhos de coluna e linha hierárquicos.
   - Os cabeçalhos devem suportar a funcionalidade de recolher/ampliar:
     - **Horizontalmente** para colunas.
     - **Verticalmente** para linhas.
   - Os estados recolhidos/ampliados devem ser indicados usando ícones (setas, mais/menos, etc.).
   - Os valores da tabela devem reagir dinamicamente quando os cabeçalhos são recolhidos/ampliados. Os valores são fornecidos previamente e não requerem cálculo.

2. **Múltiplos Cabeçalhos** (Opcional):
   - A tabela pode incluir múltiplos cabeçalhos de linha (por exemplo, artigos, unidades de medida).
   - Concentre-se na tarefa de colapsabilidade se múltiplos cabeçalhos não forem implementados.

### Área de Filtragem

1. **Filtros em Dropdown**:

   - Implementar filtros em dropdown para as colunas/dimensões.
   - Os filtros devem seguir a estrutura: `Nome da Dimensão` -> `Seleção do Elemento` (por exemplo, `"Versão"` -> `"Real"`).
   - Incluir pelo menos **duas seleções por filtro**.
   - Na mudança do filtro, atualizar os valores da tabela dinamicamente.

2. **Interatividade do Filtro**:
   - Os dropdowns devem refletir diferentes estados visuais (por exemplo, clicado, destacado).
   - Destacar o elemento selecionado com uma cor ou ícone distinto.

### Estrutura e Manipulação de Dados

1. **Entrada de Dados**:

   - Os dados devem ser fornecidos via JSON. O JSON deve conter o conteúdo da tabela e do filtro. Por exemplo:
     - Seções para linhas, colunas e dimensões/elementos de filtro.
     - Uma seção de dados para valores.

2. **Dimensão e Hierarquia**:

   - Cada dimensão/elemento no JSON deve ser marcado para indicar sua posição e nível hierárquico.

3. **Funções de Dados Simulados**:
   - O conjunto de dados completo **não deve ser pré-carregado**.
   - Implementar uma função `retrieveData(...)` para buscar valores codificados de uma função simulada.
   - Usar a função `filterChanged(...)` (ou modificar `retrieveData(...)`) para atualizar os dados quando os filtros mudam.
   - Implementar uma função `collapseExpand(...)` (ou modificar `retrieveData(...)`) para atualizar a tabela quando um elemento é recolhido/ampliado.

### Estilos da Tabela

1. **Estilos**:
   - Implementar **pelo menos dois estilos de tabela**:
     - Exemplo 1: Linhas listradas (como mostrado na imagem).
     - Exemplo 2: Fundo branco simples com bordas pretas.
   - Incluir um botão para alternar entre estilos.

### Recursos Adicionais (Opcional)

- Sinta-se à vontade para adicionar visualizações extras, como efeitos de hover ou ícones personalizados.
- Personalize a tabela e os filtros com suas escolhas de design exclusivas.

## Exemplo de Dados

O conjunto de dados pode ter a seguinte aparência:

### Dimensões

- **Artigo**: {Todos os Artigos, Bicicletas, Motocicletas, ...}
- **Região**: {Europa, Grã-Bretanha, Alemanha, ...}
- **Entidade Legal**: {11, 12, 13, Todas as Entidades}
- **Versão**: {Real, Orçamento}
- **Moeda**: {LC, USD, EUR}
- **Medida**: {Unidades, Preço Unitário, Receita Bruta}

### Valores

Para cada dimensão, há vários elementos possíveis. Por exemplo:
