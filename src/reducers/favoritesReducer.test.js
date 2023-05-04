import {favoritesReducer} from "./favoritesReducer";
import {actionGetFavorites, actionAddFavorites, actionRemoveFavorites} from "../actions";


describe("favoritesReducer", () => {

    test("state, action not transferred", () => {
        const favorites = favoritesReducer(undefined, {});
        expect(favorites).toEqual([]);
    });

    test("state not transferred", () => {
        const favorites = favoritesReducer(undefined, actionGetFavorites([333, 444, 555]));
        expect(favorites).toEqual([333, 444, 555]);
    });

    test("action not transferred", () => {
        const favorites = favoritesReducer([333, 444, 555], {});
        expect(favorites).toEqual([333, 444, 555]);
    });

    test("get favorites", () => {
        const favorites = favoritesReducer([], actionGetFavorites([333, 444, 555]));
        expect(favorites).toEqual([333, 444, 555]);
    });

    test("add to favorites", () => {
        const favorites = favoritesReducer([333, 444], actionAddFavorites(555));
        expect(favorites).toEqual([333, 444, 555]);
    });

    test("remove favourites", () => {
        const favorites = favoritesReducer(
            [333, 444, 555], actionRemoveFavorites(444));
        expect(favorites).toEqual([333, 555]);
    });
});
