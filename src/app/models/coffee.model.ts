import { ReviewModel } from "./review.model";
import { RecipyModel } from "./recipy.model";

export interface CoffeeModel {
    id: string,
    name: string,
    roastery: string,
    country: string,
    region: string,
    producer: string,
    farm: string,
    altitude: number,
    processingMethod : string,
    flavour: string,
    description: string
}