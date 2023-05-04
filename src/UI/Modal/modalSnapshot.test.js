import {render} from "@testing-library/react";
import {Modal} from "./modal";

test("modal snap", () => {
    const modal = render(
        <Modal openModal={true}/>
    );
    expect(modal).toMatchSnapshot();
});