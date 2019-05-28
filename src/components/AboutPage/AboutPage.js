import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavLink from 'react-bootstrap/NavLink';
import SectionFeature from '../SectionFeature/SectionFeature';
import strings from '../../resources/strings.json';
import { getRandomQuote } from '../../services/Quotes';
import h2p from 'html2plaintext';
import MilkyWay from '../../images/milky-way-cropped.png';
import Programming from '../../images/programming-langs.png';
import UWAerialView from '../../images/uw-aerial-view-cropped.jpg';
import UXBook from '../../images/ux-book.jpg';
import CodeBackground from '../../images/code-background-cropped.jpg';
import MotionStopSkate from '../../images/motion-stop-skate.png';

import './AboutPage.scss';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: undefined
    };
  }

  componentDidMount() {
    // getRandomQuote().then((data) => {
    //   console.log(data);
    //   this.setState({ quote: data[0] });
    // })
  }

  render() {
    let staticQuote = {
      content: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
      title: 'Bill Gates',
      link: 'https://www.toppr.com/bytes/quotes-by-bill-gates/'
    }

    let alaskaExperienceItems = strings.alaskaExperience.map((item, index) => {
      return <li key={index}>{item}</li>
    });

    let skills = strings.skills.map((item, index) => {
      return <li key={index}>{item}</li>
    });
    return (
      <div className='about-page'>
        <Jumbotron>
          <h1 className='main-title'>
            {`"${h2p(staticQuote.content)}"`}
          </h1>
          <NavLink href={'' + staticQuote.link} target='_blank'>
            <span>- </span>
            {`${staticQuote.title}`}
          </NavLink>
        </Jumbotron>
        <SectionFeature img={MilkyWay} >
          <h1>
            {"Preface"}
          </h1>
          <p className="lead">{strings.preface}</p>
        </SectionFeature>
        <hr />
        <SectionFeature imageOnLeft img={Programming} >
          <h1>
            {"About"}
          </h1>
          <p className="lead">{strings.about}</p>
        </SectionFeature>
        <hr />
        <SectionFeature img={UWAerialView} >
          <h1>
            {"Education"}
          </h1>
          <p className="lead">{strings.education}</p>
        </SectionFeature>
        <hr />
        <SectionFeature imageOnLeft img={UXBook} >
          <h1>
            {"Experience"}
          </h1>
          <div className='text-left'>
            <p className="lead">Alaska Airlines | Software Developer | 2017 - present</p>
            <ul>
              {alaskaExperienceItems}
            </ul>
          </div>
        </SectionFeature>
        <hr />
        <SectionFeature img={CodeBackground} >
          <h1>
            {"Skills"}
          </h1>
          <div className='text-left'>
            <p className="lead">Programming</p>
            <ul>
              {skills}
            </ul>
            <p className="lead">Other</p>
            <ul>
              <li>I'm funny (no really, that's a skill)</li>
            </ul>
          </div>
        </SectionFeature>
        <hr />
        <SectionFeature imageOnLeft img={MotionStopSkate} >
          <h1>
            {"Activities"}
          </h1>
          <p className="lead">{strings.activities}</p>
        </SectionFeature>
        <hr />
      </div>
    )
  }
}