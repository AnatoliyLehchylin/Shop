import {cartReducer} from "./cartReducer";
import {actionGetCart, actionAddCart, actionRemoveCart, actionClearCart} from "../actions";


describe("cartReducer", () => {

    test("state, action not transferred", () => {
        const cart = cartReducer(undefined, {});
        expect(cart).toEqual([]);
    });

    test("state not transferred", () => {
        const cart = cartReducer(undefined, actionGetCart([111, 222, 333]));
        expect(cart).toEqual([111, 222, 333]);
    });

    test("action not transferred", () => {
        const cart = cartReducer([111, 222, 333], {});
        expect(cart).toEqual([111, 222, 333]);
    });

    test("get cart", () => {
        const cart = cartReducer([], actionGetCart([111, 222, 333]));
        expect(cart).toEqual([111, 222, 333]);
    });

    test("add to cart", () => {
        const cart = cartReducer([111, 222], actionAddCart(333));
        expect(cart).toEqual([111, 222, 333]);
    });

    test("remove cart", () => {
        const cart = cartReducer([111, 222, 333], actionRemoveCart(111));
        expect(cart).toEqual([222, 333]);
    });

    test("clear cart", () => {
        const cart = cartReducer([111, 222, 333], actionClearCart());
        expect(cart).toEqual([]);
    });
});
