import Head from "next/head";
import Image from "next/image";
import styles from "../styles/grid.module.css";
import Footer from '../components/footer'
import { NextPage } from "next";
import { Container } from "@mui/material";
import PropTypes from 'prop-types';
import Card from "../components/card";
import data from "../data/members.json";
import Navbar from "../components/navbar";

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const Members = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Members | Research Rhinos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/DigexIcon.png" />
      </Head>
      <Navbar/>
      <Container>
        <div>
          <h1 className="flex text-4xl font-bold pt-12 justify-center items-center">Members</h1>
          {data.map((grade, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold py-8 text-center">{`${grade.year}`}</h2>
              <Grid>
                {grade.members.map((member) => (
                  <Card key={member.name} className="text-center">
                    <div className="text-2xl">{member.name}</div>
                    <div>{member.role}</div>
                  </Card>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Members;