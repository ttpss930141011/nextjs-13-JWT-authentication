import { apiLogoutUser } from "@/lib/api-requests";
import { handleApiError } from "@/lib/helpers";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import {
    createStyles,
    Header as HeaderBase,
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
} from "@mantine/core";
import { Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const store = useStore();
    const user = useSession();
    const router = useRouter();

    const LogoutUserFunction = async () => {
        store.setRequestLoading(true);
        try {
            await apiLogoutUser();
            toast.success("Logout successful");
            return router.push("/");
        } catch (error: any) {
            // console.log(error);
            if (error instanceof Error) {
                handleApiError(error);
            } else {
                toast.error(error.message);
                // console.log("Error message:", error.message);
            }
        } finally {
            store.setRequestLoading(false);
            store.reset();
        }
    };

    return (
        <Box pb={120}>
            <HeaderBase height={60} px="md">
                <Group position="apart" sx={{ height: "100%" }}>
                    <Image
                        className="cursor-pointer"
                        src="/favicon.ico"
                        alt="Next.js Logo"
                        width={30}
                        height={30}
                        onClick={() => router.push("/")}
                    />
                    <Group className={classes.hiddenMobile}>
                        {user ? (
                            <Button variant="default" onClick={LogoutUserFunction}>
                                Log out
                            </Button>
                        ) : (
                            <>
                                <Button variant="default" onClick={() => router.push("/login")}>
                                    Log in
                                </Button>
                                <Button onClick={() => router.push("/register")}>Sign up</Button>
                            </>
                        )}
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        className={classes.hiddenDesktop}
                    />
                </Group>
            </HeaderBase>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
                    <Group position="center" grow pb="xl" px="md">
                        {user ? (
                            <Button variant="default" onClick={LogoutUserFunction}>
                                Log out
                            </Button>
                        ) : (
                            <>
                                <Button variant="default" onClick={() => router.push("/login")}>
                                    Log in
                                </Button>
                                <Button onClick={() => router.push("/register")}>Sign up</Button>
                            </>
                        )}
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
