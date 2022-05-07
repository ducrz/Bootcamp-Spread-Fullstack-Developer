import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Nome de Usuário:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Empresa:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Localização:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repositórios</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
