import {onCartStatusReducer} from "./onCartStatusReducer";
import {actionOnCartStatusTrue, actionOnCartStatusFalse, actionClearCartStatus, actionOnCartStatus} from "../actions";

describe("onCartStatusReducer", () => {

    test("clear status", () => {
        const status = onCartStatusReducer({}, actionClearCartStatus());
        expect(status).toEqual({})
    });

    test("status true", () => {
        const status = onCartStatusReducer({}, actionOnCartStatusTrue(111));
        expect(status).toEqual({111: true})
    });

    test("status false", () => {
        const status = onCartStatusReducer({}, actionOnCartStatusFalse(222));
        expect(status).toEqual({222: false})
    });

    test("cart status", () => {
        const status = onCartStatusReducer({}, actionOnCartStatus({111: false, 222: false}));
        expect(status).toEqual({111: false, 222: false})
    });

})