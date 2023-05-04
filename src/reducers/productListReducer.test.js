import {productListReducer} from "./productListReducer";
import {actionDrinks} from "../actions";

describe("drinks", () => {
    test("get drinks", () => {
        const drinks = productListReducer([], actionDrinks([{name: "aaa", number: 111}, {name: "bbb", number: 222}]));
        expect(drinks).toEqual([{name: "aaa", number: 111}, {name: "bbb", number: 222}])
    })
})