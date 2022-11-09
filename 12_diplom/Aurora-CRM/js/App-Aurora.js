import { Layout } from "./Layout.js";
import { Table } from "./Table.js";

export class AppAurora {
  constructor(container) {
    this.layout = new Layout(container)
    this.table = new Table(this.layout.TableContainer)


  }
};

