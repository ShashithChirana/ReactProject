import campaignsImg from "../assets/campaigns.svg"
import campaignsImg1 from "../assets/campaigns1.svg"

const Campaigns = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
            <img src={campaignsImg} alt=""/>
        </div>

        {/*Campaigns content */}
        <div className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal">You can launch a campaign that teaching 
             <span className="text-secondary"> about traffic rules.</span></h2>
            <p className="text-tartiary text-lg mb-7">You can teach the students about the traffic rules and give them various online practice papers to train them for the exam.</p>
            <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      <div className="h-12"></div>

      {/*second campaign */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/3">
            <img src={campaignsImg1} alt=""/>
        </div>

        {/*Campaigns content */}
        <div className="md:w-2/5">
            <h2 className="md:text-5x1 text-5xl font-bold text-primary mb-5 leading-normal">You can teach about the 
             <span className="text-secondary"> license renewal process.</span></h2>
            <p className="text-tartiary text-lg mb-7">You can teach how to renew a license and what to do when a license is lost.It's convenient for the newcomers.</p>
            <button className="btnPrimary">Get Started</button>
        </div>
      </div>

    </div>
  );
};

export default Campaigns;
