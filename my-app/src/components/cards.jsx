import React, { Component } from "react";
import Card from "./card";
import Img1 from "../assets/aya.jpg";
import Img2 from "../assets/angham.jpg";
import Img3 from "../assets/tayma.jpg";
import Img4 from "../assets/lubna.jpg";
import Img5 from "../assets/sara.jpg";
import Img6 from "../assets/maysam.jpg";
import Img7 from "../assets/heba.jpg";
import Img8 from "../assets/jenan.jpg";
import Img9 from "../assets/waed.jpg";
import Img10 from "../assets/hala.png";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div className="row container-fluid d-flex justify-content-center">
        <h2 class="display-4">
          Meet up our elegant and cute developers ever <hr></hr>{" "}
          <h3>
            {" "}
            <em> The world needs girl coders to lead it</em>{" "}
          </h3>
        </h2>
       
        <br></br>
        <br></br>
        <div className="row">
          <div className="col">
            <Card
              imgsrc={Img1}
              title="Aya"
              text="Graphic Designer and Developer "
              linked="mailto:saraeswed@gmail.com"
              git="https://github.com/Abdaljawad-Ayah"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={Img2}
              title="Angham"
              text="Software Developer"
              linked="www.linkedin.com/in/angham-baniYounes"
              git="https://github.com/Angham-Baniyounes"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={Img3}
              title="Taima"
              text="Communication Engineer and  developer "
              linked="https://www.linkedin.com/in/taima%E2%80%99-al-fokaha%E2%80%99/s"
              git="https://github.com/alfokaha-taima"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={Img4}
              title="Lubna"
              text=" MIS and software developer "
              linked="https://www.linkedin.com/in/lubna-almaa"
              git="https://github.com/lubna-almaaweed"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={Img5}
              title="Sara"
              text=" MIS and Developer"
              linked="mailto:saraeswed@gmail.com"
              git="https://github.com/Sarah-Eswed"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card
              imgsrc={Img6}
              title="Mayam"
              text="Nutrition and web developer "
              linked="https://www.linkedin.com/in/maysamturk/"
              git="https://github.com/MaysamTurk"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img7}
              title="Heba"
              text="Accountant and web developer"
              linked="https://www.linkedin.com/in/heba-bilbeisi/"
              git="https://github.com/HEBA-BILBEISI"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img8}
              title="Jenan"
              text="MIS and Full stack developer"
              linked="https://www.linkedin.com/in/jenan-musallam-1ab920104/"
              git="https://github.com/Jenanmusallam"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img9}
              title="Waed"
              text="CS and Full stack developer "
              linked="https://www.linkedin.com/in/waed-dawaghreh98/"
              git="https://github.com/Waed-Dawaghreh"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img10}
              title="Hala"
              text=" Communication Engineer and developer  "
              linked="https://www.linkedin.com/in/hala-alhyasat/"
              git="https://github.com/HalaHyasat"
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Cards;
