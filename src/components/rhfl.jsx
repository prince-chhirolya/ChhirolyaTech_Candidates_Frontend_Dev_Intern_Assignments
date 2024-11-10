import dataCuration from "../assests/images/data-curation.png";


import RLHF from "./data-engine/Rlhf";
import DataLabeling from "./data-engine/dataLabeling";
const RHFL = () => {

  return (
    <section className=" bg-transparent relative">
      <div className="container relative">
        <div className="space-y-6 lg:space-y-16">
        <RLHF/>
          <DataLabeling/>
          <div className="box_box__wrapper__jXRQR">
            <div className="flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row-reverse xl:pr-20">
              <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                <p className="font-aeonik text-3.5xl xl:text-4xl mb-2 text-white">
                  Data Curation
                </p>
                <p className="text-zinc-400">
                  Unearth the most valuable data by intelligently managing your
                  dataset
                </p>
                <p className="my-8 text-[#F5F5F5]">
                  Scale’s suite of dataset management, testing, model
                  evaluation, and model comparison tools enable you to “label
                  what matters.” Maximize the value of your labeling budget by
                  identifying the highest value data to label, even without
                  ground truth&nbsp;labels.
                </p>
                <div className="flex items-center gap-x-3 xs:gap-x-6">
                  <a
                    style={{ "-webkit-tap-highlight-color": "transparent" }}
                    className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                    href="https://dashboard.scale.com/nucleus"
                  >
                    <div className="new-button_button--primary__EJ4AI text-white font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[30px] py-[14px]">
                      Curate My Data
                      <span className="inline-block ml-1 font-normal text-white duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                        →
                      </span>
                    </div>
                    <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
                  </a>
                </div>
              </div>
              <div className="-m-3 md:mt-0 md:mx-0 relative lg:flex lg:-translate-x-10 3xl:-translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[630px] xl:h-[420px] select-none aspect-[630/420] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-[calc(100%+24px)]">
                <div className="overflow-hidden rounded-[10px] w-full relative aspect-[630/420] box_box__chat__AoICB">
                  <img
                    alt="data-curation"
                    loading="lazy"
                    width="649"
                    height="432"
                    decoding="async"
                    data-nimg="1"
                    src={dataCuration} // Use the imported image here
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RHFL;
