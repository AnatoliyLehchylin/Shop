import {render} from "@testing-library/react";
import {Button} from "./button";

it("button snap", () => {

    const onClick = jest.fn();

    const button = render(
        <Button text={"Test"} onClick={onClick}/>
    );
    expect(button).toMatchSnapshot();
});