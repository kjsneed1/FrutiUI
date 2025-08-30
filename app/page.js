"use client";

import Button from "@/components/Button.jsx";

export default function Home() {
    return (
        <>
            <div className="center">
                <h1>Button</h1>
                <Button/>
                <h2>Colors</h2>
                <Button color={"default"}>Default button</Button>
                <Button color={"defaultAccent"}>Default accent button</Button>
                <Button color={"dark"}>Dark button</Button>
                <Button color={"darkAccent"}>Dark accent button</Button>
                <Button color={"red"}>Red button</Button>
                <Button color={"orange"}>Orange button</Button>
                <Button color={"yellow"}>Yellow button</Button>
                <Button color={"lime"}>Lime button</Button>
                <Button color={"green"}>Green button</Button>
                <Button color={"cyan"}>Cyan button</Button>
                <Button color={"blue"}>Blue button</Button>
                <Button color={"purple"}>Purple button</Button>
                <Button color={"white"}>White button</Button>
                <Button color={"gray"}>Gray Button</Button>
                <Button color={"black"}>Black Button</Button>
                <h2>Bordered Text</h2>
                <Button color={"default"} borderText={true}>
                    Default border text
                </Button>
                <Button color={"defaultAccent"} borderText={true}>
                    Default accent border text
                </Button>
                <Button color={"dark"} borderText={true}>
                    Dark border text
                </Button>
                <Button color={"darkAccent"} borderText={true}>
                    Dark accent border text
                </Button>
                <h2>Sizes</h2>
                <Button size="xsmall">X-Small</Button>
                <Button size="small">Small</Button>
                <Button size="default">Default</Button>
                <Button size="large">Large</Button>
                <Button size="xlarge">X-Large</Button>
                <h2>Disabled</h2>
                <Button disabled>Disabled default</Button>
                <Button disabled color={"dark"}>Disabled dark</Button>
                <Button disabled color={"red"}>Disabled red</Button>
                <h2>Shape</h2>
                <Button shape = "default">Default</Button>
                <Button shape = "square">Square</Button>
                <Button shape = "round">Round</Button>
                <Button shape = "circle">Circle</Button>
                <h2>Transparent</h2>
                <div className="transButtons">
                    <Button transparent>Default transparent</Button>
                    <Button transparent disabled>Disabled transparent</Button>
                    <Button transparent color={"dark"}>Dark transparent</Button>
                    <Button transparent color={"darkAccent"}>Dark accent transparent</Button>
                </div>
            </div>
        </>
    );
}
