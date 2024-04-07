import './About.css';
import AboutImage from '../../assets/about/about_img.jpeg';

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_heading">
            <h3>
              With head-office in Kolkata City, and production units in Singur
              and Cuttack, we are your one-stop solution for all polymer needs.
            </h3>
          </div>

          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImage} alt="about" className="about_main" />
              </div>
            </div>
            <div className="about_col more_space">
              <p>
                The company is primarily involved in the manufacturing of
                Reprocessed plastic granules of all kinds (PP, LDPE, HDPE, LL,
                etc.) and trading of calcium filler masterbatch.
              </p>
              <p>
                The company is also involved in the import of Various kinds of
                plastics including Reprocessed plastic Granules, Calcium Filler
                Masterbatch, Calcium Carbonate Powder, Calcite powder etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
