import React from "react";
import styled from "styled-components";

const BodyDiv = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const MidDivOne = styled.div`
  height: calc(95vh - 4.5rem);
  display: flex;
`;

const MidOne = styled.div`
  margin: auto 0px;
`
const MidDivOneOne = styled.div`
  font-size: 90px;
  width: 60vw;
  text-align: center;
  /* padding-top: 150px; */
`;

const MidDivOneTwo = styled.div`
  width: 60vw;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`
const SpanContent = styled.span`
  background: linear-gradient(50deg, #714dff, #9c83ff 31.28%, #e151ff 77.97%, #fff759 95.64%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MidDivOneThree = styled.div`
  width: 60vw;
  text-align: center;
  margin-top: 10px;
`

const DemoButton = styled.button`
  /* background-image: linear-gradient( to bottom, #020252, #a007a0); */
  background-image: radial-gradient(231.94% 231.94% at 50% 100%, rgb(138, 108, 255) 0px, rgba(53, 41, 128, 0) 25.24%), linear-gradient(rgba(243, 238, 255, 0), rgba(243, 238, 255, 0.04)), initial;
    background-color: rgba(147, 130, 255, 0.01);
    box-shadow: 0 0 0 0 rgba(16, 0, 51, .4), 0 2px 5px 0 rgba(16, 0, 51, .39), 0 8px 8px 0 rgba(16, 0, 51, .34), 0 19px 11px 0 rgba(16, 0, 51, .2), 0 34px 14px 0 rgba(16, 0, 51, .06), 0 53px 15px 0 rgba(16, 0, 51, .01), inset 0 0 12px 0 hsla(0, 0%, 100%, .08), inset 0 -8px 32px 0 #1e0d49;
    background: radial-gradient(231.94% 231.94% at 50% 100%, #8a6cff 0, rgba(53, 41, 128, 0) 25.24%), linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, .04)), rgba(147, 130, 255, .01);
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-image 2s ease-in-out;
  &:hover{
    /* margin-right: 50px; */
  background-image: linear-gradient( to bottom, #303065, #5b065b);
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  }
`

const MidTwo = styled.div`
  height: 40vh;
  width: 100%;
  text-align: center;
`

const MidTwoOne = styled.div`
  color: gray;
  margin-bottom: 75px;
  
`
const MidTwoTwo = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
`

const MidLogos = styled.img`
  height: 30px;
`

const MidThree = styled.div`
  
`

const MidThreeOne = styled.div`
  font-size: 50px;
  text-align: center;
`
const MidThreeTwo = styled.div`
  font-size: 20px;
  text-align: center;
  color: #bcb3b3;
  width: 50vw;
`


const MidFour = styled.div`
  margin: 100px 0px;
  display: flex;
  gap: 100px;
`

const MidFourInner = styled.div`
  display: flex;
  border: solid 1px gray;
  width: 450px;
  height: 150px;
  border-radius: 20px;
  background: hsla(0, 0%, 100%, .02);
    box-shadow: inset 0 24px 48px 0 rgba(199, 211, 234, .05), inset 0 1px 1px 0 rgba(199, 211, 234, .12);
    border: 1px solid rgba(209, 170, 215, .06);
    display: flex;
    align-items: center;
`
const MidFourOne = styled.img`
 margin: 20px;
  height: 100px;
  width: 100px;
`
const MidFourTwo = styled.div``
const MidFourThree = styled.div`
  color: #f699fc;
`
const MidFourFour = styled.div`
  font-size: 24px;
`

const MidFive = styled.div`
  margin:50px 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const MidFiveOne = styled.div`
    border: 0 solid #e5e7eb;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: rgb(24 24 24);
    color: rgb(209 170 215 );
`
const MidFiveTwo = styled.div`
  font-size: 50px;
`
const MidFiveThree = styled.div`
  font-size: 20px;
`
const MidSix = styled.div`
  width: 100%;
  display: flex;
`
const MidSixLeft = styled.div`
  flex: 1;
  margin-left: 100px;
  margin-right:100px;
`
const MidSixLeftOne = styled.div`
  padding:40px 0px;
  border-bottom: solid 1px gray;
`
const MidSixLeftOneOne = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
`
const MidSixLeftOneTwo = styled.div`
  font-size: 18px;
`
const MidSixLeftTwo = styled.div`
  padding:40px 0px;
  border-bottom: solid 1px gray;
`
const MidSixLeftTwoOne = styled.div`
  
`
const MidSixLeftTwoTwo = styled.div``
const MidSixLeftThree = styled.div`
  padding:40px 0px;
`
const MidSixLeftThreeOne = styled.div``
const MidSixLeftThreeThree = styled.div``
const MidSixRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const MidSixRightVideo = styled.video`
  width: 80%;
  height: 80%;
`
const Body = () => {
  return (
    <BodyDiv>
      <MidDivOne>
        <MidOne>
        <MidDivOneOne>Power <SpanContent>Enterprise AI</SpanContent> With Your Data</MidDivOneOne>
        <MidDivOneTwo>Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.</MidDivOneTwo>
        <MidDivOneThree><DemoButton>Book a Demo →</DemoButton> &nbsp; &nbsp; Build AI →</MidDivOneThree> 
        </MidOne>
        
      </MidDivOne>
      <MidTwo>
          <MidTwoOne>Scale works with Generative AI Companies, U.S. Government Agencies & Enterprises</MidTwoOne>
          <MidTwoTwo>
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmicrosoft.png&w=128&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&w=96&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fopenai.png&w=128&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&w=256&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fnvidia.png&w=128&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&w=96&q=100" />
            <MidLogos src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcharacterai.png&w=256&q=100" />
          </MidTwoTwo>
        </MidTwo>
        <MidThree>
          <MidThreeOne>Frontier AI Research</MidThreeOne>
          <MidThreeTwo>SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research.</MidThreeTwo>
        </MidThree>
        <MidFour>
            <MidFourInner>
              <MidFourOne src="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F6d7b5feb1bca09c340db6e19128be49d.png&w=128&q=75"/>
              <MidFourTwo>
              <MidFourThree>Leaderboards</MidFourThree>
              <MidFourFour>SEAL Leaderboards: Expert-Driven Private Evaluations</MidFourFour>
            </MidFourTwo>
            </MidFourInner>
            <MidFourInner>
              <MidFourOne src="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F43bb7aa58b4f36f25746b98e23c2349d.png&w=128&q=75"/>
              <MidFourTwo>
              <MidFourThree>Research</MidFourThree>
              <MidFourFour>LLMs Easily Jailbroken as Browser Agents</MidFourFour>
            </MidFourTwo>
            </MidFourInner>
            
        </MidFour>
        <MidFive>
          <MidFiveOne>AI FOR THE ENTERPRISE</MidFiveOne>
          <MidFiveTwo>Generative AI Architecture</MidFiveTwo>
          <MidFiveThree>Whether you’re building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.</MidFiveThree>
          <DemoButton>Book a Demo →</DemoButton>
        </MidFive>
        <MidSix>
          <MidSixLeft>
            <MidSixLeftOne>
              <MidSixLeftOneOne>Fine-Tuning and RLHF</MidSixLeftOneOne>
              <MidSixLeftOneTwo>Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.</MidSixLeftOneTwo>
            </MidSixLeftOne>
            <MidSixLeftTwo>
            <MidSixLeftOneOne>Foundation Models</MidSixLeftOneOne>
            <MidSixLeftOneTwo>Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.</MidSixLeftOneTwo>
            </MidSixLeftTwo>
            <MidSixLeftThree>
            <MidSixLeftOneOne>Enterprise Data</MidSixLeftOneOne>
            <MidSixLeftOneTwo>Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.</MidSixLeftOneTwo>
            </MidSixLeftThree>
          </MidSixLeft>
          <MidSixRight>
            <MidSixRightVideo autoPlay playsInline loop>
              <source src="../../public/chart.webm" type="video/webm" />
            </MidSixRightVideo>
          </MidSixRight>
        </MidSix>
    </BodyDiv>
  );
};

export default Body;
