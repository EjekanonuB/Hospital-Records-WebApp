import React from 'react';
import Page from './Page';

function About() {
  return (
    <div>
      <Page title='About-Us'>
        <div className='container aboutUs'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='display-4 mb-4 text-primary'>
                <strong>ABOUT US</strong>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptatem omnis at soluta natus delectus nisi,
                reiciendis nam? Similique nisi perspiciatis iusto beatae. Error,
                quo voluptates commodi deserunt odit explicabo! Recusandae animi
                praesentium odio delectus, possimus illo, et est quis quos
                obcaecati repellat qui ducimus maxime inventore aliquam
                consequuntur ullam? Blanditiis voluptatibus, provident cum harum
                omnis odio unde numquam error? Obcaecati veritatis eaque quasi
                sunt assumenda molestiae reprehenderit mollitia adipisci, in
                natus unde maxime non aspernatur perspiciatis eos inventore
                totam distinctio aliquid atque repudiandae repellat pariatur.
                Deserunt sint qui fugiat! Laborum, fugit dolor rerum
                exercitationem maxime atque commodi.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default About;
