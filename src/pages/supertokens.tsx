import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

// redirects the generic url /supertokens to the default network specific page
// if changing this redirect, also apply those changes in SuperTokensLegacyRedirect
const SuperTokensRedirect: NextPage = () => {
    const router = useRouter();
    useEffect(() => void router.replace("/matic/supertokens") ,[]);

    return null;
};

export default SuperTokensRedirect;