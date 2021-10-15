import CharaIcon from "./CharaIcon";

function FilteredCharas({ charas }) {
  console.log("CHARAS in fc", charas)
  return (
    <div>
      {/* { charas.map( chara => (
        <CharaIcon 
          key={chara.name}
          chara={chara}
        />
      ))} */}
      <CharaIcon chara={charas[0]} />
    </div>
  );
}

export default FilteredCharas;