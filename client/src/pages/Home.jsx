import React, {useState, useEffect} from 'react';
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const {address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
    console.log(campaigns);
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