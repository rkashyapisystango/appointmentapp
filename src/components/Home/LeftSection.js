import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import { Field } from 'redux-form';
import { renderField } from 'utils/formUtils/index';
import { required } from 'utils/formUtils/validator';
import "react-datepicker/dist/react-datepicker.css";

const LeftSection = (props) => {
    const { change, editDisplay, reset, handleSubmit, handleAddDate } = props;
  const [timeSelected, setTime] = useState('00:00');
  const [startDate, setStartDate] = useState(new Date());
  return (
        <div>
            <form onSubmit={(formData => console.log(formData))}>
                <TimePicker
                    onChange={(data) => { 
                        setTime(data);
                        change('timeSelected', data);
                    }}
                    value={timeSelected}
                />
                <DatePicker
                    selected={startDate}
                    onChange={(data) => {                 
                        if(data) {
                            change('date', data);
                            setStartDate(data);
                        } else {
                            change('date', new Date());
                            setStartDate(new Date());
                        }}
                    }
                    disabledKeyboardNavigation
                />
                <Field
                    name="title"
                    type="text"
                    component={renderField}
                    placeholder={""}
                    label="Job Title"
                    validate={[required]}
                />
                <Field
                    name="companyName"
                    type="text"
                    component={renderField}
                    placeholder={""}
                    label="Company Name"
                    validate={[required]}
                />
                <Field
                    name="companyStreet"
                    type="text"
                    component={renderField}
                    placeholder={""}
                    label="Company Street"
                />
                <Field
                    name="companyCity"
                    type="text"
                    component={renderField}
                    placeholder={""}
                    label="Company City"
                />
                <Field
                    name="comments"
                    type="textarea"
                    component={renderField}
                    placeholder={""}
                    label="Comments"
                    rows={5}
                />
                {
                    !editDisplay  && 
                    <div>
                        <Button
                            type="submit"
                            className=""
                            outline
                            onClick={handleSubmit(formData => {
                                console.log('work', formData)
                                handleAddDate({ formData, ...props })
                            }
                               
                            )}                           
                        >Add</Button>
                    </div>
                }
                { 
                    editDisplay && 
                    <div>
                        <Button
                            type="submit"
                            className=""
                            outline
                            // onClick={handleSubmit(formData =>
                            // handleEtaDate({ formData, ...props }),
                            // )}
                        >Edit</Button>
                        <Button
                            type="button"
                            className=""
                            outline
                            // onClick={handleSubmit(formData =>
                            // handleEtaDate({ formData, ...props }),
                            // )}
                        >Remove</Button>
                        <Button
                            type="button"
                            className=""
                            outline
                            onClick={() => { reset()}}
                        >Cancel</Button>
                    </div>
                }
            
            </form>
        </div>
    )
}

LeftSection.propTypes = {
}

export default LeftSection
