import './Home.css';
import BannerImage from '../../assets/banner/banner-img.png';

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                Welcome to <span>SRIRAM ENTERPRISES</span>
              </h3>
              <p>
                We at <span>Sriram Enterprises</span> strive hard to bring
                best-quality international raw materials for Plastic Industries.
              </p>
              <p>
                With its clientele present all over PAN India, Sriram
                Enterprises ensures the{' '}
                <strong>highest quality material</strong> to be supplied to its
                customers at the <strong>best pricing</strong>.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
