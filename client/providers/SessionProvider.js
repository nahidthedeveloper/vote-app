'use client'
import React from 'react';
import {SessionProvider} from "next-auth/react";

const NextAuthSessionProvider = ({children}) => {
    return React.createElement(SessionProvider, null, children);
};

export default NextAuthSessionProvider;