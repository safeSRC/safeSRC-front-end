import React, { Component } from 'react';
import '../style/About.css';
import logo from '../style/logo.png';

export default class About extends Component {
      render() {
            return (
              <div>
                <img className="App-logo" src={logo} alt="safeSRC logo" />
                <div className="us">
                  <section className="ben">
                    <h1>Ben</h1>
                      <p className="bio">
                        I'm a software developer with a knack for working with teams and solving problems. Considering I grew up on a cattle farm working with my cousins, and have spent over a decade in professional kitchens as a chef working closely with teams of all backgrounds, I feel like I am adept at meeting teammates where they are with respect and enough motivation to keep everyone focused on the task at hand. I can be an asset with my ability to work on a team and come up with solutions to problems.
                      </p>
                      <a href="https://github.com/BenFrancka">GitHub</a>
                      <a href="https://www.linkedin.com/in/ben-francka/">LinkedIn</a>
                  </section>
                  <section className="bri">
                    <h1>Bri</h1>
                      <p className="bio">
                        A full-stack software engineer with a background in hospitality. I champion human-centered designs built on strong, efficient foundations using collaborative problem-solving. I enjoy learning new technologies and working on diverse teams while implementing a strong sense of community.
                    </p>
                      <a href="https://github.com/bribias">GitHub</a>
                      <a href="https://www.linkedin.com/in/bribias/">LinkedIn</a>
                  </section>
                  <section className="dimitra">
                    <h1>Dimitra</h1>
                    <p className="bio">
                      A fast visual and tactile learner that takes practical approaches to write readable code for humans AND computers loves manipulating data and has a keen eye for art & design.
                      Interested in creating apps and supporting organizations with a mission-driven mindset, I am passionate about developing and providing solutions to everyday problems. I would like to use my coding experience to help people achieve their goals, give access to resources, and effect positive change in their local communities and abroad
                    </p>
                    <a href="https://github.com/dimitraweinstein">GitHub</a>
                    <a href="https://www.linkedin.com/in/dimitraweinstein/">LinkedIn</a>
                  </section>
                  <section className="elise">
                    <h1>Elise</h1>
                      <p className="bio">
                        I am a full-stack software engineer from St Paul, Minnesota with a background in psychology and CCBHC mental health. My passion is in combining this background with my newly honed skills in software development to work with a team on creating and maintaining inclusive apps that accommodate the needs of marginalized communities. Always preferring to keep busy, I fill my non-coding time with as much dance, D&D, studying French & Korean, crafting, and board gaming as I can get!
                    </p>
                      <a href="https://github.com/eliamue">GitHub</a>
                      <a href="https://www.linkedin.com/in/eliamue/">LinkedIn</a>
                  </section>
                  <section className="maria">
                    <h1>Maria</h1>
                      <p className="bio">
                        A full-stack software engineer with a passion for creativity and coding. I enjoy integrating lots of creativity within code, as coding is another medium that allows people to express themselves. I love to get lost in fantasy and to bring that fantasy to life with my drawings and art. When I am not coding or drawing, I love to fill my time with video games and TTRPGs with friends and family!
                      </p>
                      <a href="https://github.com/MariaOrtiz1">GitHub</a>
                      <a href="https://www.linkedin.com/in/maria-ortiz-lopez-54392a211/">LinkedIn</a>
                  </section>
                  <section className="sofia">
                    <h1>Sofia</h1>
                      <p className="bio">
                        A Full-stack Developer based in the San Francisco Bay Area. I love to code because it's an exciting and challenging field where I can see myself being an asset to my community and where I know I will feel fulfilled. When I'm not coding, you can find me on Steam, learning to be a better photographer, or reading novels. My favorite languages are Korean and Spanish!
                      </p>
                        <a href="https://github.com/sofiatejada">GitHub</a>
                        <a href="https://www.linkedin.com/in/sofianais/">LinkedIn</a>
                  </section>
                </div>
              </div>
            );
      }
}
