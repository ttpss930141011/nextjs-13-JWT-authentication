"use client";
import { MantineProvider } from "@mantine/core";
import RootStyleRegistry from "./emotion";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <RootStyleRegistry>
            <MantineProvider>
                {children}
            </MantineProvider>
        </RootStyleRegistry>
    );
}
