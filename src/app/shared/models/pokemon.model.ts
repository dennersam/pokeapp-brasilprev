import { Images } from "./images.model";

export class Pokemon{
  id: string = '';
  name: string = '';
  imgSmall: Images["small"] = '';
  imgLarge: Images["large"] = '';
  types: any[] = [];
  attacks: any[] = [];
  resistances: string[] = [];
  weaknesses: string[] = [];
}
