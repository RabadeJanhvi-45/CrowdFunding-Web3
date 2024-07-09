import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PupUp } from "../Components/index";

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState([]);
  const [userCampaigns, setUserCampaigns] = useState([]);


  useEffect(() => {
        const getCampaignsData = getCampaigns(); // Correctly await and assign the result
        const UserCampaignsData =  getUserCampaigns(); // Correctly await and assign the result
      return async () => {
        const allData = await getCampaignsData; // Correctly await and assign the result
        const userData = await UserCampaignsData; // Correctly await and assign the result

        setAllCampaigns(allData); // Update state with fetched data
        setUserCampaigns(userData); // Update state with fetched data
        console.log(allData);
      } ;
    },[]);

    // Donation pop-up
    const [openModel,setOpenModel]=useState(false);
    const [donateCampaign,setDonateCampaign]=useState();
  console.log("Donate To Campaign: ", donateCampaign);
  console.log("User Campaigns:", userCampaigns);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaign"
        allCampaigns={allCampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      
      {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
