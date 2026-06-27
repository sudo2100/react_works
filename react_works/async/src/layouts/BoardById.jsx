import { useParams } from "react-router-dom";

const BoardById = () => {
  const {id} = useParams();

  return(
    <div>
      <h2>{`Board ${id} 페이지`}</h2>
    </div>
  )
}

export default BoardById;