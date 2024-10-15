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
