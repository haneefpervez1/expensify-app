import React from "react";

const Expense = ({ description, amount, createdAt}) => (
    <div>
        {description}
        {amount}
        {createdAt}
    </div>
);

export default Expense;
