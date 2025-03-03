import styles from "./styles.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkButton from "../LinkButton";
import { useState } from "react";

export default function Profile(props) {
  //[valor, funcaomodificadora]
  const [followText, setFollowText] = useState("Follow");

  function handleClick() {
    alert("Voce esta seguindo");
    setFollowText("Followind");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedInUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.xUrl}>X</LinkButton>
      </ProfileSection>
    </div>
  );
}
