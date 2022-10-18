import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtocolRedirect: NextPage = () => {
    const router = useRouter();
    useEffect(() => void router.replace("/matic/protocol") ,[]);

    return null;
};

export default ProtocolRedirect;