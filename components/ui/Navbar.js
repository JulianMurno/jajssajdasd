import { Link, Text , useTheme } from "@nextui-org/react";
import React from "react";
import Image from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
import NextLink from 'next/link'

const Navbar = () => {
    const theme = useTheme();

    const id = Math.floor(Math.random() * 100) + 1;
    return ( 
        <div className="navbar-custom" style={{backgroundColor: theme?.color.green}}>
            <Image src={backgroundColor} alt= "logo" width="300" height="300" />

            <NextLink id={id}>
                <link>
                <Text color="white" h2 sm={undefined}> P</Text>
                <Text color="white" h2 sm={undefined}> okedex</Text>
                </link>
            </NextLink>
            
            <NextLink id={id}>
                <link>
                <Text color="white" h2 sm={undefined}> Favorites</Text>
                </link>
            </NextLink>
            <Spacer css={{flex: 1} }/>
            
        </div>
     );
}
 
export default Navbar;