import {productReducer} from "./productReducer";
import {actionModalStatus, actionModalTrue, actionModalFalse} from "../actions";

describe("product", () => {

    test("get modal status", () => {
        const status = productReducer({}, actionModalStatus({111: true, 222:false}));
        expect(status).toEqual({111: true, 222:false});
    });

    test("modal status true", () => {
        const status = productReducer({}, actionModalTrue(444));
        expect(status).toEqual({444: true});
    });

    test("modal status false", () => {
        const status = productReducer({}, actionModalFalse(777));
        expect(status).toEqual({777: false});
    });
})