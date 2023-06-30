"use client";
import { useRouter } from "next/navigation";
import { Paper, TextInput, PasswordInput, Space, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export function RegisterForm() {
    const router = useRouter();
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validate: {
            name: (value) => (value.length < 3 ? "Name must have at least 3 letters" : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) =>
                value.length < 6 ? "Password must have at least 6 letters" : null,
            passwordConfirm: (value, values) =>
                value !== values.password ? "Passwords do not match" : null,
        },
    });

    const handleRegister = () => {
        fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(form.values),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.status === 201) router.push("/");
                notifications.show({
                    title: "Error",
                    message: "Invalid email or password",
                    color: "red",
                    icon: <IconX />,
                });
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
            <form onSubmit={form.onSubmit(handleRegister)}>
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                    {...form.getInputProps("name")}
                />
                <TextInput
                    label="Email"
                    placeholder="test@example.com"
                    required
                    mt="md"
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                    {...form.getInputProps("password")}
                />
                <PasswordInput
                    label="PasswordConfirm"
                    placeholder="Confirm password"
                    required
                    mt="md"
                    {...form.getInputProps("passwordConfirm")}
                />
                <Space h="md" />
                <Button type="submit" fullWidth mt="xl">
                    Sign Up
                </Button>
            </form>
        </Paper>
    );
}
