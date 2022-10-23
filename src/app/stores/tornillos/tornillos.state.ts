import { Tornillo, TornilloTableColumnDef } from "src/app/services/tornillos.service";

export type TornillosState = {
  nextId: number;
  tornillos: Tornillo[];
  selectedTornillo?: Tornillo;
  columnOrder: TornilloTableColumnDef[];
}
