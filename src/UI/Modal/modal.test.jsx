import {render, screen} from "@testing-library/react";
import {Modal} from "./Modal";

describe("Modal component", () => {

    test("InTheDocument", () => {
        render(<Modal openModal={true} header={"ok"} text={"yap"}/>);
        expect(screen.getByText("ok")).toBeInTheDocument();
        expect(screen.getByText("yap")).toBeInTheDocument();
    });

    test("props -- className", () => {
        render(<Modal openModal={true} header={"ok"} text={"yap"}/>);
        expect(screen.getByText("ok")).toHaveClass("headerModal");
        expect(screen.getByText("yap")).toHaveClass("textModal");
    });

    test("props -- children", () => {
        render(<Modal openModal={true} header={"ok"} text={"yap"}/>);
        expect(screen.getByText("ok")).not.toBeNull();
    });
})