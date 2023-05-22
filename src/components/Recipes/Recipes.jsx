import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/RecipesSlice/operations";
import { selectRecipes } from "../../redux/selectors";

// const getSomeData = async () => {
//   const { data } = await axios.get("someData");
//   return data;
// };

const Recipes = () => {
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();
  console.log("recipes=>>>>");
  console.log(recipes);
  useEffect(() => {
    dispatch(
      getRecipes(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTk3Njk5M2MwM2NjNjQxZjhhNTM2NSIsImlhdCI6MTY4MTIwMjUwMCwiZXhwIjoxNjgxMjA0MzAwfQ.bXe0uQgO0bBEIdZQd7v7jIwF6Zj6-eBpLE_u-4zO6Tg"
      )
    );

    // dispatch(async (dispatch) => {
    //   const { data } = axios.get();
    //   dispatch({
    //     type: "saveSomeData",
    //     payload: data,
    //   });
    // });

    // getSomeData().then((data) => {
    //   dispatch({
    //     type: "saveSomeData",
    //     payload: data,
    //   });
    // });

    // const getData = async () => {
    //    const {data} = await getSomeData()
    //    dispatch({
    //     type: "saveSomeData",
    //     payload: data,
    //   });
    // };
    // getData();

    // (async function() {
    //   const {data} = await getSomeData()
    //    dispatch({
    //     type: "saveSomeData",
    //     payload: data,
    //   });
    // })()
  }, [dispatch]);

  return (
    <div>
      <ul>
        {recipes.map(({ _id, title, preview }) => (
          <li key={_id}>
            <p>{title}</p>
            <img src={preview} alt={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
