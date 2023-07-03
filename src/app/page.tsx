"use client";
import Header from "@/components/Header";
import { Container, Text, Title, createStyles, rem } from "@mantine/core";
import { Highlight } from "@mantine/core";

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
    return (
        <>
            <Header />
            <Container pt="sm" size="lg">
                <div className={classes.inner}>
                    <Title
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        className={classes.title}
                    >
                        JWT Authentication demo
                    </Title>
                    <Title className={classes.subtitle}>
                        Based on Next.js 13, Prisma, Vercel Postgres.
                    </Title>

                    <Text className={"opacity-75 max-w-full sm:max-w-[500px]"} mt={30}>
                        This page is not protected by authentication.
                        <Highlight highlight={["without", "logging", "in"]}>
                            You can access it without logging in.
                        </Highlight>
                    </Text>
                </div>
            </Container>
        </>
    );
}
