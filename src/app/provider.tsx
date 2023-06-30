"use client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
            <Notifications />
        </MantineProvider>
    );
}
