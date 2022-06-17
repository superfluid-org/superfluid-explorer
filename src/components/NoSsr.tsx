import dynamic from "next/dynamic";
import { FC, PropsWithChildren } from "react";

const Noop: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <>{children}</>
}

const NoSsr = dynamic(() => Promise.resolve(Noop), { ssr: false });

export default NoSsr;