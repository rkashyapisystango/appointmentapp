import React, { useState, useEffect } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Layout from 'common/Layout';
import { Container, Row, Col } from 'reactstrap';
import { initializeData, initializeEditableData } from './initFirst';
 
import "react-datepicker/dist/react-datepicker.css";
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Home = (props) => {
  const { initialize } = props;
  const [editDisplay, setEditDisplay] = useState(false);
  const [editData, SetEditData] = useState({});

  useEffect(() => {
    initializeData(initialize);
  }, [!editDisplay]);
  useEffect(() => {
    editDisplay && initializeEditableData(initialize, editData);
  },[editDisplay]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <LeftSection 
              SetEditData={SetEditData} 
              setEditDisplay={setEditDisplay}
              editDisplay={editDisplay}
              {...props}
            />
            </Col>
          <Col>
            <RightSection {...props} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

Home.propTypes = {
  getList: PropTypes.func,
  calendarData: PropTypes.object,
}

export default reduxForm({
  form: 'caldendar-form',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: false,
})(Home);

