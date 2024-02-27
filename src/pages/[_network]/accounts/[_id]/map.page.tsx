import { NextPage } from "next";
import { useContext } from "react";
import IdContext from "../../../../contexts/IdContext";
import { useNetworkContext } from "../../../../contexts/NetworkContext";
import Map from '../../../../components/Map/Map'

const MapPage: NextPage = () => {
    const network = useNetworkContext()
    const accountAddress = useContext(IdContext)

    return <Map network={network} accountAddress={accountAddress} />;
}

export default MapPage;