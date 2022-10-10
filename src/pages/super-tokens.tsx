import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SuperTokensRedirect: NextPage = () => {
    const router = useRouter();
    useEffect(() => void router.replace("/matic/supertokens") ,[]);

    return null;
};

export default SuperTokensRedirect;