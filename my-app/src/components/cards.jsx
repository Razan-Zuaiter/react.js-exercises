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
import Img11 from "../assets/dana.jpg";
import Img12 from "../assets/orange.jpg";
import Img13 from "../assets/orange.jpg";
import Img14 from "../assets/razan.jpg";
import ImgA from "../assets/khadeeja.jpg";
import ImgB from "../assets/amal.jpg";



class Cards extends Component {
  state = {};
  render() {
    return (
      <div className="row container-fluid d-flex justify-content-center">
        <h2 class="display-4">
          Meet up our most elegant and cutest developers ever <hr></hr>{" "}<h3>
          {" "}
          <em> The world needs girl coders to lead it</em>{" "}
        </h3>
        </h2>
        
        <br></br>
        <br></br>
        
          <div className="row ">
            <div className="col-5 cardA">
              <Card
                imgsrc={ImgA}
                title="Khadeeja"
                text="Expert trainer "
                linked="https://www.linkedin.com/in/khadeejah-hamdan"
                git="https://github.com/khadeejah-hamdan"
              />
            </div>
            <div className="col-5 cardA">
              <Card
                imgsrc={ImgB}
                title="Amal"
                text="Assistant trainer"
                linked="https://www.linkedin.com/in/amal-al-dajah-b5b423193"
                git="https://github.com/AmalAldajah"
              />
            </div>{" "}
         
        </div>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col">
            <Card
              imgsrc={Img14}
              title="Razan"
              text=" Communication Engineer and developer  "
              linked="www.linkedin.com/in/razan-zuaiter"
              git="https://github.com/Razan-Zuaiter"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img1}
              title="Aya"
              text="Graphic Designer and Developer "
              linked="https://www.linkedin.com/in/ayah-imad"
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
              text="Financial information System
              and developer "
              linked="https://www.linkedin.com/in/lubna-almaa"
              git="https://github.com/lubna-almaaweed"
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
        <div className="row">
          <div className="col">
            <Card
              imgsrc={Img11}
              title="Dana"
              text=" Software Engineer and developer  "
              linked="https://www.linkedin.com/in/dana-toughoj/
             "
              git="https://github.com/danatoughoj"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img12}
              title="Saja"
              text=" Electrical Engineer and developer  "
              linked="https://www.linkedin.com/in/saja-dahamsheh/"
              git="https://github.com/sajadahamsheh"
            />
          </div>

          <div className="col">
            <Card
              imgsrc={Img13}
              title="Leen"
              text=" chemistry and  software developer  "
              linked="https://www.linkedin.com/in/leen-awad/"
              git="https://github.com/leen-awad"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={Img5}
              title="Sara"
              text=" MIS and Developer"
              linked="https://www.linkedin.com/in/sarah-eswed"
              git="https://github.com/Sarah-Eswed"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
