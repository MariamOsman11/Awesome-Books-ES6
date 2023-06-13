const contact = document.querySelector('.contact-section');

const createContactSection = () => {
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
          <h2>Contact Information</h2>
          <p>Do you have any questions or you want to connect?
        
          <ul>
              <li>E-mail:Mariamkca11@gmail.com@gmail.com</a></li>
              <li>Phone number: +254723971958</li>
              <li>Address :Nairobi, Kenya</li>
          </ul>
      `;
  contact.appendChild(contactInfo);
};

export default createContactSection;