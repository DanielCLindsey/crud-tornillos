import { Tornillo, TornilloTableColumnDef } from "src/app/services/tornillos.service";

export type TornillosState = {
  tornillos: Tornillo[];
  selectedTornillo?: Tornillo;
  columnOrder: TornilloTableColumnDef[];
}
