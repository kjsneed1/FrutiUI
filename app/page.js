"use client";

import Button from "@/components/Button.jsx";

export default function Home() {
    return (
        <>
            <div className="center">
                <Button color={"default"} size={"small"} onClick={() => console.log("Hello!")}>Default button</Button>
                <Button color={"default"} disabled>
                    Default button
                </Button>
                <Button color={"defaultAccent"}>Default accent button</Button>
                <Button color={"dark"}>Dark button</Button>
                <Button color={"dark"} disabled>
                    Default button
                </Button>
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
            </div>
        </>
    );
}
