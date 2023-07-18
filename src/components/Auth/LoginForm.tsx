"use client";

import { Paper, TextInput, PasswordInput, Group, Checkbox, Anchor, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import useStore from "@/store";
import { useCallback, useEffect } from "react";
import { apiLoginUser } from "@/lib/api-requests";
import { LoginUserInput } from "@/lib/validations/user.schema";
import { handleApiError } from "@/lib/helpers";
import toast from "react-hot-toast";

export function LoginForm() {
    const store = useStore();
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
    useEffect(() => {
        store.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const LoginUserFunction = useCallback(
        async (credentials: LoginUserInput) => {
            store.setRequestLoading(true);
            try {
                await apiLoginUser(JSON.stringify(credentials));
                toast.success("Login successful");
                window.location.href = "/users/me";
            } catch (error: any) {
                if (error instanceof Error) {
                    handleApiError(error);
                } else {
                    toast.error(error.message);
                }
            } finally {
                store.setRequestLoading(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [store]
    );
    const onSubmitHandler = (values: LoginUserInput) => {
        LoginUserFunction(values);
    };
    return (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(onSubmitHandler)}>
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
                <Button
                    type="submit"
                    fullWidth
                    mt="xl"
                    loading={store.requestLoading}
                    loaderPosition="right"
                >
                    Sign In
                </Button>
            </form>
        </Paper>
    );
}
