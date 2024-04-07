import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const whatsAppIcon = <FontAwesomeIcon icon={faWhatsapp} />;

  const handleClick = () => {
    const whatsappUrl =
      'https://api.whatsapp.com/send/?phone=%2B918961834149&text&type=phone_number';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_col">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    src="https://maps.google.com/maps?q=1%20British%20Indian%20Street,%202nd%20floor,%20Kolkata%20-%20700069,%20West%20Bengal,%20India&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    style={{ width: '600px', height: '440px' }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="contact_col">
              <h2>
                <u>Contact Us</u>
              </h2>
              <h4>Head Office: </h4>
              <p>
                1 British Indian Street, 2nd floor, Kolkata - 700069, West
                Bengal, India
              </p>
              <hr />
              <div className="phone_number">
                <p>Phone Number: </p>
                <p>+91 8961834149/9433025499</p>
              </div>
              <h6>
                Email ID :
                <a href="mailto:gokulka@hotmail.com">
                  {' '}
                  <u>gokulka@hotmail.com</u>
                </a>
              </h6>
              <h6>
                <u>Unit 1</u>:{' '}
              </h6>
              <p>Mahishatikri, Singur - 712407, West Bengal, India</p>
              <h6>
                <u>Unit 2</u>:{' '}
              </h6>
              <p>NIE Jagatpur - 754021, Cuttack, Odisha, India</p>
              <div className="icon">
                <div className="service_icon" onClick={handleClick}>
                  {whatsAppIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
