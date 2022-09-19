import Head from "next/head";

import { Container } from "../components/Container";
import { APP_TITLE } from "../constants/app";
import { Drives } from "../containers/Drives";

const Home = () => {
    return (
        <Container>
            <Head>
                <title>{APP_TITLE}</title>
                <meta name="description" content={APP_TITLE} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Drives />
        </Container>
    );
};

export default Home;
