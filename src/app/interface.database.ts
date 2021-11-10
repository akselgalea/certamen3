import { ICliente } from "./interface.cliente";
import { IGenero } from "./interface.genero";
import { IPais } from "./interface.pais";

export interface DataBase {
    cards: Array<ICliente>,
    genders: Array<IGenero>,
    countries: Array<IPais>
}
