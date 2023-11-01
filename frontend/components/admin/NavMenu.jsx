import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
	AppBar,
	Avatar,
	Divider,
	Drawer,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const SiteBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const SiteDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavMenu = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className="flex">
			<SiteBar
				position="fixed"
				open={open}
				sx={{ backgroundColor: "#101010" }}
			>
				<Toolbar className="relative">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}
					>
						<MenuRoundedIcon
							className="text-[32px] cursor-pointer"
							sx={{ "&:hover": { path: { color: "#ff9900" } } }}
						/>
					</IconButton>
					<IconButton
						onClick={(event) =>
							setAnchorElUser(event.currentTarget)
						}
						className="cursor-pointer absolute right-8"
					>
						<Avatar alt="admin name" src="/images/poster.webp" />
					</IconButton>
					<Menu
						sx={{ mt: "45px" }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElUser)}
						onClose={() => setAnchorElUser(null)}
					>
						{settings.map((setting) => (
							<MenuItem
								key={setting}
								onClick={() => setAnchorElUser(null)}
							>
								{setting}
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</SiteBar>
			<SiteDrawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ArrowBackIosNewRoundedIcon
								sx={{
									fontSize: "24px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						) : (
							<ArrowForwardIosRoundedIcon
								sx={{
									fontSize: "24px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						)}
					</IconButton>
				</DrawerHeader>
			</SiteDrawer>
		</div>
	);
};

export default NavMenu;
