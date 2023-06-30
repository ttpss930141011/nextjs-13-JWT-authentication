"use client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import RootStyleRegistry from "./emotion";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <RootStyleRegistry>
            <MantineProvider>
                {children}
                <Notifications />
            </MantineProvider>
        </RootStyleRegistry>
    );
}
