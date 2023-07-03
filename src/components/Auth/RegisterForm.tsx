"use client";
import { useRouter } from "next/navigation";
import { Paper, TextInput, PasswordInput, Space, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { RegisterUserInput } from "@/lib/validations/user.schema";
import useStore from "@/store";
import { apiRegisterUser } from "@/lib/api-requests";
import { handleApiError } from "@/lib/helpers";
import { toast } from "react-hot-toast";

export function RegisterForm() {
    const router = useRouter();
    const store = useStore();
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
    const RegisterUserFunction = async (credentials: RegisterUserInput) => {
        store.setRequestLoading(true);
        try {
            const user = await apiRegisterUser(JSON.stringify(credentials));
            store.setAuthUser(user);
            toast.success("Register successful");
            return router.push("/login");
        } catch (error: any) {
            if (error instanceof Error) {
                handleApiError(error);
            } else {
                toast.error(error.message);
                // console.log("Error message:", error.message);
            }
        } finally {
            store.setRequestLoading(false);
        }
    };
    const onSubmitHandler = (values: RegisterUserInput) => {
        RegisterUserFunction(values);
    };
    return (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(onSubmitHandler)}>
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
                <Button
                    type="submit"
                    fullWidth
                    mt="xl"
                    loading={store.requestLoading}
                    loaderPosition="right"
                >
                    Sign Up
                </Button>
            </form>
        </Paper>
    );
}
