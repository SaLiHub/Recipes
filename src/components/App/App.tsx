import React from 'react';

import Layout from "../Layout/Layout";
import Recipes from "../Recipes/Recipes";

const App = () => {
    return (
        <>
            <Layout name={"Recipes"}>
                <Recipes/>
            </Layout>
        </>

    );
};

export default App;