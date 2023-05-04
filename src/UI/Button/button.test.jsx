import {render, fireEvent, screen} from "@testing-library/react";
import {Button} from "./button";

const handleClick = jest.fn();

describe("Button", () => {

    test("InTheDocument", () => {
        render(<Button className="btn" text={'ok'} />)
        expect(screen.getByText('ok')).toBeInTheDocument()
    })

    test("props -- type", () => {
        render(<Button className="btn" text={'ok'} />)
        expect(screen.getByText('ok')).toHaveAttribute("type", "button")
    })
    test("props -- children", () => {
        render(<Button className="btn" text={'ok'} />)
        expect(screen.getByText('ok')).not.toBeNull()
    })

    test('called onClick when clicked', () => {
        render(<Button className="btn" text={'ok'} onClick={handleClick} />);
        fireEvent.click(screen.getByText('ok'));
        expect(handleClick).toHaveBeenCalled();
    });
})

