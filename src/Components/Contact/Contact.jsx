import React from 'react';
import './Contact.css';
import msg_icon from '../../Asset/msg-icon.png';
import mail_icon from '../../Asset/mail-icon.png';
import phone_icon from '../../Asset/phone-icon.png';
import location_icon from '../../Asset/location-icon.png';
import white_arrow from '../../Asset/white-arrow.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f02cbb48-57c7-4fff-8be7-9721fdac64e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>        
        <div>
          <div className='contact-col'>
              <h3>Send us a message <img src={msg_icon} alt=""/></h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit omnis atque mollitia natus adipisci dignissimos. Porro harum nihil quae, ipsum assumenda est praesentium perspiciatis, quidem eaque suscipit in nisi commodi!
              Error, a dolorum maiores ex itaque explicabo cupiditate officia harum at voluptatibus quaerat totam dolorem cum inventore sit hic soluta ratione excepturi facere ipsa repellendus! Natus neque unde veritatis voluptate?
              Eum veniam, id quod vel praesentium vitae quas, tempora ullam beatae, cum non similique sit aliquam. Omnis sequi nisi cumque tempora ex iure dolorum iusto maxime magni maiores, voluptatibus quia?
              Eligendi sapiente, saepe error maiores minima laboriosam at asperiores harum temporibus, similique, placeat hic praesentium provident. Dicta fugit ipsum, doloremque molestias amet atque, aliquam nisi, incidunt laborum repellat culpa alias?
              Totam iure repudiandae labore voluptates hic eveniet, voluptatibus unde facere provident, quos molestiae dolor et quis eius fugiat deleniti earum inventore? Perspiciatis porro assumenda explicabo, repellendus natus ullam illum laudantium.
              Pariatur id, laudantium optio voluptate inventore similique soluta voluptatum non rem vitae exercitationem. Aspernatur possimus exercitationem, placeat a eveniet atque libero. Ducimus necessitatibus tenetur assumenda, labore maiores ratione inventore corporis?
              Commodi officia vel neque? Officia odit velit commodi expedita officiis totam repellat deserunt obcaecati sit. </p>
          </div>
          <ul>
              <li><img src={mail_icon} alt=""/>Contact@GreatStack.com</li>
              <li><img src={phone_icon} alt=""/>+91-9619737684</li>
              <li><img src={location_icon} alt=""/>Kalwa thane</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
              <label>Your name</label>
              <input type='text' name="name" placeholder="Enter your name" required />
              <label>Phone Number</label>
              <input type='tel' name="phone" placeholder="Enter your mobile number" required />
              <label>Write your message here</label>
              <textarea rows="6" name="message" placeholder="Enter your message" required />
              <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  );
}

export default Contact;
