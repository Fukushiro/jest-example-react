import axios from "axios";
import React, { useEffect } from "react";

// import { Container } from './styles';

const Calc: React.FC = () => {
  const [result, setResult] = React.useState<number>(0);
  const baseurl = "http://api.mathjs.org/v4/?expr=";
  async function makeMath() {
    try {
      axios
        .get(baseurl + "2*2")
        .then((res) => res.data)
        .then((res) => {
          console.log(res);

          setResult(res);
        });
    } catch (e) {
      console.log(e);
    }
    // setResult(5);
  }
  useEffect(() => {
    makeMath();
  }, []);
  return (
    <div>
      <h1 data-testid={"coisa"}>{result}</h1>
    </div>
  );
};

export default Calc;
