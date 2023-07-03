"use client";
import { Loader } from "@mantine/core";

export default function loading() {
    return (
        <div className="h-screen flex items-center justify-center bg-slate-100">
            <Loader color="orange" size="xl" variant="dots" />
        </div>
    );
}
