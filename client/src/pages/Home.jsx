import React, {useState, useEffect} from 'react';
import {useStateContext} from '../context';
import {DisplayCampaigns} from '../components';

const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const {address, contract, getCampaigns, stateCampaigns} = useStateContext();

    const fetchCampaigns = async () => {
        if (stateCampaigns.length > 0) {
            console.log(stateCampaigns)
            setCampaigns(stateCampaigns);
        } else {
            const data = await getCampaigns();
            console.log(data)
            setCampaigns(data);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract])

    return (
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}

export default Home