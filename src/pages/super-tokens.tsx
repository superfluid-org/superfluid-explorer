import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

// redirects the legacy url /super-tokens to the default network specific page
const SuperTokensLegacyRedirect: NextPage = () => {
    const router = useRouter();
    useEffect(() => void router.replace("/matic/supertokens") ,[]);

    return null;
};

export default SuperTokensLegacyRedirect;