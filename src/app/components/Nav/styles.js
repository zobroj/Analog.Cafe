// tools
import styled from "styled-components"
import { Link, IndexLink } from "react-router"
import React from "react"

// css
const containerVerticalSpacing = props => props.theme.size.font.make.larger / 1.2
export const NavContainer = styled.nav`
	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.title.auto }
	position: 				relative;
	z-index: 					${ props => props.theme.layer.up };
	padding-top: 			${ containerVerticalSpacing }em;
	padding-bottom: 	${ containerVerticalSpacing }em;
	
	> ul {
		padding: 					0;
		display: 					flex;
		align-items: 			center;
		justify-content: 	center;
		margin: 					0 auto;		
	}
`
const StyledLink = styled(Link)`
	background: 			${ props => props.theme.color.background }; 
	text-decoration: 	none;
	position: 				relative;
	&.active::before {
		content: 			"";
		width: 				110%;
		left: 				-5%;
		height: 			2px;
		bottom: 			-5px;
		background: 	${ props => props.theme.color.foreground };
		position: 		absolute;
	}
`
export const NavLink = props => {
	return <StyledLink {...props} activeClassName="active"/>
}
export const NavIndexLink = props => {
	return <IndexLink {...props} activeClassName="active"/>
}

export const NavItem = styled.li`
	display: 				block;
	text-align: 		center;
	width: 					7em;
	
	${ props => props.center ? 	props => props.theme.size.breakpoint.max.m`order: 1;` : false }
	${ props => props.left ? 		props => props.theme.size.breakpoint.max.m`order: 0;` : false }
	${ props => props.right ? 	props => props.theme.size.breakpoint.max.m`order: 2;` : false }
	${ props => props.prime ? 	false : props => props.theme.size.breakpoint.max.m`display:none;` }
`