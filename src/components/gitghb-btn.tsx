import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  margin-top: 50px;
  font-weight: 600;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;
export default function GithubButton() {
  const go = useNavigate();
  const onClick = async () => {
    try {
      const provieder = new GithubAuthProvider();
      await signInWithPopup(auth, provieder);
      go("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
