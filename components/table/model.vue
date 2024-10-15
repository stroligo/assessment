<template>
  <div class="p-4">
    <div class="py-4">
      <UiButton text="Alternar estilo" link="#" @click="toggleStyle" />
    </div>

    <!-- Filtros Dropdown -->
    <div class="flex py-4 gap-4">
      <div v-for="(filter, index) in filters.dimensions" :key="index">
        <label class="block mb-2">{{ filter.name }}</label>
        <UiButtonDropdown
          :text="selectedFilters[filter.name]"
          @click="toggleDropdown(filter.name)"
        >
          <template v-slot>
            <ul>
              <li
                v-for="(element, elIndex) in filter.elements"
                :key="elIndex"
                @click="
                  selectedFilters[filter.name] = element;
                  filterChanged();
                "
              >
                {{ element }}
              </li>
            </ul>
          </template>
        </UiButtonDropdown>
      </div>
    </div>

    <div>Table:</div>
    <table :class="{ 'table-zebra': isZebraStyle }">
      <thead>
        <tr>
          <th>Articles</th>
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
            <td
              class="border border-gray-400 px-3 py-4"
              @click="toggleRow(row)"
            >
              <span
                class="cursor-pointer w-full flex flex-row gap-4 justify-between"
              >
                <span> {{ row.name }}</span>
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
              {{ getValue(row, col) || '' }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from '~/static/data.json';
import filters from '~/static/filter.json';
import estruture from '~/static/estruture.json';

export default {
  data() {
    return {
      data: data.table,

      rows: estruture.rows,
      columns: estruture.columns,

      filters: filters.filters,
      selectedFilters: filters.selectedFilters,

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
        this.expandedRows.splice(index, 1);
        row.classList.remove('expanded');
      } else {
        this.expandedRows.push(row);
        row.classList.add('expanded');
      }
    },
    // Função para alternar a expansão/colapso de uma coluna
    toggleColumn(col) {
      const index = this.expandedColumns.indexOf(col);
      if (index > -1) {
        this.expandedColumns.splice(index, 1);
        col.classList.remove('expanded');
      } else {
        this.expandedColumns.push(col);
        col.classList.add('expanded');
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
          visible.push(...this.getChildren(element.children, expandedList));
        }
      });
      return visible;
    },

    getChildren(children, expandedList) {
      const visibleChildren = [];
      children.forEach((child) => {
        visibleChildren.push(child);
        if (expandedList.includes(child) && child.children) {
          visibleChildren.push(
            ...this.getChildren(child.children, expandedList),
          );
        }
      });
      return visibleChildren;
    },
    // Busca o valor de dados baseado nas seleções atuais
    getValue(row, col) {
      const { Version, Currency, Measure } = this.selectedFilters;
      const entry = this.data.find((item) => {
        return (
          item.key[0] === row.name &&
          item.key[1] === col.name &&
          item.key[2] === Version &&
          item.key[3] === Currency &&
          item.key[4] === Measure
        );
      });
      return entry?.value ?? 0;
    },
    // Função chamada quando um filtro é alterado
    filterChanged() {
      const { Version, Currency, Measure } = this.selectedFilters;
      const filteredData = this.data.filter((item) => {
        return (
          item.key[2] === Version &&
          item.key[3] === Currency &&
          item.key[4] === Measure
        );
      });
      this.visibleRows = filteredData.map((item) => {
        return {
          name: item.key[0],
          children: item.key[1],
          value: item.value,
        };
      });
    },
    // Função para alternar entre os estilos da tabela
    toggleStyle() {
      this.isZebraStyle = !this.isZebraStyle;
    },
  },
};
</script>

<style scoped>
table {
  @apply w-full border-collapse border border-primary;
}
thead {
  @apply bg-primary;
  tr {
    @apply bg-yellow border border-gray p-2;
    th {
      @apply bg-beige;
    }
  }
}
.table-row,
.table-column {
  @apply transition-all ease-in-out duration-300;
}
.table-zebra tr:nth-child(odd) {
  @apply bg-green-10;
}

select {
  @apply flex w-full flex-row items-center justify-center gap-2 rounded-full bg-yellow px-5 py-2 font-bold text-blue-dark transition-all duration-300 ease-in-out hover:bg-orange hover:text-white active:bg-yellow disabled:pointer-events-none disabled:text-white disabled:opacity-40 md:w-fit pr-4;
  option {
    @apply bg-red-600;
  }
}
</style>
