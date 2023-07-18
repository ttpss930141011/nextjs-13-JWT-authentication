"use client";
import Header from "@/components/Header";
import { Button, Container, Mark, Text, Title, createStyles, rem } from "@mantine/core";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
    inner: {
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        [theme.fn.smallerThan("md")]: {
            marginRight: 0,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        fontSize: rem(64),

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: rem(34),
            lineHeight: 1.15,
        },
    },

    subtitle: {
        paddingTop: theme.spacing.xl,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 800,
        lineHeight: 1.05,
        fontSize: rem(40),

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: rem(26),
            lineHeight: 1.15,
        },
    },
}));
export default function Home() {
    const { classes } = useStyles();
    const router = useRouter();
    return (
        <>
            <Header />
            <Container pt="sm" size="xl">
                <div className={classes.inner}>
                    <Title
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        className={classes.title}
                    >
                        JWT Authentication demo
                    </Title>
                    <Title className={classes.subtitle}>
                        Based on{" "}
                        <Text
                            component="a"
                            td="underline"
                            href="https://nextjs.org/"
                            variant="gradient"
                            gradient={{ from: "yellow", to: "red", deg: 105 }}
                        >
                            Next.js 13,{" "}
                        </Text>
                        <Text
                            component="a"
                            href="https://mantine.dev/"
                            variant="gradient"
                            gradient={{ from: "red", to: "purple", deg: 105 }}
                        >
                            Mantine,{" "}
                        </Text>
                        <Text
                            component="a"
                            href="https://www.prisma.io/"
                            variant="gradient"
                            gradient={{ from: "purple", to: "blue", deg: 105 }}
                        >
                            Prisma,{" "}
                        </Text>
                        <Text
                            component="a"
                            href="https://vercel.com/storage/postgres"
                            variant="gradient"
                            gradient={{ from: "blue", to: "green", deg: 105 }}
                        >
                            Vercel Postgres,{" "}
                        </Text>
                        <Text
                            component="a"
                            href="https://zustand-demo.pmnd.rs/"
                            variant="gradient"
                            gradient={{ from: "green", to: "yellow", deg: 105 }}
                        >
                            Zustand.
                        </Text>
                    </Title>
                    <Text className={"opacity-75 max-w-full sm:max-w-[700px]"} mt={30}>
                        This page is not protected by authentication. You can access it{" "}
                        <Mark> without logging in.</Mark>
                    </Text>
                    <Button
                        variant="gradient"
                        gradient={{ from: "cyan", to: "green" }}
                        className="mt-10"
                        onClick={() => router.push("/users/me")}
                    >
                        Click Here to Access Protected Page
                    </Button>
                </div>
            </Container>
        </>
    );
}
