import React from 'react';
import './page1.css';
import { SiGitbook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Marquee from "react-fast-marquee";

import whereby from '../assets/whereby.svg'
import netflix from '../assets/netflix.svg';
import cal from '../assets/cal.svg';
import rayon from '../assets/rayon.svg';
import census from '../assets/census.svg';
import linear from '../assets/linear.svg';
import cisco from '../assets/cisco.svg';
import trunk from '../assets/trunk.svg';
import bird from '../assets/bird.svg';
import action from '../assets/action.svg';
import drata from '../assets/drata.svg';
import paypal from '../assets/paypal.svg';
import mews from '../assets/mews.svg';
import broadcom from '../assets/broadcom.svg';
import redhat from '../assets/redhat.svg';
import shopify from '../assets/shopify.svg';
import deepl from '../assets/deepl.svg';
import ibm from '../assets/ibm.svg';
import ebay from '../assets/ebay.svg';
import fedex from '../assets/fedex.svg';
import blackberry from '../assets/blackberry.svg';
import kyndryl from '../assets/kyndryl.svg';
import qualcomm from '../assets/qualcomm.svg';
import customerio from '../assets/customerio.svg';
import obsidian from '../assets/obsidian.svg';
import agilesix from '../assets/agilesix.svg';
import raycast from '../assets/raycast.svg';
import snyk from '../assets/snyk.svg';
import Container from 'react-bootstrap/esm/Container';
import checkers from '../assets/checks.svg'
import pg1dark from '../assets/pg1Dark.svg'
export default function Page1() {
    return (
        <div className='page1'>
            <div className='page1-text'>
                <SiGitbook className='page1-icon' />
                <h3>Product documentation<br /><span style={{ color: 'rgb(187, 221, 229)' }}>your users will love</span></h3>
                <p>Forget building your own custom docs platform. With GitBook you get beautiful <br />documentation for your users, and a branch-based Git workflow for your team.</p>
                <div className='page1-btns-div'>
                    <button className='signup-btn'><FaGithub /><span>Signup with github</span></button>
                    <button className='start-free-btn'><span className='start-btn-text'>Start for free</span><span className='start-btn-icon'><LiaLongArrowAltRightSolid /></span></button>
                </div>
            </div>
            <Container className='marquee-container'>
                <Marquee>
                    <ul className='list1'>
                        <li><img className='logos' src={whereby} /></li>
                        <li><img className='logos' src={rayon} /></li>
                        <li><img className='logos' src={linear} /></li>
                        <li><img className='logos' src={cisco} /></li>
                        <li><img className='logos' src={paypal} /></li>
                        <li><img className='logos' src={redhat} /></li>
                        <li><img className='logos' src={broadcom} /></li>
                        <li><img className='logos' src={snyk} /></li>
                        <li><img className='logos' src={shopify} /></li>
                        <li><img className='logos' src={deepl} /></li>
                        <li><img className='logos' src={ibm} /></li>
                        <li><img className='logos' src={ebay} /></li>
                        <li><img className='logos' src={blackberry} /></li>
                        <li><img className='logos' src={qualcomm} /></li>
                        <li><img className='logos' src={fedex} /></li>
                    </ul>
                </Marquee>
                <Marquee direction='right'>
                    <ul className='list2'>
                        <li><img className='logos' src={netflix} /></li>
                        <li><img className='logos' src={cal} /></li>
                        <li><img className='logos' src={census} /></li>
                        <li><img className='logos' src={trunk} /></li>
                        <li><img className='logos' src={bird} /></li>
                        <li><img className='logos' src={action} /></li>
                        <li><img className='logos' src={drata} /></li>
                        <li><img className='logos' src={mews} /></li>
                        <li><img className='logos' src={kyndryl} /></li>
                        <li><img className='logos' src={customerio} /></li>
                        <li><img className='logos' src={obsidian} /></li>
                        <li><img className='logos' src={agilesix} /></li>
                        <li><img className='logos' src={raycast} /></li>

                    </ul>
                </Marquee>
            </Container>
            <img className='checkers' src={checkers}/>
            <img className='darkImg' src={pg1dark}/>
            <div className='page1-footer-div'>               
            </div>
        </div>

    )
}
