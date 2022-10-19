import {
    Burger, Button, Container, createStyles, Drawer, Group, MediaQuery, useMantineTheme
} from "@mantine/core";
import { useToggle, useWindowScroll } from "@mantine/hooks";
import React, { useState } from "react";
import { BrandWhatsapp, PhoneCall } from "tabler-icons-react";
import logo from "../assets/logo.png";

const useStyles = createStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        height: "10%",
        marginBottom: 30,
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        textDecoration: "none",
        color: "white",
        borderBottomColor: "orange",

        fontWeight: 500,
        fontSize: 14,
        "&:hover": {
            borderBottom: "1px solid orange",
            padding: "8px 12px 7px 12px",
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },
    body: {
        paddingLeft: 54,

        fontSize: theme.fontSizes.sm,
    },

}));

export default function Header({ children }) {
    const { classes, cx } = useStyles();

    const [opened2, setOpened] = useState(false);
    const [openedSide, setOpenedSide] = useState(false);

    const [scroll, scrollTo] = useWindowScroll();

    const links = [
        { label: "HOME", link: "/" },
        { label: "ABOUT", link: "/about" },
        { label: "PROFILES", link: "/profile" },
        { label: "CONTACT", link: "/contact" },
    ];

    const theme = useMantineTheme();
    const [opened, toggleOpened] = useToggle(false);
    const [active, setActive] = useState(links[0].link);




    return (
        <div>
            <div
                className={"sticky_nav_bar_header"}
            >
                <Container size="lg" onScroll>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                            <img
                                src={logo}
                                style={{ cursor: "pointer" }}

                                width={190}
                            />
                        </MediaQuery>
                        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                            <img
                                src={logo}
                                style={{ cursor: "pointer" }}
                                width={100}
                            />
                        </MediaQuery>
                        <Group spacing={5} className="links">
                            <Button variant="outline" color="pink" radius="xl">
                                <PhoneCall size={16} style={{ marginRight: 5 }} /> or <BrandWhatsapp size={16} style={{ marginRight: 5, marginLeft: 5 }} /> 989080980980
                            </Button>
                            <Button
                                radius="xl"
                                size="xs"
                                color="red"
                                onClick={() => setOpened(true)}
                                sx={{ height: 30 }}
                                ml={15}
                            >
                                Join Today
                            </Button>
                        </Group>
                        <Group spacing={5} className="mobile_links">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Button
                                    radius="xl"
                                    size="xs"
                                    color="red"
                                    onClick={() => setOpened(true)}
                                    sx={{ height: 30 }}
                                    ml={15}
                                >
                                    Join Today
                                </Button>
                                <div largerThan="sm" styles={{ display: "none", }}>
                                    <Burger
                                        opened={openedSide}
                                        onClick={() => setOpenedSide((o) => !o)}
                                        size="sm"
                                        color={theme.colors.gray[6]}
                                        mr="xl"
                                        ml={15}
                                    />
                                </div>
                            </div>
                            <Drawer
                                className="for_background"
                                opened={openedSide}
                                onClose={() => setOpenedSide(false)}
                                padding="xs"
                                size="xs"
                                position="right"
                                transition="slide-left"
                                transitionDuration={250}
                                transitionTimingFunction="ease"
                            >
                                <Button variant="outline" color="pink" radius="xl" size="xs">
                                    <PhoneCall size={12} style={{ marginRight: 2 }} /> or <BrandWhatsapp size={12} style={{ marginRight: 2, marginLeft: 2 }} /> 989080980980
                                </Button>

                            </Drawer>
                        </Group>
                    </div>
                </Container>
            </div>
        </div>
    )
}
