<template>
  <section>
    <div class="container mx-auto px-5 py-10 md:py-20 md:px-0 relative">
      <div class="flex flex-col">
        <!-- Load Data Button -->
        <div class="py-4 flex items-center justify-center" v-if="!dataLoaded">
          <UiButton text="Load Table" @click="retrieveData" />
        </div>

        <!-- Header  -->
        <div
          v-if="dataLoaded"
          class="flex justify-between md:flex-row flex-col w-full flex-wrap gap-1 py-2"
        >
          <div class="font-slab text-3xl font-bold text-blue">Table:</div>
          <div class="flex items-center gap-2 md:w-fit w-full">
            <span class="md:flex hidden">Table Style: </span>
            <div
              class="py-4 gap-2 flex justify-between md:justify-normal md:w-fit"
            >
              <UiButton
                text="Normal"
                link="#"
                custom="secondary small"
                @click="toggleNoStyle"
              />
              <UiButton
                text="Green"
                link="#"
                custom="green small"
                @click="toggleStyle"
              />
              <UiButton
                text="Zebra"
                link="#"
                custom="zebra small"
                @click="toggleStyleZebra"
              />
            </div>
          </div>
        </div>

        <!-- Filters Dropdown -->
        <div id="filterarea">
          <div
            class="flex items-center md:flex-row w-fit rounded-full flex-wrap gap-4 md:bg-gray-10"
            v-if="dataLoaded"
          >
            <div v-for="(filter, index) in filters.dimensions" :key="index">
              <UiButtonDropdown
                :text="selectedFilters[filter.name]"
                @click="toggleDropdown(filter.name)"
                custom="small"
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

            <div
              @click="clearFilters"
              class="flex text-blue-dark gap-1 px-4 cursor-pointer hover:text-orange font-bold items-center"
            >
              <span class="whitespace-nowrap">Filter Clear</span><SvgoFilter />
            </div>
          </div>
        </div>

        <!-- Table -->
        <div id="tablearea">
          <table
            :class="{
              style2: isStyle,
              styleZebra: isStyleZebra,
            }"
            v-if="dataLoaded"
          >
            <thead>
              <tr>
                <th class="text-left">Articles</th>
                <th
                  v-for="(col, colIndex) in visibleColumns"
                  :key="colIndex"
                  :class="['lv2', { lv2Children: col.children }]"
                >
                  <span @click="toggleColumn(col)" class="text">
                    <span> {{ col.name }}</span>
                    <!-- Icon -->
                    <span v-if="col.children" class="icon -translate-y-[1px]">
                      <UiIcon custom=" h-4 w-4" aria-hidden="true">
                        <SvgoMinus v-if="isColumnExpanded(col)" />
                        <SvgoPlus v-else />
                      </UiIcon>
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(row, rowIndex) in visibleRows" :key="rowIndex">
                <tr>
                  <td @click="toggleRow(row)">
                    <span class="flex gap-2 items-center">
                      <span v-if="row.children" class="-translate-y-[2px]">
                        <UiIcon custom=" h-4 w-4" aria-hidden="true">
                          <SvgoMinus v-if="isRowExpanded(row)" />
                          <SvgoPlus v-else />
                        </UiIcon>
                      </span>
                      <span v-else class="w-4 font-normal"> </span>
                      <span v-if="row.children" class="font-bold">
                        {{ row.name }}</span
                      >
                      <span v-else> {{ row.name }}</span>
                    </span>
                  </td>
                  <td
                    :class="[getValue(row, col) ? 'whitValue' : 'noValue']"
                    v-for="(col, colIndex) in visibleColumns"
                    :key="colIndex"
                  >
                    {{ getValue(row, col) || '' }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from '~/static/data.json';
import filters from '~/static/filter.json';
import estruture from '~/static/estruture.json';

export default {
  data() {
    return {
      data: data.table,
      dataLoaded: false,

      rows: estruture.rows,
      columns: estruture.columns,

      filters: filters.filters,
      selectedFilters: filters.selectedFilters,

      expandedRows: [],
      expandedColumns: [],
      isStyle: false,
      isStyleZebra: false,
      noStyle: false,
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
    // Function MOCK to load data
    retrieveData() {
      this.dataLoaded = true;
      // Load data here
      this.data = data.table;
    },
    // Function to toggle row expansion
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
    // Function to toggle column expansion
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
    // Function to check if a row is expanded
    isRowExpanded(row) {
      return this.expandedRows.includes(row);
    },
    // Function to check if a column is expanded
    isColumnExpanded(col) {
      return this.expandedColumns.includes(col);
    },
    // Function to get visible elements
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
    // Function to get children elements
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
    // Function to get value based on current selections
    getValue(row, col) {
      const { Version, Currency, Measure, LegalEntity } = this.selectedFilters;
      const entries = this.data.filter((item) => {
        const versionMatch =
          Version === 'All Versions' || item.key[2] === Version;
        const currencyMatch =
          Currency === 'All Currencies' || item.key[3] === Currency;
        const measureMatch =
          Measure === 'All Measures' || item.key[4] === Measure;
        const legalEntityMatch =
          LegalEntity === 'All Entities' || item.key[5] === LegalEntity;
        return (
          item.key[0] === row.name &&
          item.key[1] === col.name &&
          versionMatch &&
          currencyMatch &&
          measureMatch &&
          legalEntityMatch
        );
      });
      return entries.reduce((acc, item) => acc + item.value, 0) || 0;
    },
    // Function called when a filter is changed
    filterChanged() {
      const { Version, Currency, Measure, LegalEntity } = this.selectedFilters;
      const filteredData = this.data.filter((item) => {
        const versionMatch =
          Version === 'All Versions' || item.key[2] === Version;
        const currencyMatch =
          Currency === 'All Currencies' || item.key[3] === Currency;
        const measureMatch =
          Measure === 'All Measures' || item.key[4] === Measure;
        const legalEntityMatch =
          LegalEntity === 'All Entities' || item.key[5] === LegalEntity;
        return (
          versionMatch && currencyMatch && measureMatch && legalEntityMatch
        );
      });
      this.visibleRows = this.getVisibleElements(
        filteredData,
        this.expandedRows,
      );
    },
    clearFilters() {
      this.selectedFilters = {
        Version: 'All Versions',
        Currency: 'All Currencies',
        Measure: 'All Measures',
        LegalEntity: 'All Entities',
      };
      this.filterChanged();
    },
    // Function to toggle table style
    toggleNoStyle() {
      this.noStyle = true;
      if (this.isStyle) {
        this.isStyle = !this.isStyle;
      }
      if (this.isStyleZebra) {
        this.isStyleZebra = !this.isStyleZebra;
      }
    },
    toggleStyle() {
      this.isStyle = true;
      this.isStyleZebra = false;
    },
    toggleStyleZebra() {
      this.isStyle = false;
      this.isStyleZebra = true;
    },
  },
};
</script>

<style scoped>
#filterarea {
  @apply max-w-full mb-10;
}
#tablearea {
  @apply overflow-scroll max-w-full mb-20;
}
table {
  @apply w-full border-collapse border border-gray-20 rounded-lg shadow-default;
  thead {
    @apply bg-blue text-white  border border-gray-20;
    tr {
      @apply bg-blue  border border-gray-20;
      th {
        @apply px-4 py-1.5 text-lg font-bold;
        &.lv2 {
          @apply border py-0 px-0.5 w-[100px] bg-blue-70 text-center;
          .text {
            @apply flex gap-2 items-center text-sm text-center justify-center;
          }
        }
        &.lv2Children {
          @apply bg-blue-dark w-[80px]  px-3  cursor-pointer;
          .text {
            @apply cursor-pointer;
          }
        }
      }
    }
  }
  tbody {
    @apply bg-white border-gray-20;
    tr {
      @apply border border-gray-20;
      &:hover {
        @apply bg-gray-10;
      }
    }
    td {
      @apply px-4 py-2 text-lg  border border-gray-20;
      &.whitValue {
        @apply bg-green-5 font-bold text-sm text-center text-blue-dark;
      }
      &.noValue {
        @apply bg-gray-10;
      }
    }
  }

  &.style2 {
    thead {
      tr {
        @apply bg-primary;
        th {
          &.lv2 {
            @apply bg-blue-light text-green-70 border-green-5;
          }
          &.lv2Children {
            @apply bg-green-70 text-white;
          }
        }
      }
    }
    tbody {
      tr {
        @apply text-green-70;
      }
      td {
        @apply border-gray-20;
        &.whitValue {
          @apply text-primary;
        }
      }
    }
  }
  &.styleZebra {
    thead {
      @apply bg-gray-80 text-white  border border-gray-20;
      tr {
        @apply bg-gray-90  border border-gray-20;
        th {
          @apply px-4 py-1.5 text-lg font-bold;
          &.lv2 {
            @apply border py-0 px-0.5 w-[100px] bg-gray-70 text-center;
            .text {
              @apply flex gap-2 items-center text-sm text-center justify-center;
            }
          }
          &.lv2Children {
            @apply bg-gray-80 w-[80px]  px-3  cursor-pointer;
            .text {
              @apply cursor-pointer;
            }
          }
        }
      }
    }
    tbody {
      tr:nth-child(even) {
        @apply bg-gray-30 text-gray-90;
      }
      tr:nth-child(odd) {
        @apply bg-gray-20 text-gray-90;
      }

      tr {
        @apply border border-gray-20;
        &:hover {
          @apply bg-gray-70 text-white;
        }
      }
      td {
        &.whitValue {
          @apply bg-transparent  text-black;
        }
        &.noValue {
          @apply bg-transparent;
        }
      }
    }
  }
}
</style>
