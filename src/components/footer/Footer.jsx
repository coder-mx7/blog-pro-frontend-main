import React from 'react';
import styled from 'styled-components';

// Styled components for footer sections
const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSection = styled.div`
  flex: 1;
`;

const SocialSection = styled.div`
  flex: 1;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

const SubscribeSection = styled.div`
  flex: 1;
  text-align: right;

  input {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 8px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <img src="logo.png" alt="اسم الشركة" />
        <p>شركة [اسم الشركة]</p>
      </LogoSection>
      <SocialSection>
        <ul>
          <li><a href="رابط تويتر">تويتر</a></li>
          <li><a href="رابط فيسبوك">فيسبوك</a></li>
          <li><a href="رابط انستجرام">انستجرام</a></li>
        </ul>
      </SocialSection>
      <SubscribeSection>
        <form action="subscribe.php" method="post">
          <input type="email" name="email" placeholder="ادخل بريدك الإلكتروني" required />
          <button type="submit">اشترك الآن</button>
        </form>
      </SubscribeSection>
    </FooterContainer>
  );
};

export default Footer;
