"use client";

import { Paper, TextInput, PasswordInput, Group, Checkbox, Anchor, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

export function LoginForm() {
    const router = useRouter();
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) =>
                value.length < 6 ? "Password must have at least 6 letters" : null,
        },
    });
    const handleLogin = () => {
        // console.log(form.values);
        fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(form.values),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    router.push("/");
                    notifications.show({
                        title: "Success",
                        message: "Login successful",
                        color: "green",
                        icon: <IconCheck />,
                    });
                } else {
                    notifications.show({
                        title: "Error",
                        message: "Invalid email or password",
                        color: "red",
                        icon: <IconX />,
                    });
                }
            })
            .catch((err) => {
                notifications.show({
                    title: "Error",
                    message: err.message,
                    color: "red",
                    icon: <IconX />,
                });
            });
    };
    return (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(handleLogin)}>
                <TextInput
                    label="Email"
                    placeholder="test@example.com"
                    required
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    {...form.getInputProps("password")}
                />
                <Group position="apart" mt="md">
                    <Checkbox label="Remember me" />
                    <Anchor size="sm" href="#">
                        Forgot Password？
                    </Anchor>
                </Group>
                <Button type="submit" fullWidth mt="xl">
                    Sign In
                </Button>
            </form>
        </Paper>
    );
}
