import { Tornillo } from "src/app/services/tornillos.service";

export type TornillosState = {
  nextId: number;
  tornillos: Tornillo[];
  selectedTornillo?: Tornillo;
}
