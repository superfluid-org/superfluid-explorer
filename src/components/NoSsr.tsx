import dynamic from "next/dynamic";
import { FC } from "react";

const Noop: FC = ({ children }) => {
    return <>{children}</>
}

const NoSsr = dynamic(() => Promise.resolve(Noop), { ssr: false });

export default NoSsr;