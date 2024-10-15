<template>
  <div class="p-4">
    <div class="flex space-x-4 mb-4">
      <!-- Filtros Dropdown -->
      <div v-for="(filter, index) in filters.dimensions" :key="index">
        <label class="block mb-2">{{ filter.name }}</label>
        <select v-model="selectedFilters[filter.name]" @change="filterChanged">
          <option
            v-for="(element, elIndex) in filter.elements"
            :key="elIndex"
            :value="element"
          >
            {{ element }}
          </option>
        </select>
      </div>
    </div>

    <button @click="toggleStyle" class="mb-4">Alternar estilo</button>

    <table
      class="w-full border-collapse border border-gray-400"
      :class="{ 'table-zebra': isZebraStyle }"
    >
      <thead>
        <tr>
          <th class="border border-gray-400 p-2">Articles</th>
          <th
            v-for="(col, colIndex) in visibleColumns"
            :key="colIndex"
            class="border border-gray-400 p-2"
          >
            <span @click="toggleColumn(col)" class="cursor-pointer">
              {{ col.name }}
              <span v-if="col.children"
                >({{ isColumnExpanded(col) ? '-' : '+' }})</span
              >
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, rowIndex) in visibleRows" :key="rowIndex">
          <tr>
            <td class="border border-gray-400 p-2">
              <span @click="toggleRow(row)" class="cursor-pointer">
                {{ row.name }}
                <span v-if="row.children"
                  >({{ isRowExpanded(row) ? '-' : '+' }})</span
                >
              </span>
            </td>
            <td
              v-for="(col, colIndex) in visibleColumns"
              :key="colIndex"
              class="border border-gray-400 p-2"
            >
              {{ getValue(row, col) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dados de exemplo, similar ao JSON fornecido
      rows: {
        dimension: 'Articles',
        elements: [
          {
            name: 'All Articles',
            children: [
              {
                name: 'Bikes',
                children: [{ name: 'Mountain Bikes' }, { name: 'Road Bikes' }],
              },
              {
                name: 'Motorbikes',
                children: [{ name: 'Sport Bikes' }, { name: 'Cruiser Bikes' }],
              },
            ],
          },
        ],
      },
      columns: {
        dimension: 'Regions',
        elements: [
          {
            name: 'Europe',
            children: [{ name: 'Germany' }, { name: 'Great Britain' }],
          },
          {
            name: 'North America',
            children: [{ name: 'USA' }, { name: 'Canada' }],
          },
        ],
      },
      filters: {
        dimensions: [
          { name: 'Version', elements: ['Actual', 'Budget'] },
          { name: 'Currency', elements: ['LC', 'USD', 'EUR'] },
          {
            name: 'Measure',
            elements: ['Units', 'Unit Price', 'Gross Revenue'],
          },
        ],
      },
      data: [
        { key: ['Bikes', 'Germany', 'Actual', 'LC', 'Units'], value: 1200 },
        {
          key: [
            'Motorbikes',
            'Great Britain',
            'Budget',
            'USD',
            'Gross Revenue',
          ],
          value: 30000,
        },
        {
          key: ['Mountain Bikes', 'Germany', 'Actual', 'EUR', 'Unit Price'],
          value: 450,
        },
      ],
      selectedFilters: {
        Version: 'Actual',
        Currency: 'LC',
        Measure: 'Units',
      },
      expandedRows: [],
      expandedColumns: [],
      isZebraStyle: false,
    };
  },
  computed: {
    visibleRows() {
      return this.getVisibleElements(this.rows.elements, this.expandedRows);
    },
    visibleColumns() {
      return this.getVisibleElements(
        this.columns.elements,
        this.expandedColumns,
      );
    },
  },
  methods: {
    // Função para alternar a expansão/colapso de uma linha
    toggleRow(row) {
      const index = this.expandedRows.indexOf(row);
      if (index > -1) {
        this.expandedRows.splice(index, 1); // Colapsa
      } else {
        this.expandedRows.push(row); // Expande
      }
    },
    // Função para alternar a expansão/colapso de uma coluna
    toggleColumn(col) {
      const index = this.expandedColumns.indexOf(col);
      if (index > -1) {
        this.expandedColumns.splice(index, 1); // Colapsa
      } else {
        this.expandedColumns.push(col); // Expande
      }
    },
    // Verifica se uma linha está expandida
    isRowExpanded(row) {
      return this.expandedRows.includes(row);
    },
    // Verifica se uma coluna está expandida
    isColumnExpanded(col) {
      return this.expandedColumns.includes(col);
    },
    // Função para filtrar as linhas e colunas visíveis
    getVisibleElements(elements, expandedList) {
      const visible = [];
      elements.forEach((element) => {
        visible.push(element);
        if (expandedList.includes(element) && element.children) {
          visible.push(
            ...this.getVisibleElements(element.children, expandedList),
          );
        }
      });
      return visible;
    },
    // Busca o valor de dados baseado nas seleções atuais
    getValue(row, col) {
      const { Version, Currency, Measure } = this.selectedFilters;
      const entry = this.data.find(
        (item) =>
          item.key[0] === row.name &&
          item.key[1] === col.name &&
          item.key[2] === Version &&
          item.key[3] === Currency &&
          item.key[4] === Measure,
      );
      return entry ? entry.value : 0;
    },
    // Função chamada quando um filtro é alterado
    filterChanged() {
      // Atualiza a tabela com os novos filtros
    },
    // Função para alternar entre os estilos da tabela
    toggleStyle() {
      this.isZebraStyle = !this.isZebraStyle;
    },
  },
};
</script>

<style scoped>
.table-zebra tr:nth-child(even) {
  background-color: #f2f2f2;
}

select {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
