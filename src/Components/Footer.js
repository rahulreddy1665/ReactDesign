import {
    Button, Container,
    createStyles, Text, SimpleGrid
} from "@mantine/core";
import React from "react";
import LazyShow from "./LazyShow";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 50,
        paddingTop: theme.spacing.xl * 2,
        backgroundColor: "#FFF3E9",
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 700,
        marginBottom: theme.spacing.xs / 2,
        color: theme.black,
        [theme.fn.smallerThan("sm")]: {
            fontSize: 20,
            textAlign: 'center',
            maxWidth: 560,
            lineHeight: 1.2,
            fontWeight: 600,
        },
    },
    description: {
        color: theme.black,
        fontFamily: `Poppins`,
        fontWeight: 100,
        maxWidth: 750,
        fontSize: 16,
        marginTop: 20,
        textAlign: "center",
        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: 12,
        },
    },
    afterFooter: {
        textAlign: "center",
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        backgroundColor: "#000000",
        borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
        display: "flex",
        justifyContent: "center"
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
}));

function Footers() {
    const { classes } = useStyles();
    return (
        <LazyShow>
            <footer className={classes.footer}>
                <Container size="sm" className={classes.main}>
                    <Text className={classes.title}> Still Not Sure?</Text>
                    <Text className={classes.description}>I don't want to sign up now but i wish to receive more information on the RED program and other programs by Bharat Thakur's Artistic Yoga</Text>
                    <Button variant="outline" color="red" radius="xl" mt={35}>
                        Download Our E-Book
                    </Button>
                </Container>
                <div size="lg" className={classes.afterFooter}>
                    <SimpleGrid
                        mt={60}
                        cols={2}
                        breakpoints={[
                            { maxWidth: 980, cols: 1, spacing: "xs" },
                            { maxWidth: 755, cols: 1, spacing: "xs" },
                        ]}
                    >
                        <div>
                            <Text style={{ color: 'white' }}>
                                &copy; {new Date().getFullYear()} Copyright-RED
                            </Text>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Text className="footer2" style={{ color: 'white', marginRight: 10 }}> &#x2022; Privacy Policy</Text>
                            <Text className="footer2" style={{ color: 'white' }}>&#x2022; Terms of use</Text>
                        </div>

                    </SimpleGrid>
                </div>
            </footer>
        </LazyShow>
    );
}

export default Footers;
