import {onFavoritesStatusReducer} from "./onFavoritesStatusReducer";
import {actionOnFavoritesStatusTrue, actionOnFavoritesStatusFalse, actionOnFavoritesStatus} from "../actions";

describe("onFavoritesStatusReducer", () => {

    test("status true", () => {
        const status = onFavoritesStatusReducer({}, actionOnFavoritesStatusTrue(111));
        expect(status).toEqual({111: true})
    });

    test("status false", () => {
        const status = onFavoritesStatusReducer({}, actionOnFavoritesStatusFalse(222));
        expect(status).toEqual({222: false})
    });

    test("favorites status", () => {
        const status = onFavoritesStatusReducer({}, actionOnFavoritesStatus({111: false, 222: false}));
        expect(status).toEqual({111: false, 222: false})
    });

})