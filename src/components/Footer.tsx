import React from 'react'

interface FooterProps{
  phone:string;
  email:string;
}
const Footer: React.FC <FooterProps> = ({phone,email}) => {
  return(
    <footer className="border-gray-300 border-t-1">
      <article>
        <h5>Telephone</h5>
        <p>{phone}</p>
      </article>
      <article>
        <h5>Email</h5>
        <p>{email}</p>
      </article>
      <article>
        <h5>Redes Sociales</h5>
        <div>
          <a href="#"><span>instagram</span></a>
          <a href="#"><span>likedin</span></a>
          <a href="#"><span>github</span></a>
        </div>
      </article>
      <article>
        <p>@ Creado por Laura Lopez</p>
      </article>
    </footer>

  );
};
export default Footer;