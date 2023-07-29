import React, { useEffect, useState } from "react";
import ButtonCustom from "~/components/Button/Button";
import SelectCustom from "~/components/Select/Select";
import { useformContext } from "~/store/FormContext";
import { getMarvelCharacters } from "~/services/marvelAPI";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "~/store/PageContext";

const HeroSelectForm = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const { handleStep } = useformContext();
  const { hero } = usePageContext();
  const [disable, setDisable] = useState(true);
  const [fisrt, setFirst] = useState(true);

  const checkSelect = (e) => {
    e.preventDefault();
    console.log(hero);
    navigate("/dashboard/perfil/" + hero.id);
  };

  useEffect(() => {
    if (!fisrt) {
      setDisable(false);
    }
    setFirst(false);
  }, [hero]);

  useEffect(() => {
    async function fetchAgents() {
      const agents = await getMarvelCharacters();
      agents ? setAgents(agents?.data.results) : null;
    }

    fetchAgents();
  }, []);

  return (
    <form onSubmit={(e) => checkSelect(e)} style={{ height: "349px" }}>
      <div>
        <h1>
          Selecione o seu agente mais legal <span>.</span>
        </h1>
        <p>Tenha a visão completa do seu agente.</p>
      </div>
      <div>
        <div className={"row"}>
          <div className={"col-12"}>
            <SelectCustom data={agents.length > 0 ? agents : null} />
          </div>
        </div>
      </div>

      <div className={"d-flex mt-2 justify-content-end"}>
        <ButtonCustom disabled={disable} id={2} title={"entrar"} />
      </div>
    </form>
  );
};

export default HeroSelectForm;
