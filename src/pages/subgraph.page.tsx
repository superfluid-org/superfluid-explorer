import dynamic from "next/dynamic";
import { NextPage } from "next";
import FullPageLoader from "../components/FullPageLoader";

const NoSsr = dynamic(() => import("../components/SubgraphExplorer"), {
  ssr: false,
  loading: () => <FullPageLoader />,
});

// NOTE: Don't start loading the Subgraph component on the server.
const SubgraphPage: NextPage = () => {
  return <NoSsr />;
};

export default SubgraphPage;
