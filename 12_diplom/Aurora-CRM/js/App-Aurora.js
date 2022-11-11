import { Layout } from "./Layout.js";
import { Table } from "./Table.js";

export class AppAurora {
  constructor(container, dataTable) {
    this.layout = new Layout(container)
    this.table = new Table(this.layout.TableContainer, dataTable)


  }
};

