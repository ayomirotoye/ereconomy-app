import { NextPage } from "next"
import { DepositIcon } from "../assets/icons/DepositIcon"
import { DeveloperIcon } from "../assets/icons/DeveloperIcon"
import { LockFundIcon } from "../assets/icons/LockFundIcon"
import { PowerButtonIcon } from "../assets/icons/PowerButtonIcon"
import { RankIcon } from "../assets/icons/RankIcon"
import { TargetSavingIcon } from "../assets/icons/TargetSavingIcon"
import IntroContent from "../commons/static/introContent.json"
import Button from "../components/buttons/Button"
import InfoCard from "../components/cards/InfoCard"
import PageWrapper from "../components/PageWrapper"


const Home: NextPage = () => {
  return (
    <PageWrapper isHeaderVisible={true}>
      <div className="md:grid grid-cols-2 gap-4 mx-14 my-10">
        <div className="flex flex-col justify-center items-left">
          <h6 className="md:my-10 text-left text-3xl md:text-6xl leading-regular text-secondary-450 font-semibold">{(IntroContent.title)}</h6>
          <p className="mt-5 md: mt-3 text-left text-sm md:text-md">{(IntroContent.text)}</p>
        </div>
        <div className="mt-5 md:mt-0">
          <DeveloperIcon />
        </div>
      </div>
      <div className="my-[128px] flex justify-center font-bold">
        <p className="text-4xl text-secondary-450">How to Earn</p>
      </div>
      <div className="md:grid grid-cols-4 md:gap-4 md:mx-5 my-10">
        <InfoCard title={"Deposit funds"}
          text={"Build a dedicated savings faster on your terms automatically or manually."}
          image={<DepositIcon className="h-40 w-40"
            fill={"green"} stroke={"green"} strokeWidth={2} />}
        />

        <InfoCard title={"Lockup funds"}
          text={"Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."}
          image={<LockFundIcon className="h-40 w-40" />}
        />

        <InfoCard title={"Target savings"}
          text={"Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."}
          image={<TargetSavingIcon className="h-40 w-40" />}
        />
        <InfoCard title={"Save consistently"}
          text={"Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."}
          image={<RankIcon className="h-40 w-40" />}
        />
      </div>
      <div className="md:grid grid-cols-2 gap-4 mx-14 my-[128px]">
        <div>
          <div className="flex justify-center">
            <img width={"250px"} src={"https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/invest_c3fcc60df0/invest_c3fcc60df0.png"} />
          </div>
        </div>
        <div>
          <p className="md:w-1/3 mt-5 md:mt-0 text-sm px-3 py-2 bg-secondary-450 rounded-full text-white">Up to 15% Returns </p>
          <h2 className="text-5xl py-10 font-bold">Access investment opportunities</h2>
          <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
          <Button buttonText="Start Now" className="text-left w-full md:w-1/3 py-2 font-bold bg-green-900 text-white rounded-lg border-0 cursor-pointer"><PowerButtonIcon /></Button>
        </div>
      </div>
    </PageWrapper >
  )
}

export default Home
