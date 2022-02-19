import { useState } from "react";
import styled from "styled-components";

import ExpenseItem from "./ExpenseItem";
import Modal from "../Modal";
import { PlusCircle } from "icons";

const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-width: 350px;
  min-height: 300px;
  max-height: 300px;
  position: relative;
  border-radius: 10px;
`;

const ExpenseContainerWrapper = styled.div`
  margin-top: 10px;
  padding: 20px;
  max-height: 240px;
  overflow-y: ${({ isEmpty }) => !isEmpty && "scroll"};
  position: relative;
`;

const AddExpenseBtn = styled.button`
  background-color: #01bfa6;
  border: none;
  height: 40px;
  width: 100%;
  color: white;
  vertical-align: middle;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TitleContainer = styled.h4`
  margin-left: 10px;
`;

const EmptyContent = styled.div`
  margin-top: 30%;
  text-align: center;
  color: #b4aeae;
  cursor: pointer;
`;

const ExpenseContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { title, form: Form, expenses = [] } = props;

  const isEmpty = expenses.length === 0;

  return (
    <div>
      <Modal title={title} setShow={setShowModal} show={showModal}>
        <Form setShowModal={setShowModal} />
      </Modal>
      <TitleContainer>{title}</TitleContainer>
      <Wrapper>
        <ExpenseContainerWrapper isEmpty={isEmpty}>
          {expenses?.length > 0 ? (
            expenses.map((item) => <ExpenseItem {...item} key={item._id} />)
          ) : (
            <EmptyContent onClick={() => setShowModal(true)}>
              <span style={{ display: "block" }}>
                Click here to add {title}
              </span>
              <PlusCircle style={{ height: "30px" }} />
            </EmptyContent>
          )}
        </ExpenseContainerWrapper>
        {!isEmpty > 0 && (
          <AddExpenseBtn onClick={() => setShowModal(true)}>
            Add expense
          </AddExpenseBtn>
        )}
      </Wrapper>
    </div>
  );
};

export default ExpenseContainer;
