import React from 'react';

const AboutPage = () => {
  const email = 'example@domain.com';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quis risus elementum tempor. Phasellus euismod ultricies sapien, vel accumsan nunc venenatis id. Fusce eu mi ut lectus feugiat bibendum. Sed non vestibulum leo. Praesent et lectus eget magna sodales tristique. Vivamus vitae ex eget metus bibendum dapibus a eget metus. Nulla venenatis arcu vitae leo tincidunt, eget faucibus eros consectetur.';

  return (
    <div>
      <h1>About Us</h1>
      <p>Email: {email}</p>
      <p>{description}</p>
    </div>
  );
}

export default AboutPage;
