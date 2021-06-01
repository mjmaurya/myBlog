import React from 'react';

const AboutPage=()=>{
  return(
    <div class="container">
        <div class="row" style={{height:"100vh"}}>
            <div className="col-sm-4" >
                    <div className="container">
                        <img src="https://i.postimg.cc/zXJzW48V/writer.png" width="200" alt="YourArticles"/>
                    </div>
                    <div>
                        <h2>YourArticles</h2>
                        <i>- A portel for Well Written Articles</i>
                    </div>
            </div>

            <div className="col-sm-8">
    
                    <div>
                        <h3><i> Greetings to All !</i></h3>
                        <b>Wellcome to the Platform where You can find well written Technical Articles. I share the Articles related to new Technology,
                            Programming Languages, Framworks, Interview Questions, Coding Questions that was aked in various Hiring Chalenges Etc.
                        </b>
                    </div>
                    <div>
                        <a className="btn btn-success m-1" href="https://www.linkedin.com/in/mjmaurya"><b>LinkedIn</b></a>
                        <a className="btn btn-primary m-1" href="https://twitter.com/gcssmanoj"><b>Twitter</b></a>
                        <a className="btn btn-danger m-1" href="https://www.youtube.com/channel/UCFlFtth3ewznKY0vriczHsg?sub_confirmation=1"><b>Subscribe On YouTube</b></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage;